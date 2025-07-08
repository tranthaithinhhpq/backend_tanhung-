'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  Device.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      category: DataTypes.STRING,
      image: DataTypes.STRING,
      markdownContent: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Device',
    }
  );

  return Device;
};
