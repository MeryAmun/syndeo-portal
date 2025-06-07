/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:mongoose.SchemaTypes.ObjectId,
    email:{
        type:String,unique:true,required:true,
        
    },
    password:{
        type:String,required:true,
        
    },
    isVerified:{type:Boolean,default:false},
    role:{
        type:String, default:"SCHOOL_ADMIN"
    }
})

module.exports = mongoose.model("User",UserSchema)