const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')
const validator = require ('require')

const Schema = mongoose.Schema

//schema for login
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function(email, password) {
    
    //validation
    if(!email || !password) {
        throw Error (' all feilds must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error ('email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error ('this passord is too weak')
    }


    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email is already used')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt) 
    const user = await this.create({ email, password: hash})


    return user
}

module.exports = mongoose.model('User', userSchema) 