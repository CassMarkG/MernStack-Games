import mongoose from "mongoose";

export const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email address'],
        unique:true,
    },
    password: {
        type: String,
        required:[true, 'Please enter a password'],
    },
},{timestamps:true})

var needat1 = mongoose.model('Admin', adminSchema);

export default needat1;