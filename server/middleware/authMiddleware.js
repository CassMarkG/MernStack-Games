import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from '../models/userModel.js';
import dotenv from 'dotenv/config';


// export const protect = asyncHandler(async (req,res,next) => {
//     let token 

//     if(
//         req.headers.Authorization &&
//         req.headers.authorization.startsWith('Bearer')
//         )
//         {//get token from header
//         token = req.headers.authorization.split(' ')[1];}
//         {
//         try {
//             //verify token
//             const decoded = jwt.verify(token, process.env.JWT_SECRET)

//             //get user from the token
//             req.user = await User.findById(decoded.id).select('-password')
//             next()
//         } catch (error) {
//             console.log(error)
//             res.status(401)
//             throw new Error('Not authorized')
//         }
//     }

//     if(!token){
//         res.status(401)
//         throw new Error('Not authorized, no token')
//     }
// })

export const protect = asyncHandler( async(req,res,next) => {
     let token;

     if(
         req.headers.authorization && 
         req.headers.authorization.startsWith('Bearer')
     )
     {
         token = req.headers.authorization.split(' ')[1];
     }
     if(!token){
         return res.status(400).json({error: 'Token missing'})    
     }
     try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         // req.user = decoded;
         //req.user = await User.findById(decoded.id).select('-password')
            const user = await User.findById(decoded.id);

            if(!user){
                return next(new ErrorResponse("No user found with is id", 404))
            }

            req.user = user;
        next();    
     } catch (error) {
//        // return res.status(400).json({error: 'token invalid'})
            return next(new ErrorResponse("Not Authorized to access this route",401))
    }
 })

// export const protect = asyncHandler(async (req,res,next) => {
//     const authHeader = req.headers['authorization'];

//         if(!authHeader) return res.sendStatus(401)
//         console.log(authHeader) //bearer token

//         const token = authHeader.split(' ')[1]
//         jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
//             if(err) return res. sendStatus(403) //invalid token
//             req.user = decoded.id
//             next()
//         })
// })

// export const protect = asyncHandler(async (req,res,next) => {
//     //verify authentication
//     const {authorization} = req.headers

//     if(!authorization){
//         return res.status(401).json({error: 'Authorization token required'})
//     }
//     const token  = authorization.split(' ')[1]

//     try {
//         const {_id} = jwt.verify(token, process.env.JWT_SECRET)
//         req.user = await User.findOne({_id}).select('_id')
//         next()
//     } catch (error) {
//         console.log('error with the id again')
//         res.status(401).json({error: 'Request is not authorized'})
//     }
// })

export default {protect};