'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsCategory extends Model {
    static associate(models) {
      NewsCategory.hasMany(models.NewsArticle, { foreignKey: 'categoryId' });
    }
  }
  NewsCategory.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'NewsCategory',
  });
  return NewsCategory;
};
