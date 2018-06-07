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
      description: 'King is a very energetic dog who loves to play with other dogs, both big and small. He is mixed with Pitbull and Jack Russell Terrier',
      image: 'String'
    })

    const dog3 = new Dog({
      name: 'String',
      breed: 'String',
      age: 3,
      description: 'String',
      image: 'String'
    })

    const dog4 = new Dog({
      name: 'String',
      breed: 'String',
      age: 1,
      description: 'String',
      image: 'String'
    })

    const user1 = new User({
      name: 'Peter Whiskers',
      image: 'http://www.digitaljournal.com/img/8/7/8/i/7/9/0/o/wesPress3.jpg',
      favPark: 'Piedmont Dog Park',
    })

    const user2 = new User({
      name: 'Patrick Lai-Fang',
      image: 'https://imgur.com/0nXkegq',
      favPark: 'Glenlake Dog Park'
    })

    const user3 = new User({
      name: 'Nigel Ratburn',
      image: 'https://imgur.com/0nXkegq',
      favPark: 'Oakhurst Dog Park'
    })

    const users = [user1, user2, user3]

    return User.insertMany(users)
  })

  .then(() => {
    mongoose.connection.close()
  })


