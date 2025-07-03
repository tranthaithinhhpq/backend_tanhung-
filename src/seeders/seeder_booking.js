'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Booking', [
            {
                name: 'Nguyen Van A',
                phone: '0123456789',
                dob: '1990-01-01',
                address: '123 Main St',
                email: 'a@example.com',
                specialtyId: 1,
                doctorId: 2,
                appointmentDate: new Date('2025-07-10T09:00:00'),
                reason: 'Khám tổng quát',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tran Thi B',
                phone: '0987654321',
                dob: '1985-05-15',
                address: '456 Side St',
                email: 'b@example.com',
                specialtyId: 2,
                doctorId: 3,
                appointmentDate: new Date('2025-07-12T14:00:00'),
                reason: 'Đau bụng',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Booking', null, {});
    }
};
