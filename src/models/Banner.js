'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Banner extends Model {
        static associate(models) { }
    }

    Banner.init(
        {

            title: DataTypes.STRING,
            imageDesktop: DataTypes.STRING,
            imagePhone: DataTypes.STRING,
            sortOrder: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Banner',
        }
    );

    return Banner;
};