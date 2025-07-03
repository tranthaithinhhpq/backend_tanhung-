import doctorService from '../service/doctorService';
import specialtyService from '../service/specialtyService';

const createDoctorInfo = async (req, res) => {
    try {
        const data = await doctorService.createDoctorInfo(req.body);
        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: '' });
    }
};

const updateDoctorInfo = async (req, res) => {
    try {
        const userId = req.params.userId;
        const data = await doctorService.updateDoctorInfo(userId, req.body);
        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: '' });
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
    const userId = req.params.userId;
    const data = await doctorService.getDoctorDetailById(userId);
    return res.status(data.EC === 0 ? 200 : 400).json(data);
};

const getOtherDoctors = async (req, res) => {
    let userId = req.params.userId;
    let data = await doctorService.getOtherDoctors(userId);
    return res.status(200).json(data);
};

// const getDoctorBySpecialty = async (req, res) => {
//     const { specialtyId } = req.params;
//     try {
//         const doctors = await db.User.findAll({
//             where: { groupId: 2 },
//             include: [{
//                 model: db.DoctorInfo,
//                 where: { specialtyId }
//             }]
//         });
//         return res.json({ EC: 0, DT: doctors });
//     } catch (err) {
//         console.error("getDoctorBySpecialty error: ", err);
//         return res.json({ EC: 1, EM: "Lỗi server", DT: [] });
//     }
// };


const getDoctorBySpecialty = async (req, res) => {
    const { specialtyId } = req.params;
    let result = await doctorService.getDoctorBySpecialty(specialtyId);
    return res.status(200).json(result);
};


export default { createDoctorInfo, updateDoctorInfo, readDoctorGallery, getDoctorDetailById, getOtherDoctors, getDoctorBySpecialty };