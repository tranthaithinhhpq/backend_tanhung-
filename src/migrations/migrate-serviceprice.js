'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ServicePrice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      group: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      priceInsurance: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      isSelectable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      specialtyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Specialty',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('ServicePrice');
  }
};
