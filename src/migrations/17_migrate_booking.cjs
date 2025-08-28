'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Booking', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      phone: { type: Sequelize.STRING },
      dob: { type: Sequelize.DATEONLY },
      address: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      reason: { type: Sequelize.TEXT },
      doctorId: { type: Sequelize.INTEGER, allowNull: false },
      specialtyId: { type: Sequelize.INTEGER },
      servicePriceId: { type: Sequelize.INTEGER },
      slotId: { type: Sequelize.INTEGER, allowNull: false },
      scheduleTime: { type: Sequelize.DATE },
      status: {
        type: Sequelize.ENUM(
          'PENDING',
          'CONFIRMED',
          'CANCELLED',
          'RESCHEDULED',
          'CHECKED_IN',
          'COMPLETED',
          'NO_SHOW'
        ),
        defaultValue: 'PENDING'
      },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    });
  },

  async down(queryInterface, Sequelize) {
    // Phải xóa ENUM trước khi drop table
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Booking_status";');
    await queryInterface.dropTable('Booking');
  }
};
