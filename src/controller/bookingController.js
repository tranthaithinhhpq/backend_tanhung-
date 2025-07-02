import db from "../models";
const createBooking = async (req, res) => {
    try {
        await db.Booking.create({
            name: req.body.name,
            phone: req.body.phone,
            dob: req.body.dob,
            address: req.body.address,
            email: req.body.email,
            reason: req.body.reason,
            specialtyId: req.body.specialtyId,
            doctorId: req.body.doctorId,
            scheduleTime: req.body.scheduleTime
        });
        return res.json({ EC: 0, EM: "Đặt lịch thành công" });
    } catch (err) {
        console.error(err);
        return res.json({ EC: 1, EM: "Lỗi đặt lịch" });
    }
};
module.exports = {
    createBooking
};
