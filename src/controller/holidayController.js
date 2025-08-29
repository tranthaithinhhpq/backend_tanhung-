import db from '../models/index.js';
import { Op } from 'sequelize';


const getPaginate = async (req, res) => {
    try {
        let page = +req.query.page || 1;
        let limit = +req.query.limit || 5;
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Holiday.findAndCountAll({
            offset,
            limit,
            order: [['date', 'ASC']]
        });

        return res.status(200).json({
            EC: 0,
            DT: {
                rows,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            }
        });
    } catch (err) {
        console.error('❌ getPaginate Holiday error:', err);
        return res.status(500).json({ EC: 1, EM: 'Server error' });
    }
};

const create = async (req, res) => {
    try {
        const { date, description } = req.body;
        if (!date) {
            return res.status(400).json({ EC: 1, EM: 'Missing date' });
        }

        await db.Holiday.create({ date, description });

        return res.status(200).json({ EC: 0, EM: 'Tạo mới thành công' });
    } catch (err) {
        console.error('❌ create Holiday error:', err);
        return res.status(500).json({ EC: 1, EM: 'Server error' });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, description } = req.body;

        const holiday = await db.Holiday.findByPk(id);
        if (!holiday) {
            return res.status(404).json({ EC: 1, EM: 'Holiday not found' });
        }

        await holiday.update({ date, description });

        return res.status(200).json({ EC: 0, EM: 'Cập nhật thành công' });
    } catch (err) {
        console.error('❌ update Holiday error:', err);
        return res.status(500).json({ EC: 1, EM: 'Server error' });
    }
};

const _delete = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ EC: 1, EM: 'Missing id' });
        }

        await db.Holiday.destroy({ where: { id } });

        return res.status(200).json({ EC: 0, EM: 'Xóa thành công' });
    } catch (err) {
        console.error('❌ delete Holiday error:', err);
        return res.status(500).json({ EC: 1, EM: 'Server error' });
    }
};

// controller
const getAll = async (req, res) => {
    try {
        const holidays = await db.Holiday.findAll({
            attributes: ['date'],
            order: [['date', 'ASC']]
        });
        return res.status(200).json({ EC: 0, DT: holidays });
    } catch (err) {
        return res.status(500).json({ EC: 1, EM: 'Server error' });
    }
};

export default {
    getPaginate,
    create,
    update,
    delete: _delete,
    getAll
};