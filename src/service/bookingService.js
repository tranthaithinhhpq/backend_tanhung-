import db from '../models/index';
import { Op } from 'sequelize';

const getPaginatedBookings = async ({ page, limit, doctorId, date }) => {
    try {
        const offset = (page - 1) * limit;

        const where = {};
        if (doctorId) where.doctorId = doctorId;
        if (date) {
            where.scheduleTime = {
                [Op.gte]: `${date} 00:00:00`,
                [Op.lt]: `${date} 23:59:59`
            };
        }

        const { count, rows } = await db.Booking.findAndCountAll({
            where,
            include: [
                { model: db.DoctorInfo, attributes: ['id', 'doctorName'] },
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
