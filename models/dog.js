const mongoose = require('mongoose')
const dogSchema = require('../db/schema/dogSchema')

const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog;