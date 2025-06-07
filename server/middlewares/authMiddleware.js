/* eslint-disable @typescript-eslint/no-require-imports */
const { validate }= require("deep-email-validator")
const User = require("../models/UserModel")
const jwt = require('jsonwebtoken');

const validateEmailMiddleware = async (req,res,next) => {
    const email = req.body.email
    const validateEmail = await validate(email)

    if(!validateEmail.valid){
        return res.status(400),send({
            message:"email is not Valid, please check email and try again!"
        })
    }else{
        next()
    }

}

 const verifyUserMiddleware = async (req,res,next) => {
const { email } = req.body;
const user = await User.findOne({email});
if(!user.isVerified){
    res.status(500).send({
        status:"error",
        message:"User is not verified! please check email for verification Link"
    })
}else{
    next()
}
}


const verifyToken = async (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token === null) {return res.status(401).send({
        status:"error",
        message:"No token provided"
    })
}else{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user) => {
            if (err)  {
                return res.status(401).send({
        status:"error",
        message:`JWT error ${err.message}`})
     } else {
        re.user = user;
        next()
     }   
    
    })
    }
}

module.exports = { validateEmailMiddleware, verifyUserMiddleware,verifyToken}