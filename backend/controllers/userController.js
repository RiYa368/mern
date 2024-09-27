const user = require('../models/userModel')
const jwt = require('jsonwebtoken')


// this mean that the user will logout automatically in 3 days
const createToken = (_id) => {
return jwt.sign({_id}, process.env.Secret, {expiresIn: '3d' })
}


//login user
const loginUser = async (req,res) => {
    const {email,password} = req.body

    try{
        const user = await User.login(email, password)

        //creating a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req,res) => {
const {email, password} = req.body

    try{
        const user = await User.signup(email, password)

        //creating a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser}