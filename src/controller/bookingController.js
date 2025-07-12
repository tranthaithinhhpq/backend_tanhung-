// controller/bookingController.js
import db from '../models/index.js';

const createBooking = async (req, res) => {
    try {
        const {
            name, phone, dob, address, email, reason,
            doctorId, specialtyId, slotId, scheduleTime, servicePriceId
        } = req.body;

        const booking = await db.Booking.create({
            name,
            phone,
            dob,
            address,
            email,
            reason,
            doctorId,
            specialtyId,
            slotId,
            scheduleTime,
            servicePriceId // ✅ dòng này phải có
        });

        return res.status(200).json({ EC: 0, EM: 'Đặt lịch thành công', DT: booking });
    } catch (error) {
        console.error('❌ createBooking error:', error);
        return res.status(500).json({ EC: 1, EM: 'Lỗi tạo booking', DT: {} });
    }
};


export default { createBooking };
