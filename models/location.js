const mongoose = require('mongoose')
const dogSchema = require('../db/schema/locationSchema')

const Park = mongoose.model('park', locationSchema)

module.exports = Park;