import mongoose, { mongo } from "mongoose";4

const connectDB=async ()=>{
     try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');

     }catch(error){
        console.log(error);

     }
}

export default connectDB;