// File: services/questionService.js
import db from '../models/index.js';

const getPaginate = async (page, limit) => {
    try {
        const offset = (page - 1) * limit;
        const { count, rows } = await db.Question.findAndCountAll({
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
    } catch (error) {
        console.error('getPaginate error:', error);
        return { EC: -1, EM: 'Error fetching data', DT: [] };
    }
};

const create = async (data) => {
    try {
        const question = await db.Question.create(data);
        return { EC: 0, EM: 'Created successfully', DT: question };
    } catch (error) {
        console.error('Create question error:', error);
        return { EC: -1, EM: 'Create failed', DT: {} };
    }
};

const update = async (id, data) => {
    try {
        const question = await db.Question.findByPk(id);
        if (!question) return { EC: 1, EM: 'Not found', DT: {} };
        await question.update(data);
        return { EC: 0, EM: 'Updated successfully', DT: question };
    } catch (error) {
        console.error('Update question error:', error);
        return { EC: -1, EM: 'Update failed', DT: {} };
    }
};

const remove = async (id) => {
    try {
        const question = await db.Question.findByPk(id);
        if (!question) return { EC: 1, EM: 'Not found', DT: {} };
        await question.destroy();
        return { EC: 0, EM: 'Deleted successfully', DT: {} };
    } catch (error) {
        console.error('Delete question error:', error);
        return { EC: -1, EM: 'Delete failed', DT: {} };
    }
};

export default {
    getPaginate,
    create,
    update,
    remove
};
