'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class WorkingSlotOverride extends Model {
        static associate(models) {
            WorkingSlotOverride.belongsTo(models.DoctorInfo, { foreignKey: 'doctorId' });
        }
    }

    WorkingSlotOverride.init({
        doctorId: DataTypes.INTEGER,
        date: DataTypes.DATEONLY,
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'WorkingSlotOverride',
    });

    return WorkingSlotOverride;
};