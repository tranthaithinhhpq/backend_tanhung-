'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Group, { foreignKey: 'groupId' });
      // KHÔNG liên kết DoctorInfo nữa
    }
  }

  User.init(
    {
      image: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      address: DataTypes.STRING,
      sex: DataTypes.STRING,
      phone: DataTypes.STRING,
      groupId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
