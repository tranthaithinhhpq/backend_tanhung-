'use strict';
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('NewsCategory', [
            { name: 'Tin Tức Y Tế', description: 'Thông tin y tế', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Hoạt Động Bệnh Viện', description: 'Tin hoạt động', createdAt: new Date(), updatedAt: new Date() },
        ]);
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('NewsCategory', null, {});
    }
};
