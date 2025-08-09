import db from "../models/index";
import fs from 'fs';
import path from 'path';

const getAllSpecialties = async () => {
    try {
        const data = await db.Specialty.findAll({ order: [['id', 'DESC']] });
        return { EC: 0, DT: data };
    } catch (error) {
        return { EC: -1, EM: 'Lỗi khi lấy danh sách chuyên khoa', DT: [] };
    }
};

const createNewSpecialty = async (body, file) => {
    try {
        await db.Specialty.create({
            name: body.name,
            description: body.description,
            markdownContent: body.markdownContent,
            image: file ? `/images/${file.filename}` : null
        });
        return { EC: 0, EM: 'Tạo mới thành công' };
    } catch (error) {
        return { EC: -1, EM: 'Lỗi khi tạo chuyên khoa' };
    }
};

const updateSpecialty = async (id, body, file) => {
    try {
        const spec = await db.Specialty.findByPk(id);
        if (!spec) return { EC: -1, EM: 'Không tìm thấy chuyên khoa' };

        // Nếu có file mới thì xóa ảnh cũ
        if (file && spec.image) {
            const currentPath = path.join(__dirname, '..', 'public', spec.image.startsWith('/') ? spec.image.slice(1) : spec.image);
            if (fs.existsSync(currentPath)) {
                fs.unlinkSync(currentPath); // 🔥 Xoá ảnh cũ khỏi thư mục images
            }
        }

        // Cập nhật dữ liệu
        spec.name = body.name;
        spec.displayOrder = body.displayOrder;
        spec.description = body.description;
        spec.markdownContent = body.markdownContent;
        if (file) spec.image = `/images/${file.filename}`;
        await spec.save();

        return { EC: 0, EM: 'Cập nhật thành công' };
    } catch (err) {
        console.error("Update Specialty Error:", err);
        return { EC: -1, EM: 'Lỗi khi cập nhật' };
    }
};

const deleteSpecialty = async (id) => {
    try {
        const specialty = await db.Specialty.findByPk(id);
        if (!specialty) {
            return { EC: 1, EM: 'Chuyên khoa không tồn tại' };
        }

        // ✅ Xóa ảnh nếu có
        if (specialty.image) {
            const imgPath = path.join(__dirname, '..', 'public', specialty.image.startsWith('/') ? specialty.image.slice(1) : specialty.image);
            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath); // xóa ảnh
            }
        }

        await specialty.destroy();
        return { EC: 0, EM: 'Xóa thành công' };
    } catch (err) {
        console.error('❌ deleteSpecialty error:', err);
        return { EC: -1, EM: 'Lỗi khi xóa' };
    }
};

export default {
    getAllSpecialties,
    createNewSpecialty,
    updateSpecialty,
    deleteSpecialty
};
