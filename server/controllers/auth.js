const { json } = require('express')
const User = require('../models/User')


const register = async (req,res) => {
    try {
        const user = await User.create({...req.body})
        const token = await user.createJWT()
        res.status(201).json({name:user.name,token,role:user.role,userId:user._id})
    } catch (error) {
        res.status(500).json({error})
    }
}


const login = async (req,res) => {
    const {email,password} = req.body
    if(!email || !password){
        throw new Error('Please enter a valid email address or password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Please enter a valid email address or password')
    }
    const passwordMatched = await user.comparePassword(password)
    if(!passwordMatched){
        throw new Error('Passwords do not match')
    }
    const token = await user.createJWT()
    res.status(200).json({name:user.name,token})
}



module.exports = {login,register }