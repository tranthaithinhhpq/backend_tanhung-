import db from '../models/index';
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

        // Lọc theo ngày cụ thể
        if (date) {
            where.scheduleTime = {
                [Op.gte]: `${date} 00:00:00`,
                [Op.lt]: `${date} 23:59:59`
            };
        }

        // Lọc theo khoảng thời gian
        if (startDate && endDate) {
            where.scheduleTime = {
                [Op.gte]: `${startDate} 00:00:00`,
                [Op.lte]: `${endDate} 23:59:59`
            };
        } else if (startDate) {
            where.scheduleTime = {
                [Op.gte]: `${startDate} 00:00:00`
            };
        } else if (endDate) {
            where.scheduleTime = {
                [Op.lte]: `${endDate} 23:59:59`
            };
        }

        // Include condition cho DoctorInfo nếu lọc theo specialtyId
        const doctorInclude = {
            model: db.DoctorInfo,
            attributes: ['id', 'doctorName'],
            where: specialtyId ? { specialtyId: +specialtyId } : undefined
        };

        const { count, rows } = await db.Booking.findAndCountAll({
            where,
            include: [
                doctorInclude,
                { model: db.Specialty, attributes: ['id', 'name'] },
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
        console.error("getPaginatedBookings error:", e);
        return { EC: 1, EM: "Lỗi truy vấn booking", DT: [] };
    }
};




export default {
    getPaginatedBookings
};
