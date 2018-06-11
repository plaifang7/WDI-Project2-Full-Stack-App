const Schema = require('mongoose').Schema;
const parkSchema = require('./locationSchema')
const dogSchema = require('./dogSchema')

var userSchema = new Schema({
    name: String,
    image: String,
    favPark: String,
    location: [parkSchema],
    dog: [dogSchema]
});

module.exports = userSchema;