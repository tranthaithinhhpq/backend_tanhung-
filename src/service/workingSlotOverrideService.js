import db from '../models/index';

const getOverrides = async (query) => {
    const { doctorId, date } = query;
    const where = {};
    if (doctorId) where.doctorId = doctorId;
    if (date) where.date = date; // ✅ Thêm lọc theo ngày

    const data = await db.WorkingSlotOverride.findAll({
        where,
        include: [
            { model: db.DoctorInfo, attributes: ['doctorName'] },
            { model: db.WorkingSlotTemplate, attributes: ['startTime', 'endTime'] }
        ],
        order: [['date', 'ASC']]
    });

    return { EC: 0, DT: data };
};


const createOverride = async (data) => {
    if (!data.doctorId || !data.date || typeof data.isActive !== 'boolean') {
        return { EC: 1, EM: 'Thiếu dữ liệu bắt buộc' };
    }

    const record = await db.WorkingSlotOverride.create({
        doctorId: data.doctorId,
        slotId: data.slotId || null,
        date: data.date,
        isActive: data.isActive,
        note: data.note || null
    });

    return { EC: 0, EM: 'Tạo thành công', DT: record };
};

const updateOverride = async (id, data) => {
    const override = await db.WorkingSlotOverride.findByPk(id);
    if (!override) return { EC: 1, EM: 'Không tìm thấy' };

    await override.update(data);
    return { EC: 0, EM: 'Cập nhật thành công' };
};

const deleteOverride = async (id) => {
    await db.WorkingSlotOverride.destroy({ where: { id } });
    return { EC: 0, EM: 'Xóa thành công' };
};

export default {
    getOverrides,
    createOverride,
    updateOverride,
    deleteOverride
};
