'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Position',
      [
        { name: 'Trưởng khoa', description: 'Quản lý toàn bộ khoa', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Phó khoa', description: 'Hỗ trợ quản lý khoa', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Bác sĩ điều trị', description: 'Khám & điều trị', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Position', null, {});
  },
};
