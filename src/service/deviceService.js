import db from '../models/index.js';
import fs from 'fs';
import path from 'path';

const buildImagePath = (filePath) => {
    if (!filePath) return '';
    return filePath.replace(/^.*?public[\\/]/, '/');
};

const readDevices = async () => {
    const data = await db.Device.findAll();
    return {
        EC: 0,
        EM: 'Thành công',
        DT: data,
    };
};

const getDeviceDetail = async (id) => {
    const device = await db.Device.findOne({ where: { id } });
    if (!device) return { EC: 1, EM: 'Not found' };
    return { EC: 0, DT: device };
};

const createDevice = async (data, file) => {
    const { name, code, category, markdownContent } = data;
    const image = file ? buildImagePath(file.path) : null;
    const device = await db.Device.create({ name, code, category, image, markdownContent });
    return { EC: 0, DT: device };
};

const updateDevice = async (id, data, file) => {
    const { name, code, category, markdownContent } = data;
    const device = await db.Device.findByPk(id);
    if (!device) return { EC: 1, EM: 'Device not found' };

    const updateData = { name, code, category, markdownContent };

    if (file) {
        // ✅ Xóa ảnh cũ nếu có
        if (device.image) {
            const oldPath = path.join(__dirname, '..', 'public', device.image.startsWith('/') ? device.image.slice(1) : device.image);
            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        // ✅ Chuẩn hóa đường dẫn trước khi lưu
        updateData.image = buildImagePath(file.path);
    }

    await device.update(updateData);
    return { EC: 0, DT: device, EM: 'Update thành công' };
};

const deleteDevice = async (id) => {
    const device = await db.Device.findByPk(id);
    if (!device) return { EC: 1, EM: 'Not found' };

    // ✅ Xoá ảnh trong thư mục nếu tồn tại
    if (device.image) {
        const imagePath = path.join(__dirname, '..', 'public', device.image.startsWith('/') ? device.image.slice(1) : device.image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }

    // ✅ Xóa bản ghi
    await device.destroy();

    return { EC: 0, EM: 'Deleted successfully' };
};

export default {
    readDevices,
    getDeviceDetail,
    createDevice,
    updateDevice,
    deleteDevice,
};