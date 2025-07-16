import db from '../models/index.js';
const getBanners = async () => {
    return await db.Banner.findAll({ order: [['sortOrder', 'ASC']] });
};

const updateBanner = async (id, data) => {
    return await db.Banner.update(data, { where: { id } });
};

const getTextSections = async () => {
    return await db.PageTextContent.findAll({ order: [['sortOrder', 'ASC']] });
};

const getImages = async () => {
    return await db.PageImageContent.findAll({ order: [['sortOrder', 'ASC']] });
};

const getVideos = async () => {
    return await db.PageVideoContent.findAll({ order: [['sortOrder', 'ASC']] });
};

const getClientHomepage = async () => {
    const banners = await getBanners();
    const texts = await getTextSections();
    const images = await getImages();
    const videos = await getVideos();
    return { banners, texts, images, videos };
};

//

const getPaginate = async (page = 1, limit = 5) => {
    try {
        const offset = (page - 1) * limit;

        const { count, rows } = await db.Banner.findAndCountAll({
            offset,
            limit,
            order: [['sortOrder', 'ASC'], ['id', 'DESC']],
        });

        return {
            EC: 0,
            EM: 'Lấy danh sách banner thành công',
            DT: {
                totalRows: count,
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                rows,
            }
        };
    } catch (e) {
        console.error("getBannerPaginate error:", e);
        return {
            EC: -1,
            EM: 'Lỗi server khi lấy danh sách banner',
            DT: []
        };
    }
};

const create = async (data) => {
    try {
        const banner = await db.Banner.create(data);
        return { EC: 0, EM: 'Tạo thành công', DT: banner };
    } catch (err) {
        console.error("❌ createBanner:", err);
        return { EC: 1, EM: 'Lỗi tạo', DT: {} };
    }
};

const update = async (id, data) => {
    try {
        const banner = await db.Banner.findByPk(id);
        if (!banner) return { EC: 1, EM: 'Không tìm thấy', DT: {} };
        await banner.update(data);
        return { EC: 0, EM: 'Cập nhật thành công', DT: banner };
    } catch (err) {
        console.error("❌ updateBanner:", err);
        return { EC: 1, EM: 'Lỗi cập nhật', DT: {} };
    }
};

const remove = async (id) => {
    try {
        const banner = await db.Banner.findByPk(id);
        if (!banner) return { EC: 1, EM: 'Không tìm thấy', DT: {} };
        await banner.destroy();
        return { EC: 0, EM: 'Xóa thành công', DT: {} };
    } catch (err) {
        console.error("❌ deleteBanner:", err);
        return { EC: 1, EM: 'Lỗi xóa', DT: {} };
    }
};





export default {
    getBanners,
    updateBanner,
    getTextSections,
    getImages,
    getVideos,
    getClientHomepage,
    getPaginate,
    update,
    create,
    remove,

};