'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const now = new Date();
        const data = [];

        for (let day = 1; day <= 6; day++) { // Monday to Saturday
            for (let h = 7; h <= 10; h++) {
                data.push({ doctorId: 1, dayOfWeek: day, startTime: `${h}:00`, endTime: `${h + 1}:00`, isActive: true, createdAt: now, updatedAt: now });
            }
            for (let h = 13; h <= 16; h++) {
                data.push({ doctorId: 1, dayOfWeek: day, startTime: `${h}:00`, endTime: `${h + 1}:00`, isActive: true, createdAt: now, updatedAt: now });
            }
        }

        await queryInterface.bulkInsert('WorkingSlotTemplate', data, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WorkingSlotTemplate', null, {});
    }
};
