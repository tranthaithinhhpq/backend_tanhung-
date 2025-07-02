'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Role', [
            {
                url: '/user/read',
                description: 'Xem user',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/user/create',
                description: 'Tạo user',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/user/update',
                description: 'Sửa user',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/user/delete',
                description: 'Xóa user',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/read',
                description: 'Xem quyền',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/create',
                description: 'Tạo quyền',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/update',
                description: 'Sửa quyền',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/delete',
                description: 'Xóa quyền',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/group/read',
                description: 'Xem nhóm',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/by-group',
                description: 'Xem quyền nhóm',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/role/assign-to-group',
                description: 'Phân quyền',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/doctor-info',
                description: 'Xem bác sĩ',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/position/read',
                description: 'Xem chức vụ',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/degree/read',
                description: 'Xem học vị',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: '/doctor-info/read-all',
                description: 'Xem toàn bộ bác sĩ',
                groupId: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Role', null, {});
    }
};
