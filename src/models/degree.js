'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Degree extends Model {
    static associate(models) {
      Degree.hasMany(models.DoctorInfo, { foreignKey: 'degreeId' });
    }
  }

  Degree.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Degree',
    }
  );

  return Degree;
};
