import imageService from '../service/imageService.js';

const getImages = async (req, res) => {
    try {
        const images = await imageService.getAllImages();
        return res.status(200).json({ EC: 0, EM: 'OK', DT: images });
    } catch (err) {
        console.error("❌ getImages error:", err);
        return res.status(500).json({ EC: 1, EM: 'Lỗi lấy danh sách ảnh', DT: [] });
    }
};

const removeImage = async (req, res) => {
    try {
        const { filename } = req.params;
        await imageService.deleteImage(filename);
        return res.status(200).json({ EC: 0, EM: 'Xóa ảnh thành công' });
    } catch (err) {
        console.error("❌ removeImage error:", err);
        return res.status(500).json({ EC: 1, EM: 'Lỗi xóa ảnh' });
    }
};

export default {
    getImages,
    removeImage
};
