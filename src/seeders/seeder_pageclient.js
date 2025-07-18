'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PageClient', [
      {
        slug: 'tam-nhin-va-su-menh',
        title: 'Tầm nhìn và sứ mệnh',
        contentThumbnail: '<p>Chúng tôi mong muốn trở thành bệnh viện hàng đầu...</p>',
        videoYoutubeId: 'dQw4w9WgXcQ',
        status: true,
        section: 'about',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        slug: 'so-do-to-chuc',
        title: 'Sơ đồ tổ chức',
        contentThumbnail: '<p>Sơ đồ cơ cấu tổ chức của bệnh viện...</p>',
        videoYoutubeId: '',
        status: true,
        section: 'about',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        slug: 'trang-thiet-bi',
        title: 'Trang thiết bị',
        contentThumbnail: '<p>Danh sách thiết bị hiện đại đang sử dụng...</p>',
        videoYoutubeId: '',
        status: true,
        section: 'about',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PageClient', null, {});
  }
};
