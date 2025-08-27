import newsService from "../service/newsService.js";
import db from "../models/index.js";


const getCategories = async (req, res) => {
    try {
        const where = {};
        if (req.query.group) {
            where.group = req.query.group;
        }

        const categories = await db.NewsCategory.findAll({ where });
        return res.status(200).json({ EC: 0, DT: categories });
    } catch (e) {
        console.error('getAllCategories error:', e);
        return res.status(500).json({ EC: 1, EM: 'Lỗi server', DT: [] });
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
        const { page = 1, limit = 5, categoryId, keyword, group } = req.query;

        const data = await newsService.getNewsList(+page, +limit, categoryId, keyword, group);
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


// Controller ví dụ
const getNewsSlider = async (req, res) => {
    try {
        const { group } = req.query;
        const result = await newsService.getTopNews(group); // group = 'news' hoặc 'medicine'
        return res.status(200).json(result);
    } catch (err) {
        console.error("getNewsPreview error:", err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server', DT: [] });
    }
};


const getNewsPaginate = async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 5;
        const offset = (page - 1) * limit;

        // ⬇️ các tham số filter (tùy chọn)
        const {
            categoryId,      // ví dụ: ?categoryId=2
            categoryName,    // ví dụ: ?categoryName=Tin%20nội%20bộ
            status,          // ví dụ: ?status=published | draft
            keyword,         // ví dụ: ?keyword=sot xuat huyet
        } = req.query;

        // where cho bảng NewsArticle
        const where = {};
        if (categoryId && !Number.isNaN(+categoryId)) {
            where.categoryId = +categoryId;            // ✅ lọc theo categoryId
        }
        if (status) {
            where.status = status;                     // optional
        }
        if (keyword) {
            where.title = { [Op.like]: `%${keyword}%` }; // optional: tìm theo tiêu đề
        }

        // where cho include (nếu lọc theo tên danh mục)
        const includeWhere = {};
        if (categoryName) {
            includeWhere.name = { [Op.like]: `%${categoryName}%` };
        }

        const { count, rows } = await db.NewsArticle.findAndCountAll({
            where,
            limit,
            offset,
            order: [['createdAt', 'DESC']],
            distinct: true, // tránh nhân bản count khi có include
            include: [
                {
                    model: db.NewsCategory,
                    as: 'category',
                    attributes: ['id', 'name', 'group'],
                    ...(Object.keys(includeWhere).length ? { where: includeWhere, required: true } : { required: false })
                }
            ]
        });

        return res.status(200).json({
            EC: 0,
            EM: 'Thành công',
            DT: {
                articles: rows,
                totalPages: Math.ceil(count / limit),
                totalItems: count,
                page,
                limit
            }
        });
    } catch (e) {
        console.error('getNewsPaginate error:', e);
        return res.status(500).json({ EC: -1, EM: 'Server error', DT: [] });
    }
};

const listNewsCategories = async (req, res) => {
    try {
        const { group, keyword } = req.query; // optional filters
        const data = await newsService.getAllCategoriesSearch({ group, keyword });

        return res.status(200).json({
            EC: 0,
            EM: 'Get all categories successfully',
            DT: data,
        });
    } catch (error) {
        console.error('listNewsCategories error:', error);
        return res.status(500).json({
            EC: 1,
            EM: 'Internal server error',
            DT: null,
        });
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
    getNewsPaginate,
    listNewsCategories

};
