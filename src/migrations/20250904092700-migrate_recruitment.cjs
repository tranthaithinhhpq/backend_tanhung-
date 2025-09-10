'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Recruitment', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,   // 👉 thêm trường image
                allowNull: true,
            },
            departmentId: {
                type: Sequelize.INTEGER,
                allowNull: true, // nếu có bảng Department thì FK
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            requirement: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            benefit: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            deadline: {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            status: {
                type: Sequelize.ENUM('OPEN', 'CLOSED'),
                allowNull: false,
                defaultValue: 'OPEN',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('Recruitment');
    },
};
