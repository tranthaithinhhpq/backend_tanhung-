'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Booking', [
            {
                name: 'Nguyễn Văn A',
                phone: '0123456789',
                dob: '1995-05-10',
                address: 'Hà Nội',
                email: 'a@example.com',
                reason: 'Khám tổng quát',
                doctorId: 1,
                specialtyId: 1,
                servicePriceId: 1,
                slotId: 1,
                scheduleTime: new Date('2025-07-20 08:00:00'),
                status: 'CONFIRMED',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Trần Thị B',
                phone: '0987654321',
                dob: '1990-01-01',
                address: 'Đà Nẵng',
                email: 'b@example.com',
                reason: 'Khám tai mũi họng',
                doctorId: 2,
                specialtyId: 2,
                servicePriceId: 2,
                slotId: 2,
                scheduleTime: new Date('2025-07-22 09:30:00'),
                status: 'PENDING',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Booking', null, {});
    }
};
