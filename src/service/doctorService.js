import db from '../models/index';
import { Op } from "sequelize";
import { eachDayOfInterval, format, getDay, addDays } from "date-fns";

const createDoctorInfo = async (body, file) => {
    try {
        await db.DoctorInfo.create({
            doctorName: body.doctorName,
            specialtyId: body.specialtyId,
            degreeId: body.degreeId,
            positionId: body.positionId,
            markdownContent: body.markdownContent || '',
            image: file ? `/images/${file.filename}` : null
        });

        return { EC: 0, EM: 'Tạo thông tin bác sĩ thành công', DT: '' };
    } catch (e) {
        console.error("❌ createDoctorInfo error:", e);
        return { EC: 1, EM: 'Lỗi khi tạo thông tin', DT: '' };
    }
};

const updateDoctorInfo = async (id, body, file) => {
    try {
        const doctor = await db.DoctorInfo.findByPk(id);
        if (!doctor) return { EC: 1, EM: 'Bác sĩ không tồn tại', DT: {} };

        await doctor.update({
            doctorName: body.doctorName,
            specialtyId: body.specialtyId,
            degreeId: body.degreeId,
            positionId: body.positionId,
            markdownContent: body.markdownContent,
            image: file ? `/images/${file.filename}` : doctor.image
        });

        return { EC: 0, EM: 'Cập nhật thành công', DT: {} };
    } catch (e) {
        console.error("❌ updateDoctorInfo error:", e);
        return { EC: 1, EM: 'Lỗi cập nhật', DT: {} };
    }
};

const getDoctorList = async () => {
    try {
        const doctors = await db.DoctorInfo.findAll({
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ],
            order: [['id', 'DESC']]
        });
        return { EC: 0, EM: 'Lấy danh sách thành công', DT: doctors };
    } catch (e) {
        console.error("❌ getDoctorList error:", e);
        return { EC: 1, EM: 'Lỗi lấy danh sách', DT: [] };
    }
};

const getDoctorListPaginate = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        let { count, rows } = await db.DoctorInfo.findAndCountAll({
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ],
            limit: limit,
            offset: offset,
            order: [['id', 'DESC']]
        });

        let totalPages = Math.ceil(count / limit);

        return {
            EC: 0,
            EM: "Lấy danh sách bác sĩ thành công",
            DT: {
                doctors: rows,
                totalPages: totalPages
            }
        };
    } catch (e) {
        console.error("❌ getDoctorListPaginate error:", e);
        return { EC: 1, EM: "Lỗi lấy danh sách", DT: {} };
    }
};

const getDoctorDetail = async (id) => {
    try {
        const doctor = await db.DoctorInfo.findOne({
            where: { id },
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ]
        });
        if (!doctor) return { EC: 1, EM: 'Không tìm thấy bác sĩ', DT: {} };
        return { EC: 0, EM: 'OK', DT: doctor };
    } catch (e) {
        console.error("❌ getDoctorDetail error:", e);
        return { EC: 1, EM: 'Lỗi server', DT: {} };
    }
};

const deleteDoctorInfo = async (id) => {
    try {
        const doctor = await db.DoctorInfo.findByPk(id);
        if (!doctor) return { EC: 1, EM: 'Bác sĩ không tồn tại', DT: {} };

        await doctor.destroy();
        return { EC: 0, EM: 'Xóa thành công', DT: {} };
    } catch (e) {
        console.error("❌ deleteDoctorInfo error:", e);
        return { EC: 1, EM: 'Lỗi xóa', DT: {} };
    }
};

const getDoctorBySpecialty = async (specialtyId) => {
    try {
        const doctors = await db.DoctorInfo.findAll({
            where: { specialtyId },
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ]
        });
        return { EC: 0, EM: 'Lấy danh sách thành công', DT: doctors };
    } catch (e) {
        console.error("❌ getDoctorBySpecialty error:", e);
        return { EC: 1, EM: 'Lỗi server', DT: [] };
    }
};

const getOtherDoctors = async (currentDoctorId) => {
    try {
        const doctors = await db.DoctorInfo.findAll({
            where: {
                id: { [db.Sequelize.Op.ne]: currentDoctorId }
            },
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ]
        });
        return { EC: 0, EM: 'OK', DT: doctors };
    } catch (e) {
        console.error("❌ getOtherDoctors error:", e);
        return { EC: 1, EM: 'Lỗi server', DT: [] };
    }
};

const getDoctorDetailById = async (id) => {

    try {
        const doctor = await db.DoctorInfo.findOne({
            where: { id },
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ]
        });
        if (!doctor) return { EC: 1, EM: 'Không tìm thấy bác sĩ', DT: {} };
        return { EC: 0, EM: 'OK', DT: doctor };
    } catch (e) {
        console.error("❌ getDoctorDetailById error:", e);
        return { EC: 1, EM: 'Lỗi server', DT: {} };
    }
};

const DEFAULT_SLOTS = [
    "07:00", "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00"
];

const getAvailableScheduleByDoctor = async (doctorId) => {
    try {
        const today = new Date();
        const next14Days = eachDayOfInterval({ start: today, end: addDays(today, 13) });

        const workingSlots = await db.WorkingSlotTemplate.findAll({ where: { doctorId } });

        if (!workingSlots.length) {
            return { EC: 0, DT: [] };
        }

        const formattedSlots = workingSlots.map((slot, index) => ({
            dayOfWeek: slot.dayOfWeek,
            slotId: slot.id, // Dùng id làm slotId nếu không có cột riêng
            time: `${slot.startTime} - ${slot.endTime}`
        }));

        console.log("slots:", formattedSlots.map(s => `${s.dayOfWeek}-${s.slotId}-${s.time}`));

        const overrides = await db.WorkingSlotOverride.findAll({
            where: {
                doctorId,
                date: {
                    [Op.between]: [format(today, 'yyyy-MM-dd'), format(addDays(today, 30), 'yyyy-MM-dd')]
                }
            }
        });

        const overrideMap = {};
        overrides.forEach(ov => {
            const key = `${ov.date}-${ov.slotId}`;
            overrideMap[key] = ov.status; // "disabled" nếu nghỉ
        });

        console.log("overrideMap:", overrideMap);

        const response = [];

        for (let date of next14Days) {
            const dow = getDay(date); // 0 = CN, 1 = T2, ...
            const dateStr = format(date, "yyyy-MM-dd");

            const available = [];

            for (let slot of formattedSlots) {
                if (slot.dayOfWeek === dow) {
                    const key = `${dateStr}-${slot.slotId}`;
                    if (overrideMap[key] !== "disabled") {
                        available.push({
                            slotId: slot.slotId,
                            time: slot.time
                        });
                    }
                }
            }

            if (available.length > 0) {
                response.push({ date: dateStr, slots: available });
            }
        }

        return { EC: 0, DT: response };
    } catch (error) {
        console.error("❌ Lỗi trong getAvailableScheduleByDoctor:", error);
        return { EC: -1, EM: "Lỗi khi lấy lịch bác sĩ", DT: [] };
    }
};



export default {
    createDoctorInfo,
    updateDoctorInfo,
    getDoctorList,
    getDoctorListPaginate,
    getDoctorDetail,
    deleteDoctorInfo,
    getDoctorBySpecialty,
    getOtherDoctors,
    getDoctorDetailById,
    getAvailableScheduleByDoctor
};
