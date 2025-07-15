'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PageImageContent extends Model {
        static associate(models) { }
    }

    PageImageContent.init(
        {
            section: DataTypes.STRING,
            title: DataTypes.STRING,
            image: DataTypes.STRING,
            sortOrder: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'PageImageContent',
        }
    );

    return PageImageContent;
};
