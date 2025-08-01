import newsService from "../service/newsService";
import db from "../models/index.js";

// const getCategories = async (req, res) => {
//     try {
//         const categories = await newsService.getAllCategories();
//         res.json({ EC: 0, DT: categories });
//     } catch (err) {
//         console.error(err);
//         res.json({ EC: 1, EM: "Lỗi server" });
//     }
// };

const getCategories = async (req, res) => {
    try {
        const { group } = req.query;
        const categories = await newsService.getAllCategories(group);
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

// const getDetail = async (req, res) => {
//     try {
//         const article = await db.NewsArticle.findByPk(req.params.id);
//         if (!article) {
//             return res.status(404).json({ EC: 1, EM: "Không tìm thấy bài viết" });
//         }
//         return res.json({ EC: 0, DT: article });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ EC: 1, EM: "Lỗi server" });
//     }
// };

const getDetail = async (req, res) => {
    try {
        const article = await db.NewsArticle.findByPk(req.params.id, {
            include: {
                model: db.NewsCategory,
                as: 'category', // SỬA CHỖ NÀY: thêm alias đúng
                attributes: ['id', 'name', 'group']
            }
        });

        if (!article) {
            return res.status(404).json({ EC: 1, EM: "Không tìm thấy bài viết" });
        }

        return res.json({ EC: 0, DT: article });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ EC: 1, EM: "Lỗi server" });
    }
};

// const update = async (req, res) => {
//     try {
//         const imagePath = req.file?.path;
//         await newsService.updateArticle(req.params.id, req.body, imagePath);
//         res.json({ EC: 0, EM: "Cập nhật thành công" });
//     } catch (err) {
//         console.error(err);
//         res.json({ EC: 1, EM: "Lỗi cập nhật" });
//     }
// };


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

const getNewsList = async (req, res) => {
    try {

        const { page = 1, limit = 5, categoryId, keyword } = req.query;

        const data = await newsService.getNewsList(+page, +limit, categoryId, keyword);
        return res.status(200).json(data);
    } catch (err) {
        console.error("getNewsList error:", err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: [] });
    }
};

const getNewsDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await newsService.getNewsDetail(id);
        return res.status(200).json(data);
    } catch (err) {
        console.error("getNewsDetail error:", err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: {} });
    }
};

const getNewsSlider = async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 8;
        const offset = (page - 1) * limit;

        const result = await newsService.getNewsPaginate({ limit, offset });

        return res.status(200).json({ EC: 0, DT: result });
    } catch (error) {
        console.error("Error getNewsSlider:", error);
        return res.status(500).json({ EC: -1, message: "Internal server error" });
    }
};

// const getNewsPaginate = async (req, res) => {
//     try {
//         const page = +req.query.page || 1;
//         const limit = +req.query.limit || 5;
//         const offset = (page - 1) * limit;

//         const { count, rows } = await db.NewsArticle.findAndCountAll({
//             limit,
//             offset,
//             order: [['createdAt', 'DESC']]
//         });

//         return res.status(200).json({
//             EC: 0,
//             EM: 'Thành công',
//             DT: {
//                 articles: rows,
//                 totalPages: Math.ceil(count / limit)
//             }
//         });
//     } catch (e) {
//         return res.status(500).json({ EC: -1, EM: 'Server error', DT: [] });
//     }
// };

const getNewsPaginate = async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 5;
        const offset = (page - 1) * limit;

        const { count, rows } = await db.NewsArticle.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: db.NewsCategory,
                    as: 'category', // 🔥 PHẢI CÓ DÒNG NÀY
                    attributes: ['id', 'name', 'group']
                }
            ]
        });

        return res.status(200).json({
            EC: 0,
            EM: 'Thành công',
            DT: {
                articles: rows,
                totalPages: Math.ceil(count / limit)
            }
        });
    } catch (e) {
        console.error("getNewsPaginate error:", e);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: [] });
    }
};


export default {
    getCategories,
    create,
    getList,
    getDetail,
    update,
    remove,
    getNewsList,
    getNewsDetail,
    getNewsSlider,
    getNewsPaginate

};
