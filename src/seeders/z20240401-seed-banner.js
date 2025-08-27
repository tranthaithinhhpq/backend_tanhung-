'use strict';

export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Banner', [
            // ─── BANNER (DESKTOP & MOBILE) ──────────────────────────
            {

                title: 'Banner Doctor',
                imageDesktop: '/images/banner-desktop.jpg',   // lưu ý: đường dẫn public
                imagePhone: '/images/banner-phone.jpg',

                sortOrder: 1,
            },
            {

                title: 'Banner Activity',
                imageDesktop: '/images/banner-mobile.jpg',
                imagePhone: '/images/banner-phone.jpg',
                sortOrder: 2,
            },
            // ─── PARTNER LOGOS ──────────────────────────────────────
            {

                title: 'Partner – Vinmec',
                imageDesktop: '/images/partners/vinmec.png',
                imagePhone: '/images/banner-phone.jpg',
                sortOrder: 1,
            },
            {

                title: 'Partner – Viettel',
                imageDesktop: '/images/partners/viettel.png',
                imagePhone: '/images/banner-phone.jpg',
                sortOrder: 2,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Banner', null, {});
    },
};
