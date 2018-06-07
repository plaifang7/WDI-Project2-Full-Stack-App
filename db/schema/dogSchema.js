const mongoose = require('mongoose')
const Schema = mongoose.Schema

var dogSchema = new Schema({
    name: String,
    breed: String,
    age: Number,
    description: String,
    image: String
});