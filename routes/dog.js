const express = require('express')
const router = express.Router({ mergeParams: true });
const User = require('../models/user')
const Dog = require('../models/dog')

// This gives the user functionality to add a new dog to their profile
router.get('/new', (req, res, next) => {
    res.render('dog/new', {
        userId: req.params.userId
    })
})




//Create Route for Add Dog
router.post('/', (req, res) => {
    console.log("create dog")
    const userId = req.params.userId
    const newDog = req.body
    User
        .findById(userId)
        .then((user) => {
            const doggy = user.dog
            doggy.push(newDog)
            return user.save()
            console.log("dog created")
        })
        .then(() => {
            res.redirect(`/users/${userId}`)
        })
})

//Delete Dog
router.get('/:dogId/delete', (req, res) => {
    const userId = req.params.userId
    const dogId = req.params.dogId
    User
    .findById(userId)
    .then((user) => {
        const doggy = user.dog
        console.log(doggy)
        doggy.id(dogId).remove()
        return user.save()
    })
    .then(() =>{
        res.redirect(`/users/${userId}`)
    })
    })




module.exports = router;