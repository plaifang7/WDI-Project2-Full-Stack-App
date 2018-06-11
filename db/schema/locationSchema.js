const Schema = require('mongoose').Schema;

var locationSchema = new Schema({
    parkName: String,
    image: String,
    streetAddress: String,
    description: String,
    website: String
});

module.exports = locationSchema;