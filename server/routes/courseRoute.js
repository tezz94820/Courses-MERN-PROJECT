const express = require('express')
const router = express.Router()
const { getAllCourses , getCourse , enrollCourse , getUserCourses} = require('../controllers/course')

router.route('/').get(getAllCourses)
router.route('/:id').get(getCourse)
router.route('/user/:id').get(getUserCourses)
router.route('/enroll/:id').get(enrollCourse)

module.exports = router