'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DoctorInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      positionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Position', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      degreeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Degree', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      specialtyId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Specialty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      markdownContent: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DoctorInfo');
  },
};
