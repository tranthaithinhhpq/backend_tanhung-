import db from '../models/index.js';
import path from 'path';

const formatPath = (filePath) => {
    if (!filePath) return null;
    const normalized = filePath.replace(/\\/g, '/');
    const index = normalized.indexOf('/images/');
    return index !== -1 ? normalized.substring(index) : '/' + path.basename(normalized);
};

// GET (phân trang)
const getPaginate = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit;

        const { count, rows } = await db.PageImageContent.findAndCountAll({
            offset,
            limit,
            order: [['sortOrder', 'ASC'], ['id', 'DESC']],
        });

        return res.status(200).json({
            EC: 0,
            EM: 'Lấy danh sách thành công',
            DT: {
                totalRows: count,
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                rows,
            }
        });
    } catch (err) {
        console.error("getPageImageContentPaginate:", err);
        return res.status(500).json({ EC: -1, EM: "Server error", DT: [] });
    }
};

// POST (tạo mới)
const create = async (req, res) => {
    try {
        const { section, title, sortOrder } = req.body;
        const imagePath = req.files?.image?.[0]?.path;

        const newItem = await db.PageImageContent.create({
            section,
            title,
            sortOrder: sortOrder || 0,
            image: formatPath(imagePath)
        });

        return res.status(200).json({ EC: 0, EM: "Tạo thành công", DT: newItem });
    } catch (err) {
        console.error("createPageImageContent:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi khi tạo", DT: {} });
    }
};

// PUT (cập nhật)
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await db.PageImageContent.findByPk(id);
        if (!item) return res.status(404).json({ EC: 1, EM: 'Không tìm thấy' });

        const { section, title, sortOrder } = req.body;
        const imagePath = req.files?.image?.[0]?.path;

        await item.update({
            section: section || item.section,
            title: title || item.title,
            sortOrder: sortOrder ?? item.sortOrder,
            image: imagePath ? formatPath(imagePath) : item.image,
        });

        return res.status(200).json({ EC: 0, EM: "Cập nhật thành công", DT: item });
    } catch (err) {
        console.error("updatePageImageContent:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi khi cập nhật", DT: {} });
    }
};

// DELETE
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await db.PageImageContent.findByPk(id);
        if (!item) return res.status(404).json({ EC: 1, EM: 'Không tìm thấy' });

        await item.destroy();
        return res.status(200).json({ EC: 0, EM: "Xoá thành công" });
    } catch (err) {
        console.error("deletePageImageContent:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi khi xoá" });
    }
};

export default {
    getPaginate,
    create,
    update,
    remove
};
