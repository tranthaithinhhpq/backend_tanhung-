'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class NewsArticle extends Model {
        static associate(models) {
            NewsArticle.belongsTo(models.NewsCategory, { foreignKey: 'categoryId', as: "category", });
        }
    }
    NewsArticle.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        image: DataTypes.STRING,
        status: DataTypes.ENUM('draft', 'published'),
        categoryId: DataTypes.INTEGER,
        order: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'NewsArticle',
    });
    return NewsArticle;
};
