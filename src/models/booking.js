'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            Booking.belongsTo(models.DoctorInfo, { foreignKey: 'doctorId' });
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
        scheduleTime: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Booking',
    });

    return Booking;
};