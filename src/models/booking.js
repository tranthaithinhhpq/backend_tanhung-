'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            Booking.belongsTo(models.DoctorInfo, { foreignKey: 'doctorId' });
            Booking.belongsTo(models.WorkingSlotTemplate, { foreignKey: 'slotId' });
            Booking.belongsTo(models.Specialty, { foreignKey: 'specialtyId' });
            Booking.belongsTo(models.ServicePrice, { foreignKey: 'servicePriceId' });
        }
    }

    Booking.init({
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        reason: DataTypes.TEXT,
        doctorId: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER,
        servicePriceId: DataTypes.INTEGER,
        slotId: DataTypes.INTEGER,
        scheduleTime: DataTypes.DATE,
        status: {
            type: DataTypes.ENUM(
                'PENDING',
                'CONFIRMED',
                'CANCELLED',
                'RESCHEDULED',
                'CHECKED_IN',
                'COMPLETED',
                'NO_SHOW'
            ),
            defaultValue: 'PENDING'
        }
    }, {
        sequelize,
        modelName: 'Booking',
    });

    return Booking;
};
