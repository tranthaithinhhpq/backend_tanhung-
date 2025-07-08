import db from "../models/index";

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

        spec.name = body.name;
        spec.description = body.description;
        spec.markdownContent = body.markdownContent;
        if (file) spec.image = `/images/${file.filename}`;
        await spec.save();

        return { EC: 0, EM: 'Cập nhật thành công' };
    } catch (err) {
        return { EC: -1, EM: 'Lỗi khi cập nhật' };
    }
};

const deleteSpecialty = async (id) => {
    try {
        await db.Specialty.destroy({ where: { id } });
        return { EC: 0, EM: 'Xóa thành công' };
    } catch (err) {
        return { EC: -1, EM: 'Lỗi khi xóa' };
    }
};

export default {
    getAllSpecialties,
    createNewSpecialty,
    updateSpecialty,
    deleteSpecialty
};
