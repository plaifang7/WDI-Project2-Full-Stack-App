const mongoose = require('mongoose')
const Schema = mongoose.Schema

var parkSchema = new Schema({
    parkName: String,
    image: String,
    streetAddress: String,
    description: String,
    date: Date
});