'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkingSlotOverrides', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      doctorId: { type: Sequelize.INTEGER, allowNull: false },
      date: { type: Sequelize.DATEONLY, allowNull: false },
      startTime: { type: Sequelize.STRING, allowNull: false },
      endTime: { type: Sequelize.STRING, allowNull: false },
      isActive: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkingSlotOverrides');
  }
};
