const Schema = require('mongoose').Schema;

var parkSchema = new Schema({
    parkName: String,
    image: String,
    streetAddress: String,
    description: String,
    date: Date
});

module.exports = parkSchema;