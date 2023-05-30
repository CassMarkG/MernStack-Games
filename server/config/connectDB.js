import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const source = 'mongodb+srv://username:<password>@finalpd.aos26kz.mongodb.net';// get this from mongoDB by creating your own database

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(source);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;