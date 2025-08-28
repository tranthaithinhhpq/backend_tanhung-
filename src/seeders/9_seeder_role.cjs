'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Role', [
            {
                url: 'admin/user/read',
                description: 'Xem user',


            },
            {
                url: 'admin/user/create',
                description: 'Tạo user',


            },
            {
                url: 'admin/user/update',
                description: 'Sửa user',


            },
            {
                url: 'admin/user/delete',
                description: 'Xóa user',


            },
            {
                url: 'admin/role/read',
                description: 'Xem quyền',


            },
            {
                url: 'admin/role/create',
                description: 'Tạo quyền',


            },
            {
                url: 'admin/role/update',
                description: 'Sửa quyền',


            },
            {
                url: 'admin/role/delete',
                description: 'Xóa quyền',


            },
            {
                url: 'admin/group/read',
                description: 'Xem Nhóm người dùng',


            },
            {
                url: 'admin/role/by-group',
                description: 'Xem danh sách phân quyền',


            },
            {
                url: 'admin/role/assign-to-group',
                description: 'Phân quyền',


            },
            {
                url: 'admin/position/read',
                description: 'Xem vị trí',


            },
            {
                url: 'admin/position/create',
                description: 'Tạo vị trí',


            },
            {
                url: 'admin/position/edit',
                description: 'Sửa vị trí',


            },
            {
                url: 'admin/position/delete',
                description: 'Xóa vị trí',


            },
            {
                url: 'admin/degree/paginate',
                description: 'Xem học vị',


            },
            {
                url: 'admin/degree/create',
                description: 'Tạo học vị',


            },
            {
                url: 'admin/degree/edit',
                description: 'Sửa học vị',


            },
            {
                url: 'admin/degree/delete',
                description: 'Xóa học vị',


            },
            {
                url: 'admin/news/paginate',
                description: 'Xem tin tức',


            },
            {
                url: 'admin/news/create',
                description: 'Tạo tin tức',


            },
            {
                url: 'admin/news/edit',
                description: 'Sửa tin tức',


            },
            {
                url: 'admin/news/delete',
                description: 'Xóa tin tức',


            },
            {
                url: 'admin/service-price/read',
                description: 'Xem Bảng giá dịch vụ',


            },
            {
                url: 'admin/service-price/create',
                description: 'Tạo bảng giá dịch vụ',


            },
            {
                url: 'admin/service-price/update',
                description: 'Sửa bảng giá dịch vụ',


            },
            {
                url: 'admin/service-price/delete',
                description: 'Xóa bảng giá dịch vụ',


            },
            {
                url: 'admin/booking/read',
                description: 'Xem lịch khám',


            },
            {
                url: 'admin/booking/create',
                description: 'Thêm lịch khám',


            },
            {
                url: 'admin/booking/update',
                description: 'Sửa lịch khám',


            },
            {
                url: 'admin/booking/delete',
                description: 'Xóa lịch khám',


            },
            {
                url: 'admin/device/read',
                description: 'Xem trang thiết bị',


            },
            {
                url: 'admin/device/create',
                description: 'Tạo trang thiết bị',


            },
            {
                url: 'admin/device/update',
                description: 'Sửa trang thiết bị',


            },
            {
                url: 'admin/device/delete',
                description: 'Xóa trang thiết bị',


            },
            {
                url: 'admin/banner/read',
                description: 'Xem banner',


            },
            {
                url: 'admin/banner/create',
                description: 'Thêm banner',


            },
            {
                url: 'admin/banner/update',
                description: 'Sửa banner',


            },
            {
                url: 'admin/banner/delete',
                description: 'Xóa banner',


            },
            {
                url: 'admin/page-image-content/read',
                description: 'Xem danh mục ảnh',


            },
            {
                url: 'admin/page-image-content/create',
                description: 'Tạo danh mục ảnh',


            },
            {
                url: 'admin/page-image-content/update',
                description: 'Sửa danh mục ảnh',


            },
            {
                url: 'admin/page-image-content/delete',
                description: 'Xóa danh mục ảnh',


            },
            {
                url: 'admin/page/read',
                description: 'Xem danh mục trang',


            },
            {
                url: 'admin/page/create',
                description: 'Tạo danh mục trang',


            },
            {
                url: 'admin/page/update',
                description: 'Sửa danh mục trang',


            },
            {
                url: 'admin/page/delete',
                description: 'Xóa danh mục trang',


            },
            {
                url: 'admin/specialty/read',
                description: 'Xem chuyên khoa',


            },
            {
                url: 'admin/specialty/create',
                description: 'Tạo chuyên khoa',


            },
            {
                url: 'admin/specialty/update',
                description: 'Sửa chuyên khoa',


            },
            {
                url: 'admin/specialty/delete',
                description: 'Xóa chuyên khoa',


            },
            {
                url: 'admin/question/read',
                description: 'Xem danh mục hỏi đáp',


            },
            {
                url: 'admin/question/create',
                description: 'Thêm danh mục hỏi đáp',


            },
            {
                url: 'admin/question/update',
                description: 'Sửa danh mục hỏi đáp',


            },
            {
                url: 'admin/question/delete',
                description: 'Xóa danh mục hỏi đáp',


            },
            {
                url: 'admin/doctor/read',
                description: 'Xem bác sĩ',


            },
            {
                url: 'admin/doctor/create',
                description: 'Tạo bác sĩ',


            },
            {
                url: 'admin/doctor/update',
                description: 'Sửa bác sĩ',


            },
            {
                url: 'admin/doctor/delete',
                description: 'Xóa bác sĩ',


            },
            {
                url: 'admin/working-slot-template/read',
                description: 'Xem lịch làm việc bác sĩ',


            },
            {
                url: 'admin/working-slot-template/create',
                description: 'Tạo lịch làm việc bác sĩ',


            },
            {
                url: 'admin/working-slot-template/update',
                description: 'Sửa lịch làm việc bác sĩ',


            },
            {
                url: 'admin/working-slot-template/delete',
                description: 'Xóa lịch làm việc bác sĩ',


            },
            {
                url: 'admin/doctor-day-off/read',
                description: 'Xem lịch nghỉ bác sĩ',


            },
            {
                url: 'admin/doctor-day-off/create',
                description: 'Thêm lịch nghỉ bác sĩ',


            },
            {
                url: 'admin/doctor-day-off/update',
                description: 'Sửa lịch nghỉ bác sĩ',


            },
            {
                url: 'admin/doctor-day-off/delete',
                description: 'Xóa lịch nghỉ bác sĩ',


            },
            {
                url: 'admin/news-category/read',
                description: 'Xem loại tin',


            },
            {
                url: 'admin/news-category/create',
                description: 'Tạo loại tin',


            },
            {
                url: 'admin/news-category/update',
                description: 'Sửa loại tin',


            },
            {
                url: 'admin/news-category/delete',
                description: 'Xóa loại tin',


            },
            {
                url: 'admin/page-text-content/read',
                description: 'Xem Web text',


            },
            {
                url: 'admin/page-text-content/create',
                description: 'Tạo Web text',


            },
            {
                url: 'admin/page-text-content/update',
                description: 'Sửa Web text',


            },
            {
                url: 'admin/page-text-content/delete',
                description: 'Xóa Web text',


            },
            {
                url: 'admin/page-video-content/read',
                description: 'Xem Web video',


            },
            {
                url: 'admin/page-video-content/create',
                description: 'Tạo Web video',


            },
            {
                url: 'admin/page-video-content/update',
                description: 'Sửa Web video',


            },
            {
                url: 'admin/page-video-content/delete',
                description: 'Xóa Web video',


            },
            {
                url: 'admin/images/read',
                description: 'Xem kho ảnh',


            },
            {
                url: 'admin/images/delete',
                description: 'Xóa kho ảnh',


            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Role', null, {});
    }
};
