import doctorService from '../service/doctorService.js';
import db from '../models/index.js';
import path from 'path';
import fs from 'fs';
const { sequelize } = db

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const createDoctorInfo = async (req, res) => {
    try {
        const { doctorName, specialtyId, degreeId, positionId, markdownContent } = req.body;
        const file = req.file;

        const newDoctor = await db.DoctorInfo.create({
            doctorName,
            specialtyId,
            degreeId,
            positionId,
            markdownContent: markdownContent || '',
            image: file ? `/images/${file.filename}` : null
        });

        await createDefaultSlotsForDoctor(newDoctor.id);

        return res.status(201).json({ EC: 0, EM: 'Tạo bác sĩ và lịch mặc định thành công' });
    } catch (err) {
        console.error("❌ createDoctorInfo error:", err);
        return res.status(500).json({ EC: 1, EM: 'Lỗi khi tạo bác sĩ' });
    }
};



const updateDoctorInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await doctorService.updateDoctorInfo(id, req.body, req.file);
        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: {} });
    }
};



const readDoctorGallery = async (req, res) => {
    try {
        const data = await doctorService.readDoctorGallery();
        return res.status(data.EC === 0 ? 200 : 500).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            EC: -1,
            EM: 'Server error',
            DT: null
        });
    }
};



const getDoctorDetailById = async (req, res) => {
    try {
        const { id } = req.params;  // Đảm bảo đây là id

        if (!id) {
            return res.status(400).json({ EC: 1, EM: 'Thiếu id', DT: {} });
        }

        const result = await doctorService.getDoctorDetailById(id);
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error getDoctorDetailById:", e);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: {} });
    }
};


const getOtherDoctors = async (req, res) => {
    try {
        const { id } = req.params;

        const doctors = await db.DoctorInfo.findAll({
            where: {
                id: { [db.Sequelize.Op.ne]: id }
            },
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] }
            ]
        });

        return res.status(200).json({
            EC: 0,
            EM: 'OK',
            DT: doctors
        });
    } catch (e) {
        console.error("❌ getOtherDoctors error:", e);
        return res.status(500).json({
            EC: 1,
            EM: 'Lỗi server',
            DT: []
        });
    }
};




// const getDoctorBySpecialty = async (req, res) => {
//     try {
//         const { specialtyId } = req.params;
//         const doctors = await db.DoctorInfo.findAll({
//             where: { specialtyId },
//             attributes: ['id', 'doctorName', 'image']
//         });

//         return res.status(200).json({
//             EC: 0,
//             DT: doctors
//         });
//     } catch (error) {
//         console.error("❌ Lỗi getDoctorBySpecialty:", error);
//         return res.status(500).json({
//             EC: -1,
//             EM: 'Lỗi server'
//         });
//     }
// };


const getDoctorBySpecialty = async (req, res) => {
    try {
        const { specialtyId } = req.params;

        const doctors = await db.DoctorInfo.findAll({
            where: { specialtyId },
            attributes: ['id', 'doctorName', 'image'],
            include: [
                { model: db.Position, attributes: ['name'] },
                { model: db.Degree, attributes: ['name'] },
                { model: db.Specialty, attributes: ['name'] },
            ],
        });

        return res.status(200).json({ EC: 0, DT: doctors });
    } catch (error) {
        console.error('❌ Lỗi getDoctorBySpecialty:', error);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server' });
    }
};

const getDoctorList = async (req, res) => {
    try {
        let { page = 1, limit = 10, search, degreeId, specialtyId, positionId } = req.query;
        page = +page;
        limit = +limit;
        const offset = (page - 1) * limit;

        const where = {};
        if (search) {
            where.doctorName = { [db.Sequelize.Op.like]: `%${search}%` };
        }
        if (degreeId) {
            where.degreeId = degreeId;
        }
        if (specialtyId) {
            where.specialtyId = specialtyId;
        }
        if (positionId) {
            where.positionId = positionId;
        }

        const { count, rows } = await db.DoctorInfo.findAndCountAll({
            where,
            include: [
                { model: db.Position, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] },
                { model: db.Specialty, attributes: ['id', 'name'] }
            ],
            limit,
            offset,
            order: [['createdAt', 'DESC']]
        });

        return res.status(200).json({
            EC: 0,
            EM: 'Lấy danh sách thành công',
            DT: {
                doctors: rows,
                totalPages: Math.ceil(count / limit)
            }
        });
    } catch (e) {
        console.error('getDoctorList error:', e);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: [] });
    }
};


const getDoctorDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const doctor = await db.DoctorInfo.findOne({
            where: { id },
            include: [
                { model: db.Specialty, attributes: ['id', 'name'] },
                { model: db.Position, attributes: ['id', 'name'] },
                { model: db.Degree, attributes: ['id', 'name'] }
            ]
        });

        if (!doctor) {
            return res.status(404).json({ EC: 1, EM: 'Không tìm thấy bác sĩ', DT: null });
        }

        return res.status(200).json({ EC: 0, EM: 'OK', DT: doctor });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server khi lấy thông tin bác sĩ', DT: null });
    }
};


const deleteDoctorInfo = async (req, res) => {
    try {
        const doctorId = req.params.id;

        // Kiểm tra bác sĩ có tồn tại không
        const doctor = await db.DoctorInfo.findByPk(doctorId);
        if (!doctor) {
            return res.status(404).json({
                EC: 1,
                EM: 'Bác sĩ không tồn tại',
                DT: null
            });
        }

        // Xóa ảnh nếu có
        if (doctor.image) {
            const normalizedPath = doctor.image.startsWith('/')
                ? doctor.image.slice(1)
                : doctor.image;

            const imagePath = path.join(__dirname, '../public', normalizedPath);

            try {
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                    console.log("🗑 Đã xoá ảnh bác sĩ:", imagePath);
                }
            } catch (err) {
                console.error("⚠️ Lỗi khi xoá ảnh bác sĩ:", err);
            }
        }

        // Xóa các slot làm việc mặc định
        await db.WorkingSlotTemplate.destroy({
            where: { doctorId }
        });

        // (Nếu có bảng booking liên quan → xử lý thêm tại đây)

        // Xóa bác sĩ
        await doctor.destroy();

        return res.status(200).json({
            EC: 0,
            EM: 'Xóa bác sĩ và ảnh thành công',
            DT: null
        });
    } catch (e) {
        console.error("❌ deleteDoctorInfo error:", e);
        return res.status(500).json({
            EC: -1,
            EM: "Lỗi server",
            DT: {}
        });
    }
};

