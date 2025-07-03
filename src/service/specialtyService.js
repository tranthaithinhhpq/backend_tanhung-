import db from "../models/index";

const getAllSpecialties = async () => {
    try {
        let specialties = await db.Specialty.findAll({
            attributes: ['id', 'name', 'description', 'image'],
            order: [['name', 'ASC']]
        });

        return {
            EC: 0,
            EM: 'Lấy danh sách chuyên khoa thành công',
            DT: specialties
        };
    } catch (error) {
        console.error("Error in getAllSpecialties:", error);
        return {
            EC: -1,
            EM: 'Lỗi server khi lấy danh sách chuyên khoa',
            DT: ''
        };
    }
};



export default {
    getAllSpecialties
};
