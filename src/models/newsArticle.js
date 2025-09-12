'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class NewsArticle extends Model {
        static associate(models) {
            NewsArticle.belongsTo(models.NewsCategory, {
                foreignKey: 'categoryId',
                as: "category",
            });

            // Quan hệ với user
            NewsArticle.belongsTo(models.User, {
                foreignKey: 'authorId',
                as: 'author'
            });
        }
    }
    NewsArticle.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        image: DataTypes.STRING,
        status: DataTypes.ENUM('draft', 'published'),
        categoryId: DataTypes.INTEGER,
        authorId: DataTypes.INTEGER, // thêm cột này
        type: {
            type: DataTypes.ENUM('unique', 'highlight', 'popular'),
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        modelName: 'NewsArticle',
    });
    return NewsArticle;
};
