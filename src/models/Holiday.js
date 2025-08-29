'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Holiday extends Model {
        static associate(models) {
            // nếu sau này cần quan hệ (vd: Booking check Holiday) thì define ở đây
        }
    }

    Holiday.init(
        {
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'Holiday',
            tableName: 'Holiday', // đảm bảo mapping đúng với bảng bạn đã tạo
            timestamps: true       // để có createdAt, updatedAt
        }
    );

    return Holiday;
};