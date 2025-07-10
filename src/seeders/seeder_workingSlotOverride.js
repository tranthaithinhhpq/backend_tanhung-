'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('WorkingSlotOverride', [
            {
                doctorId: 1,
                slotId: 2, // Giả định slotId = 2 tương ứng 08:00 - 09:00
                date: '2025-07-10',
                isActive: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WorkingSlotOverride', null, {});
    }
};