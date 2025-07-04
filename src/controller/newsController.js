import newsService from "../service/newsService";

const getCategories = async (req, res) => {
    try {
        const categories = await newsService.getAllCategories();
        res.json({ EC: 0, DT: categories });
    } catch (err) {
        console.error(err);
        res.json({ EC: 1, EM: "Lỗi server" });
    }
};

const create = async (req, res) => {
    try {
        const imagePath = req.file?.path;
        await newsService.createArticle(req.body, imagePath);
        res.json({ EC: 0, EM: "Tạo bài viết thành công" });
    } catch (err) {
        console.error(err);
        res.json({ EC: 1, EM: "Lỗi tạo bài viết" });
    }
};

const getList = async (req, res) => {
    try {
        const { rows, count } = await newsService.getArticles(req.query);
        res.json({ EC: 0, DT: rows, total: count });
    } catch (err) {
        console.error(err);
        res.json({ EC: 1, EM: "Lỗi server" });
    }
};

const getDetail = async (req, res) => {
    try {
        const article = await newsService.getArticleById(req.params.id);
        res.json({ EC: 0, DT: article });
    } catch (err) {
        console.error(err);
        res.json({ EC: 1, EM: "Lỗi server" });
    }
};

const update = async (req, res) => {
    try {
        const imagePath = req.file?.path;
        await newsService.updateArticle(req.params.id, req.body, imagePath);
        res.json({ EC: 0, EM: "Cập nhật thành công" });
    } catch (err) {
        console.error(err);
        res.json({ EC: 1, EM: "Lỗi cập nhật" });
    }
};

const remove = async (req, res) => {
    try {
        await newsService.deleteArticle(req.params.id);
        res.json({ EC: 0, EM: "Xoá thành công" });
    } catch (err) {
        console.error(err);
        res.json({ EC: 1, EM: "Lỗi xoá" });
    }
};

export default {
    getCategories,
    create,
    getList,
    getDetail,
    update,
    remove
};
