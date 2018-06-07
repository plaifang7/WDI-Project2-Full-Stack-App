const Schema = require('mongoose').Schema

var dogSchema = new Schema({
    name: String,
    breed: String,
    age: Number,
    description: String,
    image: String
});

module.exports = dogSchema