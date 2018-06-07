const Schema = require('mongoose').Schema;

var locationSchema = new Schema({
    parkName: String,
    image: String,
    streetAddress: String,
    description: String,
    date: Date
});

module.exports = locationSchema;