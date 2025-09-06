'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Degree', [
            {
                name: 'Chuyên khoa I',
                description: 'Chuyên khoa cấp I',
            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Degree', null, {});
    }
};