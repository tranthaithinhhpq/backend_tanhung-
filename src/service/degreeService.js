import db from '../models/index';

const getAll = async () => {
    const data = await db.Degree.findAll({ order: [['id', 'ASC']] });
    return { EC: 0, EM: 'OK', DT: data };
};

const getPaginate = async (page = 1, limit = 10) => {
    try {
        const offset = (page - 1) * limit;
        const { count, rows } = await db.Degree.findAndCountAll({
            offset,
            limit,
            order: [['createdAt', 'DESC']]
        });

        return {
            EC: 0,
            EM: 'Success',
            DT: {
                totalRows: count,
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                rows
            }
        };
    } catch (error) {
        console.error('getPaginate Degree error:', error);
        return { EC: -1, EM: 'Server error', DT: {} };
    }
};


const create = async (data) => {
    if (!data.name) return { EC: 1, EM: 'Name is required' };
    const degree = await db.Degree.create(data);
    return { EC: 0, EM: 'Created', DT: degree };
};

const update = async (id, data) => {
    const degree = await db.Degree.findByPk(id);
    if (!degree) return { EC: 1, EM: 'Not found' };
    await degree.update(data);
    return { EC: 0, EM: 'Updated', DT: degree };
};

const remove = async (id) => {
    const degree = await db.Degree.findByPk(id);
    if (!degree) return { EC: 1, EM: 'Not found' };
    await degree.destroy();
    return { EC: 0, EM: 'Deleted' };
};

export default { getAll, getPaginate, create, update, remove };
