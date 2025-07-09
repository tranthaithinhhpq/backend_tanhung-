'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('WorkingSlotOverrides', [
            {
                doctorId: 1,
                date: '2025-07-10',
                startTime: '08:00',
                endTime: '09:00',
                isActive: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WorkingSlotOverrides', null, {});
    }
};