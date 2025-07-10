'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class WorkingSlotOverride extends Model {
        static associate(models) {
            WorkingSlotOverride.belongsTo(models.DoctorInfo, { foreignKey: 'doctorId' });
            WorkingSlotOverride.belongsTo(models.WorkingSlotTemplate, { foreignKey: 'slotId' });
        }
    }

    WorkingSlotOverride.init({
        doctorId: DataTypes.INTEGER,
        slotId: DataTypes.INTEGER, // Tham chiếu slot
        date: DataTypes.DATEONLY,
        isActive: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'WorkingSlotOverride',
    });

    return WorkingSlotOverride;
};