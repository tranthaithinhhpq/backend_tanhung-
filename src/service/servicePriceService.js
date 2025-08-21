import db from '../models/index.js';
import { Op } from 'sequelize';

const getAll = async (query) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const offset = (page - 1) * limit;

    const where = {};
    if (query.specialtyId) {
        where.specialtyId = query.specialtyId;
    }

    const { count, rows } = await db.ServicePrice.findAndCountAll({
        where,
        limit,
        offset,
        order: [['id', 'DESC']],
        include: [
            {
                model: db.Specialty,
                attributes: ['name']
            }
        ]
    });

    return {
        EC: 0,
        EM: 'OK',
        DT: {
            records: rows,
            totalPages: Math.ceil(count / limit)
        }
    };
};

const getAllGroups = async () => {
    try {
        // Lấy tất cả các nhóm (group) từ bảng ServicePrice
        const groups = await db.ServicePrice.findAll({
            attributes: [[db.Sequelize.fn('DISTINCT', db.Sequelize.col('group')), 'group']],  // Lấy các nhóm duy nhất
            order: [['group', 'ASC']]  // Sắp xếp theo tên nhóm (hoặc bất kỳ thuộc tính nào khác)
        });

        // Trả về kết quả
        return {
            EC: 0,
            EM: 'OK',
            DT: groups.map(group => group.group)  // Chỉ lấy tên nhóm (group)
        };
    } catch (err) {
        console.error("getAllGroups service error:", err);
        return {
            EC: -1,
            EM: 'Lỗi khi lấy nhóm',
            DT: []
        };
    }
};

const create = async (data) => {
    // const required = ['name', 'group', 'price', 'priceInsurance', 'specialtyId'];
    const required = ['name', 'price', 'priceInsurance'];
    for (let field of required) {
        if (!data[field]) {
            return { EC: 1, EM: `Thiếu thông tin bắt buộc: ${field}` };
        }
    }

    const newService = await db.ServicePrice.create({
        name: data.name,
        group: data.group,
        price: data.price,
        priceInsurance: data.priceInsurance,
        isSelectable: data.isSelectable ?? false,
        specialtyId: data.specialtyId
    });

    return { EC: 0, EM: 'Tạo thành công', DT: newService };
};

const update = async (id, data) => {
    const service = await db.ServicePrice.findByPk(id);
    if (!service) return { EC: 1, EM: 'Không tìm thấy dịch vụ' };

    await service.update({
        name: data.name,
        group: data.group,
        price: data.price,
        priceInsurance: data.priceInsurance,
        isSelectable: data.isSelectable,
        specialtyId: data.specialtyId
    });

    return { EC: 0, EM: 'Cập nhật thành công', DT: service };
};

const remove = async (id) => {
    await db.ServicePrice.destroy({ where: { id } });
    return { EC: 0, EM: 'Xóa thành công' };
};

// const getPaginatedServices = async (page, limit, filters) => {
//     const offset = (page - 1) * limit;

//     const where = {};

//     if (filters.group) {
//         where.group = filters.group;
//     }

//     if (filters.specialtyId) {
//         where.specialtyId = filters.specialtyId;
//     }

//     try {
//         const { count, rows } = await db.ServicePrice.findAndCountAll({
//             where,
//             limit,
//             offset,
//             order: [['id', 'DESC']], // Sắp xếp theo id giảm dần
//         });

//         return {
//             rows,
//             totalItems: count,
//             totalPages: Math.ceil(count / limit),  // Tính tổng số trang
//         };

//     } catch (err) {
//         console.error('❌ Lỗi trong getPaginatedServices:', err);
//         throw err;  // Để lỗi này tiếp tục đi lên controller để xử lý
//     }
// };

const getPaginatedServices = async (page, limit, filters) => {
    const offset = (page - 1) * limit;

    const where = {};

    if (filters.group) {
        where.group = filters.group;  // Lọc theo nhóm
    }

    if (filters.specialtyId) {
        where.specialtyId = filters.specialtyId;  // Lọc theo chuyên khoa
    }

    try {
        // Truy vấn với include để lấy thông tin tên chuyên khoa
        const { count, rows } = await db.ServicePrice.findAndCountAll({
            where,
            limit,
            offset,
            order: [['id', 'DESC']],  // Sắp xếp theo id giảm dần
            include: [
                {
                    model: db.Specialty,
                    attributes: ['name']  // Lấy trường name của bảng Specialty
                }
            ]
        });

        // Đảm bảo trả về dữ liệu đã liên kết với bảng Specialty
        const servicesWithSpecialtyName = rows.map(service => {
            // Gán tên chuyên khoa vào mỗi dịch vụ
            return {
                ...service.dataValues,
                Specialty: service.Specialty ? service.Specialty.name : 'N/A'  // Lấy tên chuyên khoa
            };
        });

        return {
            rows: servicesWithSpecialtyName,
            totalItems: count,
            totalPages: Math.ceil(count / limit),  // Tính tổng số trang
        };

    } catch (err) {
        console.error('❌ Lỗi trong getPaginatedServices:', err);
        throw err;  // Để lỗi này tiếp tục đi lên controller để xử lý
    }
};



const getPublicList = async ({ page = 1, limit = 10, specialtyId, q }) => {
    const offset = (page - 1) * limit;
    const where = {};

    if (specialtyId) where.specialtyId = specialtyId;
    if (q) where.name = { [Op.like]: `%${q}%` };

    const { count, rows } = await db.ServicePrice.findAndCountAll({
        where,
        limit: +limit,
        offset: +offset,
        order: [['name', 'ASC']],
        attributes: ['id', 'name', 'group', 'price', 'priceInsurance', 'specialtyId'],
        include: [{ model: db.Specialty, attributes: ['id', 'name'] }]
    });

    return {
        rows,
        totalPages: Math.ceil(count / limit)
    };
};


const getDrugList = async ({ page = 1, limit = 10, q }) => {
    const offset = (page - 1) * limit;
    const where = {};
    if (q) where.name = { [Op.like]: `%${q}%` };

    const { count, rows } = await db.DrugPrice.findAndCountAll({
        where,
        limit: +limit,
        offset: +offset,
        order: [['name', 'ASC']],
        attributes: ['id', 'code', 'name', 'activeIngredient', 'concentration', 'unit', 'price', 'insurancePrice']
    });

    return {
        rows,
        totalPages: Math.ceil(count / limit)
    };
};





export default {
    getPaginatedServices,
    getAll,
    create,
    update,
    remove,
    getPublicList,
    getDrugList,
    getAllGroups
};
