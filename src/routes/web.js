const { getHomepage } = require('../controllers/homeControllers')
const express = require('express')
const router = express.Router()

router.get('/', getHomepage)

module.exports = router
