const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {

    static async register(req, res, next) {
        try {
            const { username, email, password, imgUrl } = req.body
            const user = await User.create({
                username,
                email,
                password,
                imgUrl
            })
            res.status(200).json({
                message: 'register success',
                id: user.id,
                username: user.username,
                email: user.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user) throw { msg: "Invalid email or password" }
            let compare = comparePassword(password, user.password)
            if (!compare) throw { msg: "Invalid email or password" }
            let payload = {
                id: user.id,
                email: user.email
            }
            let access_token = generateToken(payload)
            res.status(200).json({ access_token })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController