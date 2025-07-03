import mongoose, { mongo } from "mongoose";

const jobSchema=new mongoose.Schema({
     title:{
         type:String,
         required:String,
     },
      description:{
         type:String,
         required:String,
     },
      requiredments:{
         type:String,
         required:String,
     },
      salary:{
         type:String,
         required:String,
     },
     location:{
        type:String,
         required:true
     },
     jobType:{
        type:String,
        required:true
     },
     position:{
        type:Number,
        required:true,
     },
     company:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'Company',
         required:true,
     },
     created_by:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'User',
         required:true,
     },
     applications:[
        {
          type:mongoose.Schema.Types.ObjectId,
         ref:'Application',
           
        }
     ]


},{timestamps:true});

export const  Job=mongoose.model("Job",jobSchema);

 