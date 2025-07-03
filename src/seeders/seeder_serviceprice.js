'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('ServicePrice', [
            {
                name: 'Khám tổng quát',
                group: 'Khám',
                price: 300000,
                priceInsurance: 200000,
                isSelectable: true,
                specialtyId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Xét nghiệm máu',
                group: 'Xét nghiệm',
                price: 150000,
                priceInsurance: 100000,
                isSelectable: true,
                specialtyId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('ServicePrice', null, {});
    }
};
