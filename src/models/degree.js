'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
