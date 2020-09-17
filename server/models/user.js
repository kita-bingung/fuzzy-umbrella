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
      },
      unique: {
        args: true,
        msg: 'This username has already been registered'
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          args: true,
          msg: 'Invalid Email Format'
        }
      },
      unique: {
        args: true,
        msg: 'This email has already been registered'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 9],
          msg: 'Password must be more than 3 characters and less than 9 characters'
        }
      }
    },
    imgUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, opt) {
        user.password = hashPassword(user.password)
        if (!user.imgUrl) {
          user.imgUrl = 'https://i.stack.imgur.com/l60Hf.png'
          console.log('masuk')
        }
      }
    }
  });
  return User;
};