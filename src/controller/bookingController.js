// controller/bookingController.js
import db from '../models/index.js';

const createBooking = async (req, res) => {
    try {
        const { name, phone, dob, address, email, reason, scheduleTime, doctorId, specialtyId } = req.body;

        // Check duplicate
        const exist = await db.Booking.findOne({
            where: { doctorId, scheduleTime }
        });
        if (exist) {
            return res.status(409).json({ EC: 1, EM: "Khung giờ này đã có người đặt!" });
        }

        const booking = await db.Booking.create({
            name, phone, dob, address, email, reason,
            scheduleTime, doctorId, specialtyId
        });

        return res.status(201).json({ EC: 0, EM: 'Đặt lịch thành công', DT: booking });
    } catch (err) {
        console.error("❌ Lỗi createBooking:", err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi máy chủ' });
    }
};

export default { createBooking };
