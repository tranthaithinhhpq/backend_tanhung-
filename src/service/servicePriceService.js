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

const create = async (data) => {
    const required = ['name', 'group', 'price', 'priceInsurance', 'specialtyId'];
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


const getPaginatedServices = async (page, limit) => {
    const offset = (page - 1) * limit;
    const { rows, count } = await db.ServicePrice.findAndCountAll({
        include: { model: db.Specialty, attributes: ['name'] },
        limit,
        offset,
        order: [['id', 'DESC']]
    });

    return {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        rows
    };
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
    getDrugList
};
