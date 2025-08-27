import db from '../models/index.js';
import { Op } from 'sequelize';

const getPaginatedBookings = async ({
    page,
    limit,
    doctorId,
    date,
    specialtyId,
    status,
    startDate,
    endDate
}) => {
    try {
        const offset = (page - 1) * limit;
        const where = {};

        // Lọc theo bác sĩ
        if (doctorId) where.doctorId = doctorId;

        // Lọc theo trạng thái
        if (status) where.status = status;

        // Lọc theo thời gian
        if (startDate || endDate) {
            // Ưu tiên lọc theo khoảng
            where.scheduleTime = {};
            if (startDate) {
                where.scheduleTime[Op.gte] = `${startDate} 00:00:00`;
            }
            if (endDate) {
                where.scheduleTime[Op.lte] = `${endDate} 23:59:59`;
            }
        } else if (date) {
            // Nếu không có startDate/endDate thì lọc theo ngày đơn
            where.scheduleTime = {
                [Op.gte]: `${date} 00:00:00`,
                [Op.lt]: `${date} 23:59:59`
            };
        }

        // Tạo include cho DoctorInfo (lọc theo chuyên khoa nếu có)
        const doctorInclude = {
            model: db.DoctorInfo,
            attributes: ['id', 'doctorName', 'specialtyId'],
            ...(specialtyId && {
                where: { specialtyId: +specialtyId }
            }),
            include: [ // luôn include Specialty
                {
                    model: db.Specialty,
                    attributes: ['id', 'name']
                }
            ]
        };

        const { count, rows } = await db.Booking.findAndCountAll({
            where,
            include: [
                doctorInclude,
                { model: db.ServicePrice, attributes: ['id', 'name', 'price'] },
                {
                    model: db.WorkingSlotTemplate,
                    attributes: ['id', 'startTime', 'endTime']
                }
            ],
            limit,
            offset,
            order: [['scheduleTime', 'DESC']]
        });

        return {
            EC: 0,
            DT: {
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                records: rows
            }
        };
    } catch (e) {
        console.error('getPaginatedBookings error:', e);
        return { EC: 1, EM: 'Lỗi truy vấn booking', DT: [] };
    }
};

export default {
    getPaginatedBookings
};