const getDoctorListPaginate = async (req, res) => {
    try {
        let page = +req.query.page || 1;
        let limit = +req.query.limit || 5;

        let data = await doctorService.getDoctorListPaginate(page, limit);

        return res.status(200).json(data);
    } catch (err) {
        console.error("getDoctorListPaginate error:", err);
        return res.status(500).json({ EC: -1, EM: "Server error", DT: {} });
    }
};
const getDoctorAvailableSchedule = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const result = await doctorService.getAvailableScheduleByDoctor(doctorId);
        return res.status(200).json(result);
    } catch (err) {
        console.error("Lỗi lấy lịch khám:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};

const createDefaultSlotsForDoctor = async (doctorId) => {
    const defaultSlots = [
        // Monday (1)
        { dayOfWeek: 1, startTime: '07:00', endTime: '08:00' },
        { dayOfWeek: 1, startTime: '08:00', endTime: '09:00' },
        { dayOfWeek: 1, startTime: '09:00', endTime: '10:00' },
        { dayOfWeek: 1, startTime: '10:00', endTime: '11:00' },
        { dayOfWeek: 1, startTime: '13:00', endTime: '14:00' },
        { dayOfWeek: 1, startTime: '14:00', endTime: '15:00' },
        { dayOfWeek: 1, startTime: '15:00', endTime: '16:00' },
        { dayOfWeek: 1, startTime: '16:00', endTime: '17:00' },

        // Tuesday (2)
        { dayOfWeek: 2, startTime: '07:00', endTime: '08:00' },
        { dayOfWeek: 2, startTime: '08:00', endTime: '09:00' },
        { dayOfWeek: 2, startTime: '09:00', endTime: '10:00' },
        { dayOfWeek: 2, startTime: '10:00', endTime: '11:00' },
        { dayOfWeek: 2, startTime: '13:00', endTime: '14:00' },
        { dayOfWeek: 2, startTime: '14:00', endTime: '15:00' },
        { dayOfWeek: 2, startTime: '15:00', endTime: '16:00' },
        { dayOfWeek: 2, startTime: '16:00', endTime: '17:00' },

        // Wednesday (3)
        { dayOfWeek: 3, startTime: '07:00', endTime: '08:00' },
        { dayOfWeek: 3, startTime: '08:00', endTime: '09:00' },
        { dayOfWeek: 3, startTime: '09:00', endTime: '10:00' },
        { dayOfWeek: 3, startTime: '10:00', endTime: '11:00' },
        { dayOfWeek: 3, startTime: '13:00', endTime: '14:00' },
        { dayOfWeek: 3, startTime: '14:00', endTime: '15:00' },
        { dayOfWeek: 3, startTime: '15:00', endTime: '16:00' },
        { dayOfWeek: 3, startTime: '16:00', endTime: '17:00' },

        // Thursday (4)
        { dayOfWeek: 4, startTime: '07:00', endTime: '08:00' },
        { dayOfWeek: 4, startTime: '08:00', endTime: '09:00' },
        { dayOfWeek: 4, startTime: '09:00', endTime: '10:00' },
        { dayOfWeek: 4, startTime: '10:00', endTime: '11:00' },
        { dayOfWeek: 4, startTime: '13:00', endTime: '14:00' },
        { dayOfWeek: 4, startTime: '14:00', endTime: '15:00' },
        { dayOfWeek: 4, startTime: '15:00', endTime: '16:00' },
        { dayOfWeek: 4, startTime: '16:00', endTime: '17:00' },

        // Friday (5)
        { dayOfWeek: 5, startTime: '07:00', endTime: '08:00' },
        { dayOfWeek: 5, startTime: '08:00', endTime: '09:00' },
        { dayOfWeek: 5, startTime: '09:00', endTime: '10:00' },
        { dayOfWeek: 5, startTime: '10:00', endTime: '11:00' },
        { dayOfWeek: 5, startTime: '13:00', endTime: '14:00' },
        { dayOfWeek: 5, startTime: '14:00', endTime: '15:00' },
        { dayOfWeek: 5, startTime: '15:00', endTime: '16:00' },
        { dayOfWeek: 5, startTime: '16:00', endTime: '17:00' },

        // Saturday (6)
        { dayOfWeek: 6, startTime: '07:00', endTime: '08:00' },
        { dayOfWeek: 6, startTime: '08:00', endTime: '09:00' },
        { dayOfWeek: 6, startTime: '09:00', endTime: '10:00' },
        { dayOfWeek: 6, startTime: '10:00', endTime: '11:00' },

    ];

    const slotWithDoctor = defaultSlots.map(slot => ({
        ...slot,
        doctorId
    }));

    await db.WorkingSlotTemplate.bulkCreate(slotWithDoctor);
};

const getAllDoctors = async (req, res) => {
    try {
        const result = await doctorService.getAllDoctors();
        return res.status(200).json(result);
    } catch (error) {
        console.error('❌ getAllDoctors error:', error);
        return res.status(500).json({ EC: 1, EM: 'Lỗi server', DT: [] });
    }
};




export default {
    createDoctorInfo,
    updateDoctorInfo,
    readDoctorGallery,
    getDoctorDetailById,
    getOtherDoctors,
    getDoctorBySpecialty,
    getDoctorList,
    getDoctorDetail,
    deleteDoctorInfo,
    getDoctorListPaginate,
    getDoctorAvailableSchedule,
    createDefaultSlotsForDoctor,
    getAllDoctors,
};