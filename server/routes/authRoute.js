const express = require('express')
const router = express.Router()

//importing controllers
const {login , register} = require('../controllers/auth')

//routes
router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router