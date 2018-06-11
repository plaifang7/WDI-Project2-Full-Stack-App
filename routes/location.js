const express = require('express')
const router = express.Router()
const Park = require('../models/location')

router.get('/', (req, res, next) => {
    Park
        .find()
        .then((parkProf) => {
            console.log(parkProf)
            res.render('parks/index', { parkProf: parkProf})
        })
        .catch((err) => {
            res.send(err)
        })

})


module.exports = router;