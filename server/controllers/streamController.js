import asyncHandler from 'express-async-handler';
import streamModel from '../models/streamModel.js';


// @desc    Get goals
// @route   GET /api/goals
// @access  Private
export const getStream = asyncHandler(async (req, res) => {
  const stream = await streamModel.find({ user: req.user.id })

  res.status(200).json(stream)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
export const setStream= asyncHandler(async (req, res) => {
const {video,title} = req.body
    if (!video || !title) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    
      const stream = await streamModel.create({
        video,
        title,
      })

  res.status(200).json(stream)
})

// @desc    Update stream
// @route   PUT /api/stream/:id
// @access  Private
export const updateStream = asyncHandler(async (req, res) => {

  res.status(200).json();
})

// @desc    Delete stream
// @route   DELETE /api/stream/:id
// @access  Private
export const deleteStream = asyncHandler(async (req, res) => {
  
  res.status(200).json({ id: req.params.id })
})

export default {getStream,setStream,updateStream,deleteStream};