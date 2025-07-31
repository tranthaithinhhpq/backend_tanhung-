import db from '../models/index.js';

const getPaginate = async (page = 1, limit = 5) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await db.Position.findAndCountAll({
        offset,
        limit,
        order: [['createdAt', 'DESC']]
    });

    return {
        EC: 0,
        EM: 'Fetched successfully',
        DT: {
            totalRows: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            rows
        }
    };
};

const create = async (data) => {
    const position = await db.Position.create(data);
    return { EC: 0, EM: 'Created', DT: position };
};

const update = async (id, data) => {
    const pos = await db.Position.findByPk(id);
    if (!pos) return { EC: 1, EM: 'Not found' };
    await pos.update(data);
    return { EC: 0, EM: 'Updated', DT: pos };
};

const remove = async (id) => {
    const pos = await db.Position.findByPk(id);
    if (!pos) return { EC: 1, EM: 'Not found' };
    await pos.destroy();
    return { EC: 0, EM: 'Deleted' };
};

export default { getPaginate, create, update, remove };
