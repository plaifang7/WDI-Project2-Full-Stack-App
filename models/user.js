const mongoose = require('mongoose')
const userSchema = require('../db/schema/userShema')

const User = mongoose.model('user', userSchema)

module.exports = User;