const express = required('express')

// controller functions


const { signupUser, loginUser } = require('../controllers/userController')


const router = express.Router()

//login route
router.post('/login', loginUser)

//signup routes
router.post('/signup', signupUser)

 module.exports = router