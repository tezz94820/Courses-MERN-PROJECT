const express = require('express')
const router = express.Router()
const { getAllCourses , getCourse , enrollCourse} = require('../controllers/course')

router.route('/').get(getAllCourses)
router.route('/:id').get(getCourse)
router.route('/enroll/:id').get(enrollCourse)

module.exports = router