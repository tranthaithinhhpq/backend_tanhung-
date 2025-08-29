import workingSlotOverrideService from '../service/workingSlotOverrideService.js';
import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';
import db from '../models/index.js';
const getOverrides = async (req, res) => {
    try {
        const result = await workingSlotOverrideService.getOverrides(req.query);
        return res.status(200).json(result);
    } catch (e) {
        console.error('getOverrides error:', e);
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const createOverride = async (req, res) => {
    try {
        const { doctorId, date, isActive, slotId, note } = req.body;
        console.log("📌 Incoming date:", req.body.date, typeof req.body.date);

        if (!doctorId || !date) {
            return res.status(400).json({ EC: 1, EM: 'Missing required fields' });
        }

        // Nếu slotId là array (multi slot)
        if (Array.isArray(slotId)) {
            const overrideData = slotId.map(s => ({
                doctorId,
                date,
                slotId: s,
                isActive,
                note
            }));
            await db.WorkingSlotOverride.bulkCreate(overrideData);
        } else {
            // Nếu chỉ là 1 số đơn (slot đơn hoặc nghỉ cả ngày)
            await db.WorkingSlotOverride.create({
                doctorId,
                date,
                slotId: slotId || null,
                isActive,
                note,
            });
        }

        return res.status(200).json({ EC: 0, EM: 'Thêm lịch nghỉ thành công' });
    } catch (err) {
        console.error("❌ createOverride error:", err);
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};


const updateOverride = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await workingSlotOverrideService.updateOverride(id, req.body);
        return res.status(200).json(result);
    } catch (e) {
        console.error('updateOverride error:', e);
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const deleteOverride = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await workingSlotOverrideService.deleteOverride(id);
        return res.status(200).json(result);
    } catch (e) {
        console.error('deleteOverride error:', e);
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const getDoctorSlotsByDate = async (req, res) => {
    try {
        const { doctorId, date } = req.query;
        if (!doctorId || !date) {
            return res.status(400).json({ EC: 1, EM: 'Missing doctorId or date' });
        }

        const jsDate = new Date(date);
        const dayOfWeek = jsDate.getDay(); // 0 (CN) đến 6 (Thứ 7)

        const overrides = await db.WorkingSlotOverride.findAll({
            where: {
                doctorId,
                date: jsDate,
                slotId: { [db.Sequelize.Op.ne]: null },
                isActive: false
            }
        });

        const excludedSlotIds = overrides.map(o => o.slotId);

        const slots = await db.WorkingSlotTemplate.findAll({
            where: {
                doctorId,
                dayOfWeek,
                isActive: true,
                id: {
                    [db.Sequelize.Op.notIn]: excludedSlotIds
                }
            },
            order: [['startTime', 'ASC']]
        });

        return res.status(200).json({ EC: 0, DT: slots });
    } catch (err) {
        console.error('❌ getDoctorSlotsByDate error:', err);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: [] });
    }
};




const bulkDelete = async (req, res) => {
    try {
        const { date } = req.body;

        if (!date) {
            return res.status(400).json({ EC: 1, EM: 'Thiếu ngày giới hạn' });
        }

        // Kiểm tra model nào đúng
        const deletedCount = await db.WorkingSlotOverride.destroy({
            where: {
                date: { [Op.lte]: date }   // dùng <= để bao gồm cả ngày đó
            }
        });

        return res.status(200).json({ EC: 0, EM: `Đã xóa ${deletedCount} lịch nghỉ trước ngày ${date}` });
    } catch (e) {
        console.error('❌ bulkDelete error:', e);
        return res.status(500).json({ EC: 1, EM: 'Lỗi server' });
    }
};



const getDayOffPaginate = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit;

        const whereClause = {};

        if (req.query.doctorId) {
            whereClause.doctorId = req.query.doctorId;
        }

        if (req.query.date) {
            whereClause.date = req.query.date;
        }

        const { count, rows } = await db.WorkingSlotOverride.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            include: [
                { model: db.DoctorInfo, attributes: ['doctorName'] },
                { model: db.WorkingSlotTemplate, attributes: ['startTime', 'endTime'] }
            ],
            order: [['date', 'DESC']]
        });

        const totalPages = Math.ceil(count / limit);

        return res.status(200).json({
            EC: 0,
            EM: 'OK',
            DT: {
                records: rows,
                totalPages
            }
        });
    } catch (err) {
        console.error('❌ getDayOffPaginate error:', err);
        return res.status(500).json({
            EC: 1,
            EM: 'Lỗi server',
            DT: []
        });
    }
}



export default {
    getOverrides,
    createOverride,
    updateOverride,
    deleteOverride,
    getDayOffPaginate,
    bulkDelete,
    getDoctorSlotsByDate

};