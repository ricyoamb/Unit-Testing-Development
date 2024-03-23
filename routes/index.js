const express = require('express')

const router = express.Router()
const movieRouter = require('./movie.route.js')
const path = require('path')

router.use('/api/images', express.static(path.join(__dirname, '../images')))
router.use('/api/movies', movieRouter)

module.exports = router
