import pageService from "../service/pageService";
const createPage = async (req, res) => {
    try {
        const { slug, title, videoYoutubeId, status, contentThumbnail } = req.body;
        const data = await pageService.create({ slug, title, videoYoutubeId, status, contentThumbnail });
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


module.exports = {
    createPage,
    getAllPages,
    getPageById,
    updatePage,
    deletePage,
    getPagesBySection
};