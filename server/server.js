import dotenv from 'dotenv';
import express from "express"
import connectDB from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import streamRoute from "./routes/streamRoute.js";

dotenv.config();
const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/streams', streamRoute);
app.use('/api/users', userRoute);
app.use('/api/admins', adminRoute);

connectDB();

app.listen(Port, () => console.log(`Server running on port: ${Port}`));
