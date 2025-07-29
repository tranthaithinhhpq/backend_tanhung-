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
            servicePriceId
        });

        return res.status(200).json({ EC: 0, EM: 'Đặt lịch thành công', DT: booking });
    } catch (error) {
        console.error('❌ createBooking error:', error);
        return res.status(500).json({ EC: 1, EM: 'Lỗi tạo booking', DT: {} });
    }
};


const getBookingPaginate = async (req, res) => {
    try {
        const {
            page,
            limit,
            doctorId,
            date,
            specialtyId,
            status,
            startDate,
            endDate
        } = req.query;

        const result = await bookingService.getPaginatedBookings({
            page: +page || 1,
            limit: +limit || 10,
            doctorId,
            date,
            specialtyId,
            status,
            startDate,
            endDate
        });

        return res.status(200).json(result);
    } catch (err) {
        console.error("❌ getBookingPaginate error:", err);
        return res.status(500).json({ EC: 1, EM: "Server error", DT: [] });
    }
};



const createBookingForClient = async (req, res) => {
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
            servicePriceId
        });

        return res.status(200).json({ EC: 0, EM: 'Đặt lịch thành công', DT: booking });
    } catch (error) {
        console.error('❌ createBooking error:', error);
        return res.status(500).json({ EC: 1, EM: 'Lỗi tạo booking', DT: {} });
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
    try {
        const { id } = req.params;
        const {
            name, phone, dob, address, email, reason,
            specialtyId, doctorId, servicePriceId, slotId, scheduleTime, status
        } = req.body;

        if (!name || !phone || !doctorId || !slotId || !scheduleTime) {
            return res.status(400).json({ EC: 1, EM: 'Thiếu thông tin bắt buộc' });
        }

        const booking = await db.Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ EC: 1, EM: 'Không tìm thấy lịch hẹn' });
        }

        // Không cho phép cập nhật lịch trong quá khứ
        if (new Date(scheduleTime) < new Date()) {
            return res.status(400).json({ EC: 1, EM: 'Không thể đặt lịch cho thời gian trong quá khứ' });
        }

        // Cập nhật các trường
        booking.name = name;
        booking.phone = phone;
        booking.dob = dob || null;
        booking.address = address || null;
        booking.email = email || null;
        booking.reason = reason || null;
        booking.specialtyId = specialtyId;
        booking.doctorId = doctorId;
        booking.servicePriceId = servicePriceId || null;
        booking.slotId = slotId;
        booking.scheduleTime = scheduleTime;
        booking.status = status;

        await booking.save();

        return res.status(200).json({
            EC: 0,
            EM: 'Cập nhật lịch hẹn thành công',
            DT: booking
        });
    } catch (err) {
        console.error('❌ Lỗi update booking:', err);
        return res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: err.message
        });
    }
};


const getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const Booking = db.Booking; // ✅ thêm dòng này

        const booking = await Booking.findByPk(id, {
            include: [
                { model: db.DoctorInfo, attributes: ['id', 'doctorName'] },
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.ServicePrice, attributes: ['id', 'name'] },
                { model: db.WorkingSlotTemplate, attributes: ['id', 'startTime', 'endTime'] }
            ]
        });

        if (!booking) {
            return res.status(404).json({ EC: 1, EM: 'Không tìm thấy lịch hẹn' });
        }

        return res.status(200).json({
            EC: 0,
            EM: 'Lấy thông tin lịch hẹn thành công',
            DT: {
                id: booking.id,
                name: booking.name,
                phone: booking.phone,
                dob: booking.dob,
                address: booking.address,
                email: booking.email,
                reason: booking.reason,
                doctorId: booking.DoctorInfo?.id,
                doctorName: booking.DoctorInfo?.doctorName,
                specialtyId: booking.Specialty?.id,
                specialtyName: booking.Specialty?.name,
                servicePriceId: booking.ServicePrice?.id,
                serviceName: booking.ServicePrice?.name,
                slotId: booking.WorkingSlotTemplate?.id,
                slotTime: `${booking.WorkingSlotTemplate?.startTime} - ${booking.WorkingSlotTemplate?.endTime}`,
                scheduleTime: booking.scheduleTime
            }
        });
    } catch (err) {
        console.error("❌ Lỗi get booking:", err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: err.message });
    }
};




export default {
    createBooking,
    getBookingPaginate,
    getBookingById,
    createBookingForClient,
    deleteBookingForClient,
    updateBooking
};
