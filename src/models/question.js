'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Question extends Model {
        static associate(models) {
            // Không cần liên kết gì ở đây
        }
    }

    Question.init(
        {
            fullName: DataTypes.STRING,
            email: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            questionTitle: DataTypes.STRING,
            questionContent: DataTypes.TEXT,
            status: DataTypes.ENUM('pending', 'answered', 'spam'),
            answerContent: DataTypes.TEXT,
            answeredBy: DataTypes.INTEGER,
            answeredAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Question',
            freezeTableName: true // không thêm 's'
        }
    );

    return Question;
};
