'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DoctorInfo', [
      {
        doctorName: 'Dr. John Doe',
        image: '/images/johndoe.jpg',
        positionId: 1,
        degreeId: 1,
        specialtyId: 1,
        markdownContent: '## Giới thiệu\nBác sĩ John Doe...',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DoctorInfo', null, {});
  }
};
