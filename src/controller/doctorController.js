import doctorService from '../service/doctorService';

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


export default { createDoctorInfo, updateDoctorInfo, readDoctorGallery };