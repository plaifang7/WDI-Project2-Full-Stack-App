require('dotenv').config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const Schema = require('mongoose').Schema
const User = require('../models/user');
const Dog = require('../models/dog');
const Park = require('../models/location');



mongoose.connect('mongodb://localhost/WDI-Project2-Full-Stack-App')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

User.remove()
  .then(() => {
    const park1 = new Park({
      parkName: 'Piedmont Dog Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Dog_park_in_Piedmont_Park.JPG',
      streetAddress: 'Park Dr NE, Atlanta, GA 30309',
      description: 'Piedmont Park is a haven for dogs and humans alike! While a City of Atlanta ordinance requires all dogs in public areas to be leashed, Piedmont Dog Park is one of the few locations in metro Atlanta where dogs may run free, off the leash. Since 2002, this special off-leash area is one of the most popular features of Piedmont Park.', 
      website: 'https://www.piedmontpark.org/things-to-do/dog-parks/'
    })
    const park2 = new Park({
      parkName: 'GlenLake Dog Park',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/08/be/60/cf/glenlake-park-pool.jpg',
      streetAddress: 'Park Dr NE, Atlanta, GA 30309',
      description: 'Decatur Dog Parks have been busy with families, neighbors and four-legged friends visiting and playing together. Dog parks give citizens and their dogs an opportunity to exercise and socialize', 
      website: 'http://www.decaturga.com/city-government/city-departments/active-living/dog-parks'
    })
    const dog1 = new Dog({
      name: 'Fido',
      breed: 'Mini Schnauzer',
      age: 2,
      description: 'Fido is a fun loving dog who loves to play with other small dogs. He is a fullbred Mini Schnauzer. He is very scared of dogs bigger than him, but plays with them after some time. He loves to play fetch with his ball and tug-o-war with his rope.',
      image: 'https://vetstreet-brightspot.s3.amazonaws.com/e5/391c20a8bf11e0a0d50050568d634f/file/miniature-schnauzer-1-645mk070411.jpg'
    })
    const dog2 = new Dog({
      name: 'King',
      breed: 'Pitbull Mix',
      age: 1,
      description: 'King is a very energetic dog who loves to play with other dogs, both big and small. He is mixed with Pitbull and Jack Russell Terrier, which illustrates just the ball of energy he is! His favorite toys are his ball, kong and chewing ring. He loves to play fetch and catches like a champ. ',
      image: 'https://i.imgur.com/KePgseE.jpg'
    })

    const dog3 = new Dog({
      name: 'Princess',
      breed: 'Pitbull',
      age: 3,
      description: 'Princess is a fun-loving Pitty who loves to play with her brother King. Although they differ in size, they play as if they are the same size. Her favorite toys are her ball, her rope and her cone.',
      image: 'https://i.pinimg.com/originals/8f/9a/0d/8f9a0d9e75359af7b95b200d21fdc0e6.jpg'
    })

    const dog4 = new Dog({
      name: 'Jimbo',
      breed: 'Sharpei',
      age: 1,
      description: 'Jimbo is a well-trained, very playful Sharpei. He plays well with other big dogs. As far as small dogs, he can get a little rough, but is trained to stop when he gets out of hand. His favorite toy is his ball.',
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/shar-pei-playing-in-a-spare-tire-jeanne-white.jpg'
    })

    const user1 = new User({
      name: 'Wes Bos',
      image: 'http://www.digitaljournal.com/img/8/7/8/i/7/9/0/o/wesPress3.jpg',
      favPark: 'Piedmont Dog Park',
      dog: [dog1],
      location: [park1]
    })

    const user2 = new User({
      name: 'Patrick Lai-Fang',
      image: 'https://i.imgur.com/3CzpYJx.png',
      favPark: 'Glenlake Dog Park',
      dog: [dog2, dog3],
      location: [park2]
    })

    const user3 = new User({
      name: 'Nigel Ratburn',
      image: 'https://vignette.wikia.nocookie.net/arthur/images/e/ef/Nigel_Ratburn.png/revision/latest?cb=20170617230759',
      favPark: 'Glenlake Dog Park',
      dog: [dog4],
      location: [park2]
    })

    const users = [user1, user2, user3]
    const parks = [park1, park2]
    const dogs = [dog1, dog2, dog3, dog4]

    return User.insertMany(users)
    return Park.insertMany(parks)
    return Dog.insertMany(dogs)
  })

  .then(() => {
    mongoose.connection.close()
  })


