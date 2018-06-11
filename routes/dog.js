const express = require('express')
const router = express.Router({mergeParams: true});
const User = require('../models/user')
const Dog = require('../models/dog')

// This gives the user functionality to add a new dog to their profile
router.get('/new', (req, res, next) => { 
       res.render('dog/new', {
           userId: req.params.userId
       })
   }) 

//Create Route for new Dog
router.post('/', (req, res) => {
    const newDog = req.params.userId
    User
        .create(newDog)
        .then(() => {
            res.redirect(`/users/${newDog}`)
        })
})




module.exports = router;