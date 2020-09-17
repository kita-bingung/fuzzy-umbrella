const router = require('express').Router()
const RegisterRouter = require('./registerRouter')
const CardRouter = require('./cardRouter')

router.get('/', (req, res) => res.status(200).json({ msg: "welcome to fuzzy-umbrella"}))
router.use('/register', RegisterRouter)
router.use('/cards', CardRouter)


module.exports = router