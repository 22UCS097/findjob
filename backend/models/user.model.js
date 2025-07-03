import mongoose, { mongo } from "mongoose";

const userSchem=new mongoose.Schema({
    fullname:{
         type:String,
         required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:Number,
        reuired:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    profile:{
         bio:{type:String},
         skills:[{type:Strign}],
         resume:{type:String},
         resumeOrginalName:{type:String},
         company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},
         profilePhoto:{
            type:String,
            default:""
         }

    }

},{timestamps:true});

export const User=mongoose.model('User',userSchem);
