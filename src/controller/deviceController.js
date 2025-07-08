import deviceService from '../service/deviceService.js';

const readDevices = async (req, res) => {
    try {
        const result = await deviceService.readDevices();
        return res.status(200).json(result);
    } catch {
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const getDeviceDetail = async (req, res) => {
    try {
        const result = await deviceService.getDeviceDetail(req.params.id);
        return res.status(result.EC === 0 ? 200 : 404).json(result);
    } catch {
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const createDevice = async (req, res) => {
    try {
        const result = await deviceService.createDevice(req.body, req.file);
        return res.status(201).json(result);
    } catch {
        return res.status(500).json({ EC: -1, EM: 'Failed to create device' });
    }
};

const updateDevice = async (req, res) => {
    try {
        const result = await deviceService.updateDevice(req.params.id, req.body, req.file);
        return res.status(result.EC === 0 ? 200 : 404).json(result);
    } catch {
        return res.status(500).json({ EC: -1, EM: 'Failed to update device' });
    }
};

const deleteDevice = async (req, res) => {
    try {
        const result = await deviceService.deleteDevice(req.params.id);
        return res.status(result.EC === 0 ? 200 : 404).json(result);
    } catch {
        return res.status(500).json({ EC: -1, EM: 'Failed to delete device' });
    }
};

export default {
    readDevices,
    getDeviceDetail,
    createDevice,
    updateDevice,
    deleteDevice
};
