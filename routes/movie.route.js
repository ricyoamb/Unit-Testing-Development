const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movie.controller.js')
const multer = require('../middlewares/multer.js')

router.get('/', MovieController.findAll)

router.get('/:id', MovieController.findOne)

router.post('/', MovieController.create)

router.post('/images', multer, MovieController.uploads)

router.put('/:id', MovieController.update)

router.delete('/:id', MovieController.destroy)

module.exports = router
