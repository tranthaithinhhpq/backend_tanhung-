'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class NewsCategory extends Model {
    static associate(models) {
      NewsCategory.hasMany(models.NewsArticle, { foreignKey: 'categoryId', as: 'articles' });
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
