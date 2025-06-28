'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DoctorInfo extends Model {
    static associate(models) {
      //khoá chính ↓
      DoctorInfo.belongsTo(models.User, { foreignKey: 'userId' });
      //liên kết đã có ↓
      DoctorInfo.belongsTo(models.Position, { foreignKey: 'positionId' });
      DoctorInfo.belongsTo(models.Degree, { foreignKey: 'degreeId' });
      // liên kết mới ↓
      DoctorInfo.belongsTo(models.Clinic, { foreignKey: 'clinicId' });
      DoctorInfo.belongsTo(models.Specialty, { foreignKey: 'specialtyId' });
    }
  }

  DoctorInfo.init(
    {
      userId: DataTypes.INTEGER,
      positionId: DataTypes.INTEGER,
      degreeId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,   // mới
      specialtyId: DataTypes.INTEGER,   // mới
      biography: DataTypes.TEXT,
      price: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'DoctorInfo' }
  );

  return DoctorInfo;
};
