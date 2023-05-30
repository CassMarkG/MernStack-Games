import dotenv from 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import adminModel from '../models/adminModel.js';


export const createAdmin = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body;
    

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields');
    }

    //check if user exists
    const userExists = await adminModel.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('Admin already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create user
    const user = await adminModel.create({
        name,
        email,
        password: hashedPassword,
    })

    //create token and get user id
    const token = generateToken(user._id);

    if(user){
        res.status(201).json(
            {
             _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
            })
            console.log('Admin Registration succesful');
        }
        else{
            res.status(400)
            throw new Error('Invalid admin data')
        }

})

export const loginAdmin = asyncHandler(async(req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400)
        throw new Error('Please Login');
    }

    //check user email
    const user = await adminModel.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        res.json(
            {
             _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
            })
            console.log('Admin login succesfull');
    }
    else{
//        console.log('Invalid Credientials');
        res.status(400)
        throw new Error('Invalid credientials')
    }
})

export const getAdmin = asyncHandler(async(req,res) => {
    res.status(200).json(req.user)
})

export const deleteAdmin = asyncHandler(async (req, res) => {
  
    res.status(200).json({ id: req.params.id })
})

export const updateAdmin = asyncHandler(async (req,res) => {
    res.status(200).json(req.user);
})

const generateToken = (id) =>{
    const yeet = "abc123";

    return jwt.sign({id}, yeet, {
        expiresIn: '30d',
    })
}

export default {createAdmin,loginAdmin,getAdmin,deleteAdmin,updateAdmin};