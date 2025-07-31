import db from '../models/index';

const getPaginate = async (page = 1, limit = 5, doctorName = '') => {
    const offset = (page - 1) * limit;
    const whereClause = {};

    const include = [{
        model: db.DoctorInfo,
        as: 'doctor',
        attributes: ['id', 'doctorName'],
        where: doctorName
            ? { doctorName: { [db.Sequelize.Op.like]: `%${doctorName}%` } }
            : undefined
    }];

    const { count, rows } = await db.WorkingSlotTemplate.findAndCountAll({
        where: whereClause,
        offset,
        limit,
        order: [['dayOfWeek', 'ASC'], ['startTime', 'ASC']],
        include
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
    const item = await db.WorkingSlotTemplate.create(data);
    return { EC: 0, EM: 'Created', DT: item };
};

const update = async (id, data) => {
    const item = await db.WorkingSlotTemplate.findByPk(id);
    if (!item) return { EC: 1, EM: 'Not found' };
    await item.update(data);
    return { EC: 0, EM: 'Updated', DT: item };
};

const remove = async (id) => {
    const item = await db.WorkingSlotTemplate.findByPk(id);
    if (!item) return { EC: 1, EM: 'Not found' };
    await item.destroy();
    return { EC: 0, EM: 'Deleted' };
};

export default { getPaginate, create, update, remove };
