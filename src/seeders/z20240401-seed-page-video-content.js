'use strict';

export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('PageVideoContent', [
            {
                section: 'intro-video',
                title: 'Video giới thiệu phòng khám',
                youtubeId: 'dQw4w9WgXcQ',   // 👉 chỉ cần ID của youtube
                sortOrder: 1,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PageVideoContent', null, {});
    },
};
