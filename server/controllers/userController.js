import dotenv from 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';


export const createUser = asyncHandler(async (req,res) => {
    const {fname,lname, email, password} = req.body;
    

    if(!fname || !lname || !email || !password){
        res.status(400)
        throw new Error('Please add all fields');
    }

    //check if user exists
    const userExists = await userModel.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create user
    const user = await userModel.create({
        fname,
        lname,
        email,
        password: hashedPassword,
    })

    //create token and get user id
    const token = generateToken(user._id);

    if(user){
        res.status(201).json(
            {
             _id: user.id,
            fname: user.name,
            lname: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
            })
            console.log('User Registration succesfull');
        }
        else{
            res.status(400)
            throw new Error('Invalid user data')
        }

})

export const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400)
        throw new Error('Please Login');
    }

    //check user email
    const user = await userModel.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        res.json(
            {
             _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
            })
            console.log('User login succesfull');
    }
    else{
//        console.log('Invalid Credientials');
        res.status(400)
        throw new Error('Invalid credientials')
    }
})

export const getUser = asyncHandler(async(req,res) => {
    // const user_id = req.user._id;
    const getAll = await userModel.find({});
    res.status(200).json(getAll)
})

export const deleteUser = asyncHandler(async (req, res) => {
    const {email} = req.body;

    const del = await userModel.findOne({email})

    if(!del){
        res.status(400)
        throw new Error('User not found');
    }else{
        await userModel.findByIdAndDelete(del)
        console.log('User deleted')
    }
    // if(!req.user){
    //     res.status(401)
    //     throw new Error('UseR not found')
    // }

    // if(del.user.toString() !== req.user.id){
    //     res.status(401);
    //     throw new Error('User not authorized');
    // }


    res.status(200).json('User deleted')
    
})

export const updateUser = asyncHandler(async (req,res) => {
    const newEmail = req.body.email
    const id = req.body.id

    const {email} = req.body

    const userExists = await userModel.findOne({email});

    if(!userExists){
        res.status(400)
        throw new Error('User does not existo')
    }else{
        const updatUser = await userModel.save({
            email,
        })

        if(updatUser){
            res.status(201).json({
                email: updatUser.email,
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }

    // const users = await userModel.findById(id, (error,updateMe) => {
    //     updateMe.
    // });

    // if(!users){
    //     res.status(400)
    //     throw new Error('user not found')
    // }
    // if(!req.user){
    //     res.status(402)
    //     throw new Error('UseR not found')
    // }
    
    // const updateU = await userModel.findByIdAndUpdate(req.params.id, req.body,{
    //     new:true,
    
    // })
    res.status(200).json(updateU);
})

const generateToken = (id) =>{
    const yeet = "abc123";

    return jwt.sign({id}, yeet, {
        expiresIn: '30d',
    })
}

export default {createUser,loginUser,getUser,deleteUser,updateUser};