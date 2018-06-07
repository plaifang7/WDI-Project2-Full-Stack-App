require('dotenv').config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const Schema = require('mongoose').Schema



mongoose.connect('mongodb://localhost/WDI-Project2-Full-Stack-App')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })


  