'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('PageTextContent', [
            // ─── ABOUT ───────────────────────────────────────────────
            {
                section: 'about',
                title: 'Giới thiệu chung',
                contentText: `
          <h2>Phòng khám Đa khoa Tân Hưng</h2>
          <p>Với đội ngũ y bác sĩ giàu kinh nghiệm cùng trang thiết bị hiện đại,
          chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe chất lượng cao
          cho cộng đồng.</p>`,
                sortOrder: 1,
            },
            // ─── FOOTER ──────────────────────────────────────────────
            {
                section: 'footer',
                title: 'Thông tin liên hệ',
                contentText: `
          <p><strong>Địa chỉ:</strong> 123 Nguyễn Văn Cừ, Q.5, TP.HCM</p>
          <p><strong>Hotline:</strong> 1900 1234 56</p>
          <p><strong>Email:</strong> contact@tanhungclinic.vn</p>`,
                sortOrder: 1,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PageTextContent', null, {});
    },
};
