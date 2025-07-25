import pageService from "../service/pageService";
import db from "../models/index.js";
const createPage = async (req, res) => {
    try {
        const { slug, title, section, videoYoutubeId, status, contentThumbnail } = req.body;
        const data = await pageService.create({ slug, title, section, videoYoutubeId, status, contentThumbnail });
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
        const data = await pageService.updatePage(req.params.id, req.body);
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
        console.log("section is: ", section);
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

        return res.status(200).json({ EC: 0, EM: 'Success', DT: page });
    } catch (error) {
        console.error('getPageBySlug error:', error);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: null });
    }
};


module.exports = {
    createPage,
    getAllPages,
    getPageById,
    updatePage,
    deletePage,
    getPagesBySection,
    getPageBySlug
};