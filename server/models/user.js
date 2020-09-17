'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: 'Username is required'
        }
      }
    },
    imgUrl: DataTypes.TEXT,
    wins: DataTypes.INTEGER,
    totalPlayed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, opt) {
        if (!user.imgUrl) {
          user.imgUrl = 'https://i.stack.imgur.com/l60Hf.png'
        }
      }
    }
  });
  return User;
};