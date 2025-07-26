
import db from '../models/index.js';
import path from 'path';
import fs from 'fs';


const create = async (data) => {
    try {
        await db.PageClient.create(data);
        return { EC: 0, EM: 'Tạo trang thành công' };
    } catch (e) {
        console.error('❌ createPage error:', e);
        return { EC: 1, EM: 'Lỗi khi tạo trang' };
    }
};

const getAllPages = async () => {
    const pages = await db.PageClient.findAll({ order: [['createdAt', 'DESC']] });
    return { EC: 0, EM: 'Success 1', DT: pages };
};

const getPageById = async (id) => {
    const page = await db.PageClient.findByPk(id);
    if (!page) return { EC: 1, EM: 'PageClient not found' };
    return { EC: 0, EM: 'Success 2', DT: page };
};

const updatePage = async (id, body, file) => {
    try {
        const page = await db.PageClient.findByPk(id);
        if (!page) return { EC: 1, EM: 'PageClient not found' };

        let newImage = page.image;

        if (file) {
            // Xoá ảnh cũ nếu có
            if (page.image) {
                const oldImagePath = path.join(__dirname, '../public', page.image.startsWith('/') ? page.image.slice(1) : page.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            // Gán ảnh mới
            newImage = `/images/${file.filename}`;
        }

        await page.update({
            ...body,
            image: newImage
        });

        return { EC: 0, EM: 'Updated', DT: page };
    } catch (e) {
        console.error('❌ updatePage error:', e);
        return { EC: 1, EM: 'Lỗi khi cập nhật trang' };
    }
};

const deletePage = async (id) => {
    try {
        const page = await db.PageClient.findByPk(id);
        if (!page) return { EC: 1, EM: 'PageClient not found' };

        if (page.image) {
            const imagePath = path.join(__dirname, '../public', page.image.startsWith('/') ? page.image.slice(1) : page.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await page.destroy();
        return { EC: 0, EM: 'Deleted' };
    } catch (e) {
        console.error("❌ deletePage error:", e);
        return { EC: 1, EM: 'Lỗi khi xóa trang' };
    }
};

const getPagesBySection = async (section) => {
    try {
        const pages = await db.PageClient.findAll({
            where: { section, status: true },
            attributes: ['slug', 'title'],
            order: [['createdAt', 'ASC']],
        });

        return {
            EC: 0,
            EM: 'Success r nha',
            DT: pages
        };
    } catch (error) {
        console.error('getPagesBySection service error:', error);
        return {
            EC: -1,
            EM: 'Error fetching pages',
            DT: []
        };
    }
};

module.exports = {
    create,
    getAllPages,
    getPageById,
    updatePage,
    deletePage,
    getPagesBySection
};