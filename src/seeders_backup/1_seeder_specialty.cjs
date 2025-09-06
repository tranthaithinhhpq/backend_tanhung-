'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Specialty', [
            {
                name: 'KHOA HỒI SỨC TÍCH CỰC',
                description: 'KHOA HỒI SỨC TÍCH CỰC',
                markdownContent: '<p>Khoa Cấp cứu Bệnh viện Tân Hưng được trang bị 10 giường bệnh và các phòng chức năng, cùng các trang thiết bị hiện đại phục vụ công tác cấp cứu tại chỗ như:</p><p><br></p><p><strong>1. Tổ chức nhân sự</strong></p><p>Tổng số: 20 nhân viên</p><p><br></p><p>Trong đó:</p><p><br></p><ul><li>Bác sĩ CKII: 02</li><li>Thạc sĩ Bác sĩ: 05</li><li>Điều dưỡng: 14</li></ul><p>&nbsp;</p><p><br></p><p>Danh sách bác sĩ:</p><p><br></p><ul><li>Bs. CKII Phan Văn Hiếu</li><li>Bs. CKII Vũ Trường Sơn</li><li>Bs.&nbsp;Ngô Văn Lâm</li><li>Bs. Nguyễn Đức Công</li><li>Bs. Nguyễn Nhật Minh</li><li>Bs. Nguyễn Ngọc Minh Thư</li><li>Bs. Võ Văn Nhật</li></ul><p>&nbsp;</p><p><strong>2. Hoạt động chuyên môn</strong></p><ul><li>Khoa Hồi Sức Tích Cực Bệnh viện Đa khoa Tân Hưng với đội ngũ Bác sĩ, Điều dưỡng có nhiều kinh nghiệm trong việc cấp cứu về các bệnh lý Tim mạch, Nội tổng quát, các bệnh lý ngoại khoa, bệnh lý chấn thương cũng như chăm sóc hồi sức.</li><li>Thực hiện cấp cứu cứu kỷ thuật cao: tiếp nhận, chuẩn bị bệnh nhân, phối hợp cùng chuyên khoa tim mạch can thiệp xử trí nhồi máu cơ tim cấp.</li><li>Khoa Hồi Sức Tích Cực hoạt động liên tục 24/7.</li><li>Tham gia cấp cứu ngoại viện và các tình huống cấp cứu hàng loạt.</li><li>Chuyển viện, xuất viện về nhà trong phạm vi nội - ngoại thành và các tỉnh lân cận.</li><li>Tham gia chăm sóc y tế cho các sự kiện thể thao lớn.</li></ul><p>&nbsp;</p><p><strong>3. Trang thiết bị</strong></p><ul><li>Đang cập nhật...</li></ul>',
                image: '/images/1756880916934-khoahoisuctichcuc.png'


            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Specialty', null, {});
    }
};