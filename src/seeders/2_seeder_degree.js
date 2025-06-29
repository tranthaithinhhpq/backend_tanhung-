'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Degree',
      [
        { name: 'Cử nhân Y', description: 'BS đa khoa', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Thạc sĩ Y', description: 'Chuyên khoa cấp I', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Tiến sĩ Y', description: 'Chuyên khoa cấp II', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Degree', null, {});
  },
};
