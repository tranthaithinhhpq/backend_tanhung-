'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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