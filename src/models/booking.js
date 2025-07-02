'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            Booking.belongsTo(models.Specialty, { foreignKey: 'specialtyId' });
            Booking.belongsTo(models.User, { foreignKey: 'doctorId' });
        }
    }

    Booking.init(
        {
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            dob: DataTypes.DATEONLY,
            address: DataTypes.STRING,
            email: DataTypes.STRING,
            specialtyId: DataTypes.INTEGER,
            // doctorId: DataTypes.INTEGER,
            appointmentDate: DataTypes.DATE,
            reason: DataTypes.TEXT
        },
        {
            sequelize,
            modelName: 'Booking',
        }
    );

    return Booking;
};
