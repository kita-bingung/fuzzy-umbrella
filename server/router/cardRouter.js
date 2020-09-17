const UserController = require('../controller/userController')
const CardController = require('../controller/cardController')
const router = require('express').Router()

router.get('/', CardController.randomCard)

module.exports = router