const express = require('express')
const router = express.Router()
const Park = require('../models/location')

router.get('/', (req, res, next) => {
    Park
        .find()
        .then((parkProfile) => {
            res.render('parks/index', { parkProfile: parkProfile })
        })
})


module.exports = router;