'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Question', [
      {
        fullName: 'Nguyễn Văn A',
        email: 'nva@example.com',
        phoneNumber: '0909123456',
        questionTitle: 'Thời gian khám bệnh',
        questionContent: 'Bệnh viện có khám vào chủ nhật không?',
        status: 'pending',
        answerContent: null,
        answeredBy: null,
        answeredAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Trần Thị B',
        email: 'ttb@example.com',
        phoneNumber: '0987654321',
        questionTitle: 'Chi phí nội soi',
        questionContent: 'Chi phí nội soi dạ dày là bao nhiêu?',
        status: 'answered',
        answerContent: 'Chi phí nội soi dạ dày hiện tại là 1.000.000 VNĐ.',
        answeredBy: 1,
        answeredAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Question', null, {});
  }
};
