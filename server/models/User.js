const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide name'] ,
        maxLength:50
    } ,
    password:{
        type:String,
        required:[true,'please provide password'] 
    } ,
    email:{
        type:String,
        required:[true,'please provide email address'],
        unique:true,
        match:[
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ , 
            'please provide a valid email address'
        ]
    } ,
    contact:{
        type:Number,
        required:[true,'Please provide contact number'] , 
        unique:true,
        match:[
            /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/ ,
            'Please provide a valid contact number'
        ]
    } ,
    role:{
        type:String,
        required:[true,'Please provide role'] ,
        enum:['admin','user']
    } ,
    courses_enrolled:[
        {
            course:String ,
            enrollDate:Date
        }
    ]
})


//encryption of the password using pre mongoose middleware.
//password => pre middleware does encryption => encrypted password saved in the database.
UserSchema.pre('save' , async function(req,res)  {
    const salt = await bcrypt.genSalt(10)                   //generated 10 random patterns
    this.password = await bcrypt.hash(this.password,salt)   //hashed password with the generated salt
}) 

//comparing the password by bcrypt
UserSchema.methods.comparePassword = async function(userPassword) {
    const isMatch = await bcrypt.compare(userPassword,this.password)
    return isMatch
}


//creating token
UserSchema.methods.createJWT = async function(req,res) {
    const token = await jwt.sign({userId:this._id,username:this.name,userRole:this.role},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
    return token
}





module.exports = mongoose.model('User', UserSchema)