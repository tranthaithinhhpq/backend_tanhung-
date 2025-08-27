'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class PageTextContent extends Model {
        static associate(models) { }
    }

    PageTextContent.init(
        {
            section: DataTypes.STRING,
            title: DataTypes.STRING,
            contentText: DataTypes.TEXT,
            sortOrder: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'PageTextContent',
        }
    );

    return PageTextContent;
};
