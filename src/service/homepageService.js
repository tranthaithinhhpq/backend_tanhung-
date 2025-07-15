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

export default {
    getBanners,
    updateBanner,
    getTextSections,
    getImages,
    getVideos,
    getClientHomepage,
};