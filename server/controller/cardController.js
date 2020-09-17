const { Card } = require('../models')
const sequelize = require('../models').sequelize;

class CardController{
    static async randomCard(req, res, next) {
        try {
            const card = await Card.findAll({ order: [
                sequelize.fn( 'RANDOM' ),
              ] })
            res.status(200).json(card)        
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CardController