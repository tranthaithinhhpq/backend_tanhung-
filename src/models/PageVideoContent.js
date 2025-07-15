'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PageVideoContent extends Model {
        static associate(models) { }
    }

    PageVideoContent.init(
        {
            section: DataTypes.STRING,
            title: DataTypes.STRING,
            youtubeId: DataTypes.STRING,
            sortOrder: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'PageVideoContent',
        }
    );

    return PageVideoContent;
};