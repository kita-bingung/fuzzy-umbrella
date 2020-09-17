const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {

    static async register(req, res, next) {
        try {
            const { username, imgUrl } = req.body
            const user = await User.findOne({
                where: {
                    username
                }
            })
            if (user) {
                const access_token = generateToken({
                    id: user.id,
                    username: user.username
                })
                res.status(200).json({ access_token })
            } else {
                const newUser = await User.create({
                    username,
                    imgUrl
                })
                const access_token = generateToken({
                    id: newUser.id,
                    username: newUser.username
                })
                res.status(201).json({ access_token })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController