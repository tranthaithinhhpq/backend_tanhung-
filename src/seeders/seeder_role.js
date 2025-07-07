'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Role', [
            {
                url: '/user/read',
                description: 'Xem user',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/user/create',
                description: 'Tạo user',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/user/update',
                description: 'Sửa user',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/user/delete',
                description: 'Xóa user',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/read',
                description: 'Xem quyền',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/create',
                description: 'Tạo quyền',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/update',
                description: 'Sửa quyền',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/delete',
                description: 'Xóa quyền',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/group/read',
                description: 'Xem nhóm',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/by-group',
                description: 'Xem quyền nhóm',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/assign-to-group',
                description: 'Phân quyền',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/doctor-info',
                description: 'Xem bác sĩ',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/position/read',
                description: 'Xem chức vụ',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/degree/read',
                description: 'Xem học vị',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/doctor-info/read-all',
                description: 'Xem toàn bộ bác sĩ',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/news',
                description: 'Xem danh sách tin tức',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/news',
                description: 'Xem danh sách tin tức',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/doctor/list',
                description: 'Xem danh sách bác sĩ',

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/doctor',
                description: 'Xóa bác sĩ',

                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Role', null, {});
    }
};
