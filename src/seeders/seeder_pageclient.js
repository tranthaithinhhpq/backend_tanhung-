'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PageClient', [
      {
        slug: 'tam-nhin-va-su-menh',
        title: 'Tầm nhìn và sứ mệnh',
        contentThumbnail: '<p>Chúng tôi mong muốn trở thành bệnh viện hàng đầu về chăm sóc sức khỏe tại Việt Nam...</p>',
        videoYoutubeId: 'dQw4w9WgXcQ',
        status: true,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PageClient', null, {});
  }
};
