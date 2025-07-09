'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkingSlotTemplate', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      doctorId: { type: Sequelize.INTEGER, allowNull: false },
      dayOfWeek: { type: Sequelize.INTEGER, allowNull: false },
      startTime: { type: Sequelize.STRING, allowNull: false },
      endTime: { type: Sequelize.STRING, allowNull: false },
      isActive: { type: Sequelize.BOOLEAN, defaultValue: true },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkingSlotTemplate');
  }
};
