/* eslint-disable @typescript-eslint/no-require-imports */
const  bcrypt = require("bcrypt")
const User = require("../models/UserModel")
const jwt = require('jsonwebtoken');




 const registerController = async (req, res) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({email})
    try {
        if(existingUser){
            res.status(409).json({
                status:"error",
                message:"This email is already in use"
            })
        }else{
            const hashedPassword = bcrypt.hash(password)
            newUser = new User({email,hashedPassword})
            await newUser.save()
            res.status(201).json({
                status:"success",
                message:"User registered Successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            status:"error",
            message:error.message
        })
    }



}


 const signInController = async (req, res) => {
    const { email,password} = req.body

    const user = await User.findOne({email})
    try {
        if(!user) return res.status(404).send({message:"User not found!"})
      
const {email,id} = user
// const user = {id:id,email:email}
const token = jwt.sign({email,id},process.env.JWT_SECRET_KEY,{expiresIn:"1h"})
const passwordMatch = bcrypt.compareSync(user.password,password)
if(user && passwordMatch){
    return  res.status(201).json({token,message:"User Logged In"})
    
}
} catch (error) {
        res.status(500).json({
            status:"error",
            message:error.message
        })
    }

    // async(req, res) => {
    //  const user = new User({
    //         email:req.body.email,
    //         password:req.body.password
    //     })
    // try {
    //     const newUser = await user.save();
    //     res.status(201).json(newUser)
        
    // } catch (error) {
    //     console.log(error)
    //     res.status(400).json({message:error.message})
    // }
}

module.exports = { registerController,signInController }