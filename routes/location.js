const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/user')
const Park = require('../models/location')

router.get('/', (req, res) => {
    console.log("Index Test for Parks")
    User
        .findById(req.params.userId)
        .then((user) => {
            const park = user.location
            res.render('parks/index', {
                user,
                park
            })
        })
        .catch((err) => {
            res.send(err)
        })

})


module.exports = router;