import homepageService from '../service/homepageService';

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

export default {
    getPublicHomepage,
    getAdminBanners,
    updateBanner,
};
