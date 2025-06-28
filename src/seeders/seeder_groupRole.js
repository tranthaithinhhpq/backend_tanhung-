'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Group_Role', [
            // Group 1 (Admin)
            { groupId: 1, roleId: 1 },
            { groupId: 1, roleId: 2 },
            { groupId: 1, roleId: 3 },
            { groupId: 1, roleId: 4 },
            { groupId: 1, roleId: 5 },
            { groupId: 1, roleId: 6 },
            { groupId: 1, roleId: 7 },
            { groupId: 1, roleId: 8 },
            { groupId: 1, roleId: 9 },
            { groupId: 1, roleId: 10 },
            { groupId: 1, roleId: 11 },

            // Group 2 (Doctor)
            { groupId: 2, roleId: 1 },
            { groupId: 2, roleId: 2 },
            { groupId: 2, roleId: 3 },
            { groupId: 2, roleId: 4 },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Group_Role', null, {});
    }
};
