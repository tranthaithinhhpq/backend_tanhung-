'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
