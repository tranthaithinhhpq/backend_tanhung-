'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class WorkingSlotTemplate extends Model {
        static associate(models) {
            WorkingSlotTemplate.belongsTo(models.DoctorInfo, { foreignKey: 'doctorId' });

        }
    }

    WorkingSlotTemplate.init({
        doctorId: DataTypes.INTEGER,
        dayOfWeek: DataTypes.INTEGER, // 0=Sunday, 1=Monday,...
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'WorkingSlotTemplate',
    });

    return WorkingSlotTemplate;
};
