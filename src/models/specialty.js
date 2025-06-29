'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        static associate(models) {
            Specialty.hasMany(models.DoctorInfo, { foreignKey: 'specialtyId' });
        }
    }

    Specialty.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            markdownContent: DataTypes.TEXT,
            image: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Specialty',
        }
    );

    return Specialty;
};
