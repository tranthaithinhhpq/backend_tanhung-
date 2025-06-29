'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      // Một chức vụ áp dụng cho nhiều DoctorInfo
      Position.hasMany(models.DoctorInfo, { foreignKey: 'positionId' });
    }
  }

  Position.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Position',
    }
  );

  return Position;
};
