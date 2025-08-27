'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Banner extends Model {
        static associate(models) {
            // define association here nếu cần
        }
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
