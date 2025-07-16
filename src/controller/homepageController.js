import homepageService from '../service/homepageService';
import db from "../models/index.js";

const formatPath = (fullPath) => {
    if (!fullPath) return '';
    return fullPath.replace(/^src\/public/, '');
};

const getPublicHomepage = async (req, res) => {
    try {
        const data = await homepageService.getClientHomepage();
        return res.status(200).json({ EC: 0, DT: data });
    } catch (error) {
        console.error("getPublicHomepage error:", error);
        return res.status(500).json({ EC: 1, EM: "Server error" });
    }
};

const getAdminBanners = async (req, res) => {
    try {
        const data = await homepageService.getBanners();
        return res.status(200).json({ EC: 0, DT: data });
    } catch (err) {
        return res.status(500).json({ EC: 1, EM: "Failed to fetch banners" });
    }
};

const updateBanner = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await homepageService.updateBanner(id, data);
        return res.status(200).json({ EC: 0, EM: "Banner updated" });
    } catch (err) {
        return res.status(500).json({ EC: 1, EM: "Update failed" });
    }
};

//

const getBannerPaginate = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const data = await homepageService.getPaginate(page, limit);
        return res.status(200).json(data);
    } catch (e) {
        console.error('getBannerPaginate controller error:', e);
        return res.status(500).json({
            EC: -1,
            EM: 'Lỗi server khi xử lý',
            DT: []
        });
    }
};

const create = async (req, res) => {
    try {
        const { title, sortOrder } = req.body;

        let imageDesktopPath = '';
        let imagePhonePath = '';

        if (req.files?.imageDesktop?.[0]) {
            imageDesktopPath = '/images/' + req.files.imageDesktop[0].filename;
        }
        if (req.files?.imagePhone?.[0]) {
            imagePhonePath = '/images/' + req.files.imagePhone[0].filename;
        }

        const newBanner = await db.Banner.create({
            title,
            sortOrder,
            imageDesktop: imageDesktopPath,
            imagePhone: imagePhonePath,
        });

        return res.status(200).json({
            EC: 0,
            EM: 'Banner created',
            DT: newBanner
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ EC: -1, EM: 'Internal error' });
    }
};


const update = async (req, res) => {
    try {
        const bannerId = req.params.id;
        const banner = await db.Banner.findByPk(bannerId);
        if (!banner) {
            return res.status(404).json({ EC: 1, EM: 'Banner not found' });
        }

        const { title, sortOrder } = req.body;

        // Xử lý đường dẫn ảnh: chỉ lấy phần sau "/public"
        const imageDesktopPath = req.files?.imageDesktop?.[0]?.path;
        const imagePhonePath = req.files?.imagePhone?.[0]?.path;

        const formatPath = (filePath) => {
            if (!filePath) return null;
            const normalized = filePath.replace(/\\/g, '/');
            const index = normalized.indexOf('/images/');
            return index !== -1 ? normalized.substring(index) : '/' + path.basename(normalized);
        };

        await banner.update({
            title: title || banner.title,
            sortOrder: sortOrder ?? banner.sortOrder,
            imageDesktop: imageDesktopPath ? formatPath(imageDesktopPath) : banner.imageDesktop,
            imagePhone: imagePhonePath ? formatPath(imagePhonePath) : banner.imagePhone,
        });

        return res.status(200).json({
            EC: 0,
            EM: "Banner updated",
            DT: banner
        });
    } catch (error) {
        console.error("Error update banner", error);
        return res.status(500).json({
            EC: -1,
            EM: "Server error",
        });
    }
};


const remove = async (req, res) => {
    const id = req.params.id;
    const result = await homepageService.delete(id);
    return res.status(200).json(result);
};



export default {
    getPublicHomepage,
    getAdminBanners,
    updateBanner,
    getBannerPaginate,
    create,
    update,
    remove

};
