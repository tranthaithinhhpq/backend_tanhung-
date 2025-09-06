'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Question', [
            {
                fullName: 'Nguyễn Văn A',
                email: 'nva@example.com',
                phoneNumber: '0909123456',
                questionTitle: 'Thời gian khám bệnh',
                questionContent: 'Bệnh viện có khám vào chủ nhật không?',
                status: '/images/1756880916934-khoahoisuctichcuc.png',
                answerContent: '/images/1756880916934-khoahoisuctichcuc.png',
                answeredBy: '/images/1756880916934-khoahoisuctichcuc.png',
                answeredAt: '/images/1756880916934-khoahoisuctichcuc.png',


            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Question', null, {});
    }
};