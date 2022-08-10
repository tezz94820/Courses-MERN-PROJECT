const User = require('../models/User')
const Course = require('../models/Course')

//user related controllers
const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json({user})
    } catch (error) {
        throw new Error(error.message)
    }
}

//course related controllers
const createCourse = async (req,res) => {
    const course = await Course.create({...req.body})
    // course.toJSON().course_status
    res.status(201).json({course})
}

const updateCourse = async (req,res) => {
    const {title , start_date , end_date} = req.body
    if(title=='' || start_date=='' || end_date=='') {
        throw new Error('title or start_date or end_date cant be empty')
    }
    const course = await Course.findByIdAndUpdate(req.params.id, req.body , {new:true,runValidators:true})
    res.status(200).json({course})
    
}

const deleteCourse = async (req,res) => {
    try {
        const course = await Course.findByIdAndRemove({_id:req.params.id})
        res.status(200).send("Deleted Course")
    } catch (error) {
        throw new Error('Course not found')   
        
    }
}
    

const getUserCourses = async (req, res) => {
    try {
        const user = await User.findOne({_id:req.params.id})
        const courseIds = user.courses_enrolled.map(course=>course.course)
        // const enrolldate = user.courses_enrolled.map(course=>course.enrollDate)
        const courses = await Course.find({_id:courseIds})
        res.status(200).json({'courses':courses})
    } catch (error) {
        throw new Error('cannot get user')
    }
}

const getCourseUsers = async (req, res) => {
    try {
        const user = await User.find({"courses_enrolled.course":req.params.id})
        res.status(200).json({user})
    } catch (error) {
        throw new Error('user not found')
    }
}

module.exports = {getAllUsers , createCourse , updateCourse , deleteCourse , getUserCourses , getCourseUsers}