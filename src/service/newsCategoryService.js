import db from "../models/index.js";

const getPaginate = async (page = 1, limit = 5) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await db.NewsCategory.findAndCountAll({
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
    const item = await db.NewsCategory.create(data);
    return { EC: 0, EM: 'Created', DT: item };
};

const update = async (id, data) => {
    const item = await db.NewsCategory.findByPk(id);
    if (!item) return { EC: 1, EM: 'Not found' };
    await item.update(data);
    return { EC: 0, EM: 'Updated', DT: item };
};

const remove = async (id) => {
    const item = await db.NewsCategory.findByPk(id);
    if (!item) return { EC: 1, EM: 'Not found' };
    await item.destroy();
    return { EC: 0, EM: 'Deleted' };
};

const getAllCategories = async (group = 'news') => {
    const whereClause = group ? { group } : {};
    const categories = await db.NewsCategory.findAll({
        where: whereClause,
        attributes: ['id', 'name'],
        order: [['name', 'ASC']],
    });
    return categories;
};




export default { getPaginate, create, update, remove, getAllCategories };
