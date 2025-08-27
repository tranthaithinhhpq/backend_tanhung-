import db from "../models/index.js";
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
    // ép kiểu chuỗi từ form-data sang boolean
    const toBool = (v) => {
        if (typeof v === 'boolean') return v;
        if (v === 1 || v === '1') return true;
        if (v === 0 || v === '0') return false;
        if (typeof v === 'string') {
            const s = v.trim().toLowerCase();
            if (s === 'true' || s === 'on' || s === 'yes') return true;
            if (s === 'false' || s === 'off' || s === 'no') return false;
        }
        return undefined; // không truyền thì trả về undefined để dùng default
    };

    try {
        const isSelectableParsed = toBool(body.isSelectable);
        const payload = {
            name: body.name?.trim(),
            description: body.description ?? null,
            markdownContent: body.markdownContent ?? null,
            // nếu không truyền isSelectable thì mặc định true
            isSelectable: isSelectableParsed === undefined ? true : isSelectableParsed,
            image: file ? `/images/${file.filename}` : null,
        };

        await db.Specialty.create(payload);
        return { EC: 0, EM: 'Tạo mới thành công' };
    } catch (error) {
        console.error('createNewSpecialty error:', error);
        return { EC: -1, EM: 'Lỗi khi tạo chuyên khoa' };
    }
};

const updateSpecialty = async (id, body, file) => {
    try {
        const spec = await db.Specialty.findByPk(id);
        if (!spec) return { EC: -1, EM: 'Không tìm thấy chuyên khoa' };

        // Nếu có file mới thì xóa ảnh cũ
        if (file && spec.image) {
            const currentPath = path.join(
                __dirname,
                '..',
                'public',
                spec.image.startsWith('/') ? spec.image.slice(1) : spec.image
            );
            if (fs.existsSync(currentPath)) {
                fs.unlinkSync(currentPath); // 🔥 Xoá ảnh cũ khỏi thư mục images
            }
        }

        // Ép kiểu isSelectable
        const parseBool = (v) => {
            if (typeof v === 'boolean') return v;
            if (v === 1 || v === '1') return true;
            if (v === 0 || v === '0') return false;
            if (typeof v === 'string') {
                const s = v.trim().toLowerCase();
                if (['true', 'on', 'yes'].includes(s)) return true;
                if (['false', 'off', 'no'].includes(s)) return false;
            }
            return spec.isSelectable; // nếu không gửi thì giữ nguyên
        };

        // Cập nhật dữ liệu
        spec.name = body.name;
        spec.displayOrder = body.displayOrder;
        spec.description = body.description;
        spec.markdownContent = body.markdownContent;
        spec.isSelectable = parseBool(body.isSelectable); // ✅ thêm dòng này
        if (file) spec.image = `/images/${file.filename}`;

        await spec.save();

        return { EC: 0, EM: 'Cập nhật thành công' };
    } catch (err) {
        console.error('Update Specialty Error:', err);
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
