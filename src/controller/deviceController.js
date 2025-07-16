import deviceService from '../service/deviceService.js';
import db from '../models/index.js';

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

const getDevicesPaginate = async (req, res) => {
    try {
        let page = +req.query.page || 1;
        let limit = +req.query.limit || 5;
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Device.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']]
        });

        return res.status(200).json({
            EC: 0,
            EM: 'Lấy danh sách thiết bị thành công',
            DT: {
                devices: rows,
                totalPages: Math.ceil(count / limit)
            }
        });
    } catch (e) {
        console.error('getDevicesPaginate error:', e);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: [] });
    }
};

export default {
    readDevices,
    getDeviceDetail,
    createDevice,
    updateDevice,
    deleteDevice,
    getDevicesPaginate
};
