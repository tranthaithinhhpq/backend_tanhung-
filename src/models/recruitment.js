'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Recruitment extends Model {
        static associate(models) {
            // Một tin tuyển dụng có nhiều hồ sơ ứng tuyển
            Recruitment.hasMany(models.Application, { foreignKey: 'recruitmentId' });

            // Nếu có bảng Department
            Recruitment.belongsTo(models.Specialty, { foreignKey: 'departmentId' });
        }
    }

    Recruitment.init({
        title: DataTypes.STRING,
        image: DataTypes.STRING,
        departmentId: DataTypes.INTEGER, // FK tới Department (nếu có)
        description: DataTypes.TEXT,
        requirement: DataTypes.TEXT,
        benefit: DataTypes.TEXT,
        deadline: DataTypes.DATEONLY,
        status: {
            type: DataTypes.ENUM('OPEN', 'CLOSED'),
            defaultValue: 'OPEN'
        }
    }, {
        sequelize,
        modelName: 'Recruitment',
    });

    return Recruitment;
};
