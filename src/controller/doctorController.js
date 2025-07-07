import doctorService from '../service/doctorService';
import specialtyService from '../service/specialtyService';

const createDoctorInfo = async (req, res) => {
    try {
        console.log("Body:", req.body);
        console.log("File:", req.file);
        const data = await doctorService.createDoctorInfo(req.body, req.file);
        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: '' });
    }
};



const updateDoctorInfo = async (req, res) => {
    try {
        console.log("Payload nhận được:", req.body);
        console.log("File nhận được:", req.file);

        const userId = req.params.userId;
        const data = await doctorService.updateDoctorInfo(userId, req.body, req.file);
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



const getDoctorBySpecialty = async (req, res) => {
    const { specialtyId } = req.params;
    let result = await doctorService.getDoctorBySpecialty(specialtyId);
    return res.status(200).json(result);
};

const getDoctorList = async (req, res) => {
    try {
        const data = await doctorService.getDoctorList();
        return res.status(200).json(data);
    } catch (err) {
        console.error('getDoctorList error:', err);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: [] });
    }
};

const getDoctorDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await doctorService.getDoctorDetail(id);
        return res.status(200).json(data);
    } catch (err) {
        console.error('getDoctorDetail error:', err);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: {} });
    }
};

const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await doctorService.deleteDoctor(id);
        return res.status(200).json(data);
    } catch (err) {
        console.error('deleteDoctor error:', err);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: {} });
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


export default { createDoctorInfo, updateDoctorInfo, readDoctorGallery, getDoctorDetailById, getOtherDoctors, getDoctorBySpecialty, getDoctorList, getDoctorDetail, deleteDoctor, getDoctorListPaginate };