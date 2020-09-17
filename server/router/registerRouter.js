const UserController = require('../controller/userController')
const router = require('express').Router()

router.post('/', UserController.register)

module.exports = router