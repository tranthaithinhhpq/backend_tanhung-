
import db from '../models/index.js';
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
    return { EC: 0, EM: 'Success', DT: pages };
};

const getPageById = async (id) => {
    const page = await db.PageClient.findByPk(id);
    if (!page) return { EC: 1, EM: 'PageClient not found' };
    return { EC: 0, EM: 'Success', DT: page };
};

const updatePage = async (id, body) => {
    const page = await db.PageClient.findByPk(id);
    if (!page) return { EC: 1, EM: 'PageClient not found' };
    await page.update(body);
    return { EC: 0, EM: 'Updated', DT: page };
};

const deletePage = async (id) => {
    const page = await db.PageClient.findByPk(id);
    if (!page) return { EC: 1, EM: 'PageClient not found' };
    await page.destroy();
    return { EC: 0, EM: 'Deleted' };
};

const getPagesBySection = async (section) => {
    try {
        const pages = await db.Page.findAll({
            where: { section, status: true },
            attributes: ['slug', 'title'],
            order: [['createdAt', 'ASC']],
        });

        return {
            EC: 0,
            EM: 'Success',
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