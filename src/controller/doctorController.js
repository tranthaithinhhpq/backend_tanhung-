import doctorService from '../service/doctorService';
import specialtyService from '../service/specialtyService';
import db from '../models/index.js';


const createDoctorInfo = async (req, res) => {
    try {
        const { doctorName, specialtyId, degreeId, positionId, markdownContent } = req.body;
        const file = req.file;

        if (!doctorName || !specialtyId || !degreeId || !positionId || !file) {
            return res.status(400).json({
                EC: 1,
                EM: 'Thiếu thông tin bắt buộc',
                DT: ''
            });
        }

        const newDoctor = await db.DoctorInfo.create({
            doctorName,
            specialtyId,
            degreeId,
            positionId,
            markdownContent: markdownContent || '',
            image: `/images/${file.filename}`
        });

        return res.status(200).json({
            EC: 0,
            EM: 'Tạo bác sĩ thành công',
            DT: newDoctor
        });

    } catch (err) {
        console.error('❌ createDoctorInfo error:', err);
        return res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: ''
        });
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
        console.log("📌 getDoctorDetailById param id:", id);
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




const getDoctorBySpecialty = async (req, res) => {
    const { specialtyId } = req.params;
    let result = await doctorService.getDoctorBySpecialty(specialtyId);
    return res.status(200).json(result);
};

const getDoctorList = async (req, res) => {
    try {
        let page = +req.query.page || 1;
        let limit = +req.query.limit || 5;
        let offset = (page - 1) * limit;

        const { count, rows } = await db.DoctorInfo.findAndCountAll({
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
        const id = req.params.id;
        const data = await doctorService.deleteDoctorInfo(id);
        return res.status(200).json(data);
    } catch (e) {
        console.error("❌ deleteDoctorInfo error:", e);
        return res.status(500).json({ EC: -1, EM: "Server error", DT: {} });
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


export default { createDoctorInfo, updateDoctorInfo, readDoctorGallery, getDoctorDetailById, getOtherDoctors, getDoctorBySpecialty, getDoctorList, getDoctorDetail, deleteDoctorInfo, getDoctorListPaginate };