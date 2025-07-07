'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DoctorInfo extends Model {
    static associate(models) {
      DoctorInfo.belongsTo(models.Position, { foreignKey: 'positionId' });
      DoctorInfo.belongsTo(models.Degree, { foreignKey: 'degreeId' });
      DoctorInfo.belongsTo(models.Specialty, { foreignKey: 'specialtyId' });
      // KHÔNG cần liên kết với User
    }
  }

  DoctorInfo.init(
    {
      doctorName: DataTypes.STRING,
      image: DataTypes.STRING,
      positionId: DataTypes.INTEGER,
      degreeId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
      markdownContent: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'DoctorInfo',
    }
  );

  return DoctorInfo;
};
