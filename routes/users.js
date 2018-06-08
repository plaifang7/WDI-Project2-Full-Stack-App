const express = require('express')
const router = express.Router()
const User = require('../models/user')

// router.get('/', function(req, res, next) {
//   res.render('user/index', { title: 'Dinder' });
// });

router.get('/', (req, res, next) => {
// Find all Users
User
.find()
.then((userProfile) => {

  // Once you have all User, then render out index page Users is all
  // pieces of data that match the User Model
  res.render('user/index', { userProfile: userProfile})
})
.catch((err) => {
  res.send(err)
})

// NEW Route - Sign Up button in layout.hbs creates new profile
router.get('/new', (req, res) => {
res.render('user/new')
})

// CREATE Route
// router.post('/', (req, res) => {
// const newUser = req.body
// User
// .create(newUser)
// .then(() => {
//   res.redirect('/')
// })
// })

// SHOW Route
// router.get('/:id', (req, res) => {
// User
// .findById(req.params.id)
// .then((UserProf) => {
//   res.render('user/show', { userProf })
// })
// })

// EDIT Route
// router.get('/:id/edit', (req, res) => {
// User
// .findById(req.params.id)
// .then((update) => {
//   res.render('user/edit', { userProf: update })
// })
// })

// UPDATE Route
// router.put('/:id', (req, res) => {
// User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
// res.redirect(`/user/${req.params.id}`)
// })
// })

// DELETE Route - here this will happen if the user presses No match, 
// so I will need to figure out how to tie the button to this route.
// router.delete('/:id', (req, res) => {
// User.findByIdAndRemove(req.params.id)
// .then(() => {
//   console.log('Successfully Deleted')
//   res.redirect('/index')
// })
// })
})

module.exports = router;