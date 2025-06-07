/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express')
const router = express.Router()


const { registerController } = require('../controllers/authControllers');
const { verifyUserMiddleware,validateEmailMiddleware } = require('../middlewares/authMiddleware');



const registerRoute = router.post("/register",[validateEmailMiddleware],registerController)
const signInRoute = router.post("/login",verifyUserMiddleware)
const test = router.get("/login/test",(req,res) =>{
    res.send({message:'testing 123'})
})



const authRoutes = {registerRoute, signInRoute, test}


module.exports  = authRoutes