'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Position', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {                          // Tên chức vụ (Ví dụ: Trưởng khoa)
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: {                   // Mô tả ngắn
        type: Sequelize.STRING,
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Position');
  },
};
