const mongoose = require('mongoose')
const locationSchema = require('../db/schema/locationSchema')

const Park = mongoose.model('park', locationSchema)

module.exports = Park;