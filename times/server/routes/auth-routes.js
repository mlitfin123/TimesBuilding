const express = require('express')
const authRoute = require('./../controllers/auth-controller.js')
const router = express.Router()

router.get('/loggedin', authRoute.userAuth)

module.exports = router