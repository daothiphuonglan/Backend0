const { getHomepage } = require('../controllers/homeControllers')
const {postCreateUser, getCreatePage} = require('../controllers/homeControllers')
const express = require('express')
const router = express.Router()

router.get('/', getHomepage)

router.post('/create-user',postCreateUser)

router.get('/create',getCreatePage)


module.exports = router
