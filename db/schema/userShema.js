const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    image: String,
    favPark: String,
    location: [ parkSchema ],
    dog: [ dogSchema ]
})