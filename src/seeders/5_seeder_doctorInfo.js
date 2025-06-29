'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'DoctorInfo',
      [
        {
          userId: 2,                // tham chiếu User.id
          positionId: 1,            // trưởng khoa
          degreeId: 2,              // ThS
          specialtyId: 3,           // Tim mạch
          markdownContent: `## Giới thiệu
BS Thảo có hơn 10 năm kinh nghiệm...

### Lịch khám
- Thứ 2-4-6: 08:00-11:00
- Thứ 7: 13:00-16:00`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          positionId: 2,            // phó khoa
          degreeId: 3,              // TS
          specialtyId: 1,           // Nội tổng quát
          markdownContent: `## Giới thiệu
BS Minh chuyên nội tổng quát, điều trị...

### Chuyên môn
- Nội soi dạ dày
- Điều trị đái tháo đường`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DoctorInfo', null, {});
  },
};
