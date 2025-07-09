'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Booking', [
            {
                name: 'Nguyen Van A',
                phone: '0123456789',
                dob: '1990-01-01',
                address: '123 Le Loi',
                email: 'nva@example.com',
                reason: 'Khám tổng quát',
                doctorId: 1,
                specialtyId: 1,
                scheduleTime: new Date('2025-07-11T08:00:00'),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Booking', null, {});
    }
};