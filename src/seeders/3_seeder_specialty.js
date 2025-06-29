'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Specialty',
      [
        {
          name: 'Tim mạch',
          description: 'Chẩn đoán & điều trị bệnh tim',
          markdownContent: '## Tim mạch\nChuyên khám và phẫu thuật tim mạch…',
          image: '/uploads/specialty/cardiology.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nội tiết',
          description: 'Bệnh lý về hormone, đái tháo đường',
          markdownContent: '## Nội tiết\nKhám, điều trị đái tháo đường…',
          image: '/uploads/specialty/endocrine.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tiêu hoá',
          description: 'Bệnh lý dạ dày, gan, mật',
          markdownContent: '## Tiêu hoá\nNội soi – điều trị gan mật…',
          image: '/uploads/specialty/digestive.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Specialty', null, {});
  },
};
