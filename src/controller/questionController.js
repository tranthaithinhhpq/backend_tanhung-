// File: controllers/questionController.js
import questionService from '../service/questionService.js';
import db from '../models/index.js';

const getPaginate = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const data = await questionService.getPaginate(page, limit);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: [] });
    }
};

const create = async (req, res) => {
    try {
        const data = await questionService.create(req.body);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ EC: -1, EM: 'Create failed', DT: {} });
    }
};

const update = async (req, res) => {
    try {
        const data = await questionService.update(req.params.id, req.body);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ EC: -1, EM: 'Update failed', DT: {} });
    }
};

const remove = async (req, res) => {
    try {
        const data = await questionService.remove(req.body.id);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ EC: -1, EM: 'Delete failed', DT: {} });
    }
};

const submitQuestion = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, questionTitle, questionContent } = req.body;

        if (!fullName || !email || !questionTitle || !questionContent) {
            return res.status(400).json({ EC: 1, EM: 'Vui lòng điền đầy đủ các trường bắt buộc' });
        }

        const question = await db.Question.create({
            fullName,
            email,
            phoneNumber,
            questionTitle,
            questionContent,
            status: 'pending'
        });

        return res.status(200).json({ EC: 0, EM: 'Gửi câu hỏi thành công', DT: question });
    } catch (error) {
        console.error('submitQuestion error:', error);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: {} });
    }
};

export default {
    getPaginate,
    create,
    update,
    remove,
    submitQuestion
};
