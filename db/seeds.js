require('dotenv').config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const Schema = require('mongoose').Schema
const User = require('../models/user');
const Dog = require('../models/dog');
// const Park = require('../models/location');



mongoose.connect('mongodb://localhost/WDI-Project2-Full-Stack-App')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

User.remove()
  .then(() => {
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
      image: 'https://imgur.com/KePgseE'
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
      name: 'Peter Whiskers',
      image: 'http://www.digitaljournal.com/img/8/7/8/i/7/9/0/o/wesPress3.jpg',
      favPark: 'Piedmont Dog Park',
      dog: [dog1]
    })

    const user2 = new User({
      name: 'Patrick Lai-Fang',
      image: 'https://imgur.com/0nXkegq',
      favPark: 'Glenlake Dog Park',
      dog: [dog2, dog3]
    })

    const user3 = new User({
      name: 'Nigel Ratburn',
      image: 'https://vignette.wikia.nocookie.net/arthur/images/e/ef/Nigel_Ratburn.png/revision/latest?cb=20170617230759',
      favPark: 'Oakhurst Dog Park',
      dog: [dog4]
    })

    const users = [user1, user2, user3]

    return User.insertMany(users)
  })

  .then(() => {
    mongoose.connection.close()
  })


