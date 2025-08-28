'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
      {
        image: '/images/1753083586972-z6826384299470_ddf9c7be2df1bab1e19d2358d9c4e8d6.jpg',
        email: 'mawaythai@gmail.com',
        password: '$2a$10$3zGcug8iQ0xg.Tv0aDbJeu1X.HiLt1RMHXXEmmhWkKoIfn6dh/aZu',
        username: 'Trần Quang Thái ',
        address: '123 Main St',
        sex: 'male',
        phone: '0123456789',
        groupId: 1
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  }
};
