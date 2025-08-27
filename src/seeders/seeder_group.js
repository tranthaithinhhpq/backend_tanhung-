'use strict';

export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Group', [
            {
                name: 'Admin',
                description: 'Nothing impossible',

            },
            {
                name: 'Doctor',
                description: 'Doctor Strange',

            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Group', null, {});
    }
};
