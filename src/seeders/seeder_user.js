'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
      {
        image: 'https://example.com/image1.jpg',
        email: 'user1@example.com',
        password: '123456',
        username: 'user1',
        address: '123 Main St',
        sex: 'male',
        phone: '0123456789',
        groupId: 1
      },
      {
        image: 'https://example.com/image2.jpg',
        email: 'levanthanh@example.com',
        password: '123456',
        username: 'Lê Văn Thanh',
        address: '456 Side St',
        sex: 'female',
        phone: '0987654321',
        groupId: 2
      },
      {
        image: 'https://example.com/image3.jpg',
        email: 'tranquangthai@example.com',
        password: '123456',
        username: 'Trần Quang Thái',
        address: '789 Market St',
        sex: 'other',
        phone: '0111222333',
        groupId: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  }
};
