'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DoctorInfo extends Model {
    static associate(models) {
      // 1 bác sĩ (user) có đúng 1 DoctorInfo
      DoctorInfo.belongsTo(models.User, { foreignKey: 'userId' });
      // Liên kết tham chiếu danh mục
      DoctorInfo.belongsTo(models.Position, { foreignKey: 'positionId' });
      DoctorInfo.belongsTo(models.Degree, { foreignKey: 'degreeId' });
      DoctorInfo.belongsTo(models.Specialty, { foreignKey: 'specialtyId' });
    }
  }

  DoctorInfo.init(
    {
      userId: DataTypes.INTEGER,
      positionId: DataTypes.INTEGER,
      degreeId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
      markdownContent: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'DoctorInfo',
    }
  );

  return DoctorInfo;
};
