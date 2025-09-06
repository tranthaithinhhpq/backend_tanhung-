import pageService from "../service/pageService.js";
import db from "../models/index.js";


const createPage = async (req, res) => {
    try {
        const { slug, title, section, videoYoutubeId, status, contentThumbnail } = req.body;
        let image = req.body.image;

        // Nếu có file upload
        if (req.file) {
            image = `/images/${req.file.filename}`; // hoặc tuỳ cách bạn xử lý file
        }

        const data = await pageService.create({ slug, title, section, videoYoutubeId, image, status, contentThumbnail });
        return res.status(201).json(data);
    } catch (e) {
        console.log("loi create: ", e)
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: null });
    }
};


const getAllPages = async (req, res) => {
    try {
        const data = await pageService.getAllPages();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const getPageById = async (req, res) => {
    try {
        const data = await pageService.getPageById(req.params.id);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const updatePage = async (req, res) => {
    try {
        const data = await pageService.updatePage(req.params.id, req.body, req.file);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const deletePage = async (req, res) => {
    try {
        const data = await pageService.deletePage(req.params.id);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ EC: -1, EM: 'Server error' });
    }
};

const getPagesBySection = async (req, res) => {
    try {
        const { section } = req.query;

        if (!section) {
            return res.status(400).json({ EC: 1, EM: 'Missing section param', DT: [] });
        }

        const data = await pageService.getPagesBySection(section);
        return res.status(200).json(data);
    } catch (error) {
        console.error('getPagesBySection error:', error);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: [] });
    }
};


const getPageBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        if (!slug) {
            return res.status(400).json({ EC: 1, EM: 'Missing slug param', DT: null });
        }

        const page = await db.PageClient.findOne({
            where: { slug, status: true }
        });

        if (!page) {
            return res.status(404).json({ EC: 2, EM: 'Page not found', DT: null });
        }

        return res.status(200).json({ EC: 0, EM: 'Success q', DT: page });
    } catch (error) {
        console.error('getPageBySlug error:', error);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: null });
    }
};

const readPages = async (req, res) => {
    try {
        let { page, limit } = req.query;
        page = +page || 1;
        limit = +limit || 10;

        const offset = (page - 1) * limit;

        const { count, rows } = await db.PageClient.findAndCountAll({
            offset,
            limit,
            order: [['createdAt', 'DESC']]
        });

        return res.status(200).json({
            EC: 0,
            DT: {
                rows,
                totalPages: Math.ceil(count / limit),
                totalItems: count,
                currentPage: page
            }
        });
    } catch (err) {
        console.error("❌ Lỗi readPages:", err);
        return res.status(500).json({ EC: 1, EM: "Server error" });
    }
};


export default {
    createPage,
    getAllPages,
    getPageById,
    updatePage,
    deletePage,
    getPagesBySection,
    getPageBySlug,
    readPages
};