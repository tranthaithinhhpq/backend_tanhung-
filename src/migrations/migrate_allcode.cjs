'use strict';
module.exports = {
  // key: DataTypes.STRING,
  //       type: DataTypes.STRING,
  //       value_en: DataTypes.STRING,
  //       value_vi: DataTypes.STRING,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Allcode', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Allcode');
  }
};