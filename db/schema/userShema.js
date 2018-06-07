const Schema = require('mongoose').Schema;

var userSchema = new Schema({
    name: String,
    image: String,
    favPark: String,
    location: [ parkSchema ],
    dog: [ dogSchema ]
});

module.exports = userSchema;