import mongoose from "mongoose";

export const streamSchema = mongoose.Schema({
    video: {
        type: String,
        required:[true, 'Please add a stream'],
    },
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique:true,
    },
},{timestamps:true})

var needat2 = mongoose.model('Stream', streamSchema);

export default needat2;