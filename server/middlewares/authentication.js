const User = require('../models/User')
const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const authHeader = req.headers.authorization
    //checking header 
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new Error('Invalid authorization header')
    }

    //get token by splliting
    const token = authHeader.split(' ')[1]
    
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        req.user = { userId:payload.userId , username:payload.username , userRole:payload.userRole}
        next()
    } catch (error) {
        throw new Error('Invalid authorization header')
    }


}

module.exports = auth