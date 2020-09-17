const UserController = require('../controller/userController')
const router = require('express').Router()

router.post('/', UserController.login)

module.exports = router