import db from '../models/index.js';

const getPaginate = async (page = 1, limit = 5) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await db.PageImageContent.findAndCountAll({
        offset,
        limit,
        order: [['sortOrder', 'ASC'], ['id', 'DESC']]
    });

    return {
        EC: 0,
        EM: 'Lấy danh sách thành công',
        DT: {
            totalRows: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            rows,
        }
    };
};

const create = async (data) => {
    return await db.PageImageContent.create(data);
};

const update = async (id, data) => {
    const item = await db.PageImageContent.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
};

const remove = async (id) => {
    const item = await db.PageImageContent.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
};

export default {
    getPaginate,
    create,
    update,
    remove
};