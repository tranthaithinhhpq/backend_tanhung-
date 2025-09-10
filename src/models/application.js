'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Application extends Model {
        static associate(models) {
            // Một hồ sơ thuộc về một tin tuyển dụng
            Application.belongsTo(models.Recruitment, { foreignKey: 'recruitmentId' });
        }
    }

    Application.init({
        recruitmentId: DataTypes.INTEGER, // FK tới Recruitment
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        cvFile: DataTypes.STRING, // link file CV
        coverLetter: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM('PENDING', 'REVIEWED', 'ACCEPTED', 'REJECTED'),
            defaultValue: 'PENDING'
        }
    }, {
        sequelize,
        modelName: 'Application',
    });

    return Application;
};
