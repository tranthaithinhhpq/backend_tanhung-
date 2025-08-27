'use strict';

export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Device', [
            {
                name: 'Máy đo huyết áp',
                code: 'MDHP-001',
                category: 'Thiết bị chẩn đoán',
                image: '/images/device1.jpg',
                markdownContent: '<p>Thiết bị dùng để đo huyết áp tại nhà hoặc bệnh viện.</p>'
            },
            {
                name: 'Máy thở',
                code: 'MT-002',
                category: 'Thiết bị hỗ trợ hô hấp',
                image: '/images/device2.jpg',
                markdownContent: '<p>Hỗ trợ bệnh nhân thở trong các ca điều trị cấp cứu.</p>'
            },
            {
                name: 'Máy điện tim',
                code: 'MET-003',
                category: 'Thiết bị theo dõi tim mạch',
                image: '/images/device3.jpg',
                markdownContent: '<p>Ghi lại hoạt động điện của tim để chẩn đoán bệnh lý.</p>'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Device', null, {});
    }
};
