'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Booking', 'status', {
      type: Sequelize.ENUM(
        'PENDING',
        'CONFIRMED',
        'CANCELLED',
        'RESCHEDULED',
        'CHECKED_IN',
        'COMPLETED',
        'NO_SHOW'
      ),
      defaultValue: 'PENDING',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Booking', 'status');
    // Nếu dùng PostgreSQL, giữ dòng này để xoá ENUM:
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Booking_status";');
  }
};
