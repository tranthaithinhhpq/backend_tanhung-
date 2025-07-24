import db from '../models/index.js';
import path from 'path';
import fs from 'fs';

// Utility để xử lý đường dẫn
const formatPath = (filePath) => {
    const relative = filePath.split('public')[1];
    return relative ? relative.replace(/\\/g, '/') : filePath;
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

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await db.PageImageContent.findByPk(id);
        if (!item) return res.status(404).json({ EC: 1, EM: 'Không tìm thấy' });

        const { section, title, sortOrder } = req.body;
        const imageFile = req.files?.image?.[0];

        // Nếu có ảnh mới
        if (imageFile) {
            // Xóa ảnh cũ nếu tồn tại
            if (item.image) {
                const oldImagePath = path.join(__dirname, '../public', item.image.startsWith('/') ? item.image.slice(1) : item.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        }

        const imagePath = imageFile ? formatPath(imageFile.path) : item.image;

        await item.update({
            section: section || item.section,
            title: title || item.title,
            sortOrder: sortOrder ?? item.sortOrder,
            image: imagePath,
        });

        return res.status(200).json({ EC: 0, EM: "Cập nhật thành công", DT: item });
    } catch (err) {
        console.error("❌ updatePageImageContent error:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi khi cập nhật", DT: {} });
    }
};

// DELETE
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await db.PageImageContent.findByPk(id);
        if (!item) return res.status(404).json({ EC: 1, EM: 'Không tìm thấy' });

        // Xoá file ảnh nếu có
        if (item.image) {
            const imagePath = path.join(__dirname, '../public', item.image.startsWith('/') ? item.image.slice(1) : item.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        // Xoá bản ghi DB
        await item.destroy();
        return res.status(200).json({ EC: 0, EM: "Xoá thành công" });
    } catch (err) {
        console.error("❌ deletePageImageContent error:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi khi xoá" });
    }
};

export default {
    getPaginate,
    create,
    update,
    remove
};
