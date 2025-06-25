'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Role', [
            {
                url: '/user/read',
                description: 'View all user'
            },
            {
                url: '/user/create',
                description: 'Create new user'
            },
            {
                url: '/user/update',
                description: 'Edit user'
            },
            {
                url: '/role/read',
                description: 'View permission'
            },
            {
                url: '/role/create',
                description: 'Create new permission'
            },
            {
                url: '/role/update',
                description: 'update permission'
            },
            {
                url: '/role/delete',
                description: 'Delete permission'
            },
            {
                url: '/role/by-group',
                description: null
            },
            {
                url: '/role/assign-to-group',
                description: null
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Role', null, {});
    }
};
