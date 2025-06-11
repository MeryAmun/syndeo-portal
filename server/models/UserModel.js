/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:mongoose.SchemaTypes.ObjectId,
    email:{
        type:String,unique:true,required:true,
        
    },
    password:{
        type:String
        
    },
    nameOfSchool:{type:String,required:false,unique:true},
    schoolType:{type:String,required:false},  //government or private
    abbreviation:{type:String,required:false},
    proprietorName:{type:String,required:false,unique:true},
    proprietorEmail:{type:String,required:false,unique:true},
    profileUrl:{type:String,required:false,unique:true},
    registrationNumber:{type:String,required:false,unique:true},
    yearFounded:{type:Number,required:false},
     streetAddress:{type:String,required:false},
     emailAddress:{type:String,required:false},
     phoneNumber:{type:String,required:false,unique:true},
     postalAddress:{type:String,required:false},
     country:{type:String,required:false},
     region:{type:String,required:false},
     city:{type:String,required:false},
     principalName:{type:String,required:false,unique:true},
     principalEmail:{type:String,required:false,unique:true},
     principalPhoneNumber:{type:String,required:false,unique:true},
     role:{type:String,required:false},
     numberOfStudents:{type:Number,required:false},
     numberOfTeachers:{type:Number,required:false},
     addedOn:{type:String,required:false},
    isVerified:{type:Boolean,default:false},
    role:{
        type:String, default:"SCHOOL_ADMIN"
    }
})

module.exports = mongoose.model("User",UserSchema)

// nameOfSchool:String,
//     schoolType:String,  //government or private
//     abbreviation:String,
//     proprietorName:String,
//     proprietorEmail:String,
//     profileUrl:String,
//     registrationNumber:String,
//     yearFounded:number,
//      streetAddress:String,
//      emailAddress:String,
//      phoneNumber:String,
//      postalAddress:String,
//      country:String,
//      region:String,
//      city:String,
//      principalName:String,
//      principalEmail:String,
//      principalPhoneNumber:String,
//      role:String,
//      numberOfStudents:number
//      numberOfTeachers:number
//      addedOn:String