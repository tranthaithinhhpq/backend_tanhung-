'use strict';

export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('PageContent', [
            {
                section: 'header',
                title: 'Logo và Hotline',
                contentText: 'Hotline: 1900 1234',
                image: '/uploads/logo.png',
                sortOrder: 1
            },
            {
                section: 'banner',
                title: 'Banner chính',
                image: '/uploads/banner-desktop.jpg',
                sortOrder: 2
            },
            {
                section: 'banner',
                title: 'Banner điện thoại',
                image: '/uploads/banner-mobile.jpg',
                sortOrder: 3
            },
            {
                section: 'about',
                title: 'Giới thiệu',
                contentText: '<p>Chúng tôi là bệnh viện chất lượng cao với đội ngũ bác sĩ tận tâm...</p>',
                sortOrder: 4
            },
            {
                section: 'video',
                title: 'Video giới thiệu',
                youtubeId: 'dQw4w9WgXcQ',
                sortOrder: 5
            },
            {
                section: 'partner',
                title: 'Đối tác 1',
                image: '/uploads/partner1.png',
                sortOrder: 6
            },
            {
                section: 'partner',
                title: 'Đối tác 2',
                image: '/uploads/partner2.png',
                sortOrder: 7
            },
            {
                section: 'footer',
                title: 'Thông tin liên hệ',
                contentText: 'Địa chỉ: 123 Nguyễn Văn Linh, Hotline: 1900 1234, Email: contact@tan-hung.vn',
                sortOrder: 8
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PageContent', null, {});
    }
};
