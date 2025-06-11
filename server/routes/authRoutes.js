/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express')
const router = express.Router()


const  auth  = require('../controllers/authControllers');
const { verifyUserMiddleware,validateEmailMiddleware } = require('../middlewares/authMiddleware');



const registerRoute = router.post("/register",[validateEmailMiddleware],auth.registerController)
const verifyUserRoute = router.get("/verify-email/:id/:token",auth.verifyUserController)
const signInRoute = router.post("/login",[verifyUserMiddleware],auth.signInController)
const resetPasswordRequestRoute = router.post("/reset-password-request",[verifyUserMiddleware],auth.resetPasswordRequestController)
const resetPasswordRoute = router.post("/reset-password",[verifyUserMiddleware],auth.signInController)
const test = router.get("/login/test",(req,res) =>{
    res.send({message:'welcome to syndeo portal routes'})
})



const authRoutes = {registerRoute, signInRoute, test,verifyUserRoute,resetPasswordRequestRoute,resetPasswordRoute }


module.exports  = authRoutes