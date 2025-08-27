'use strict';

export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('PageImageContent', [
            // ─── BANNER (DESKTOP & MOBILE) ──────────────────────────
            {
                section: 'banner',
                title: 'Banner Desktop',
                image: '/uploads/banner-desktop.jpg',   // lưu ý: đường dẫn public
                sortOrder: 1,
            },
            {
                section: 'banner',
                title: 'Banner Mobile',
                image: '/uploads/banner-mobile.jpg',
                sortOrder: 2,
            },
            // ─── PARTNER LOGOS ──────────────────────────────────────
            {
                section: 'partner',
                title: 'Partner – Vinmec',
                image: '/uploads/partners/vinmec.png',
                sortOrder: 1,
            },
            {
                section: 'partner',
                title: 'Partner – Viettel',
                image: '/uploads/partners/viettel.png',
                sortOrder: 2,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PageImageContent', null, {});
    },
};
