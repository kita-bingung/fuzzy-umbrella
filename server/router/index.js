const router = require('express').Router()
const RegisterRouter = require('./registerRouter')
const LoginRouter = require('./loginRouter')

router.get('/', (req, res) => res.status(200).json({ msg: "welcome to fuzzy-umbrella"}))
router.use('/register', RegisterRouter)
router.use('/login', LoginRouter)


module.exports = router