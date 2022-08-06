const express = require('express')
const router = express.Router()
//importing controllers
const {getAllUsers , createCourse, updateCourse, deleteCourse , getUserCourses , getCourseUsers} = require('../controllers/admin')

//routes
router.route('/user/').get(getAllUsers)
router.route('/user/:id').get(getUserCourses)
router.route('/course/').post(createCourse)
router.route('/course/:id').delete(deleteCourse).patch(updateCourse).get(getCourseUsers)

module.exports = router