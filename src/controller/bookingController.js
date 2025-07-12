import db from '../models/index.js';
import bookingService from '../service/bookingService.js';

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

const getBookingPaginate = async (req, res) => {
    try {
        const { page, limit, doctorId, date } = req.query;
        const result = await bookingService.getPaginatedBookings({
            page: +page || 1,
            limit: +limit || 10,
            doctorId,
            date
        });

        return res.status(200).json(result);
    } catch (err) {
        console.error("❌ getBookingPaginate error:", err);
        return res.status(500).json({ EC: 1, EM: "Server error", DT: [] });
    }
};
const createBookingForClient = async (req, res) => {
    try {
        const data = await db.Booking.create(req.body);
        return res.status(201).json({ EC: 0, EM: "Đặt lịch thành công", DT: data });
    } catch (e) {
        console.error("createBooking error:", e);
        return res.status(500).json({ EC: 1, EM: "Lỗi khi tạo booking" });
    }
};

const deleteBookingForClient = async (req, res) => {
    try {
        const id = req.params.id;
        await db.Booking.destroy({ where: { id } });
        return res.status(200).json({ EC: 0, EM: "Xóa thành công" });
    } catch (e) {
        console.error("deleteBooking error:", e);
        return res.status(500).json({ EC: 1, EM: "Lỗi khi xóa booking" });
    }
};

const updateBooking = async (req, res) => {
    const bookingId = req.params.id;
    const {
        name, phone, dob, address, email,
        reason, doctorId, specialtyId,
        servicePriceId, slotId, scheduleTime
    } = req.body;

    try {
        const booking = await db.Booking.findByPk(bookingId);
        if (!booking) {
            return res.status(404).json({ EC: 1, EM: 'Không tìm thấy lịch khám', DT: null });
        }

        await booking.update({
            name, phone, dob, address, email,
            reason, doctorId, specialtyId,
            servicePriceId, slotId, scheduleTime
        });

        return res.status(200).json({ EC: 0, EM: 'Cập nhật thành công', DT: booking });
    } catch (error) {
        console.error("❌ updateBooking error:", error);
        return res.status(500).json({ EC: 1, EM: 'Lỗi server', DT: null });
    }
};


export default {
    createBooking,
    getBookingPaginate,
    createBookingForClient,
    deleteBookingForClient,
    updateBooking
};
