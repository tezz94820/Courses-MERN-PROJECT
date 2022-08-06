const Course = require('../models/Course')
const User = require('../models/User')


const getAllCourses = async (req,res) => {
    const courses = await Course.find({})
    res.status(200).json({courses})
}


const getCourse = async (req, res) => {
    const course = await Course.findById(req.params.id)
    if (!course) {
        throw new Error('Course not found')
    }
    res.status(200).json({course})
}



const enrollCourse = async (req,res) => {

    try {
        const user = await User.findOneAndUpdate({_id:req.user.userId} ,{$push : {courses_enrolled:{course:req.params.id , enrollDate:new Date()}}})
        res.status(200).send("Course enrolled")
    } catch (error) {
        console.log(error.message)
        throw new Error("Course not emrolled")
    }
}


module.exports = {getAllCourses , getCourse , enrollCourse}