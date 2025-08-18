import db from "../models/index";
import Sequelize from "sequelize";
import { Op } from "sequelize";

const buildImagePath = (filePath) => {
    if (!filePath) return '';
    return filePath.replace(/^.*?public[\\/]/, '/').replace(/\\/g, '/'); // chuẩn hóa dấu gạch chéo
};



const getAllCategories = async (group) => {
    const where = {};
    if (group) {
        where.group = group;
    }

    const categories = await db.NewsCategory.findAll({
        where, // ✅ lọc theo group nếu có
        attributes: ['id', 'name', 'description', 'group'],
        order: [['name', 'ASC']]
    });

    return categories;
};



const createArticle = async (data, imagePath) => {
    const cleanPath = buildImagePath(imagePath);

    return await db.NewsArticle.create({
        title: data.title,
        content: data.content,
        image: cleanPath,
        categoryId: data.categoryId,
        status: data.status || 'draft',
        order: data.order
    });
};

const getArticles = async (query) => {
    const { categoryId, search, page = 1, limit = 10 } = query;
    const where = {};
    if (categoryId) where.categoryId = +categoryId;
    if (search) where.title = { [Sequelize.Op.like]: `%${search}%` };

    const offset = (page - 1) * limit;
    const { rows, count } = await db.NewsArticle.findAndCountAll({
        where,
        include: [{ model: db.NewsCategory, attributes: ['name'] }],
        limit: +limit,
        offset: +offset,
        order: [
            ['order', 'ASC'],       // số order nhỏ ưu tiên
            ['createdAt', 'DESC']   // trong cùng order thì mới nhất
        ],

    });

    return { rows, count };
};

const getArticleById = async (id) => {
    return await db.NewsArticle.findOne({
        where: { id },
        include: [{ model: db.NewsCategory, attributes: ['name'] }]
    });
};

const getAllCategoriesSearch = async (filters = {}) => {
    const { group, keyword } = filters;

    const where = {};
    if (group) {
        where.group = group; // ví dụ: 'news' | 'medicine'
    }
    if (keyword) {
        // tìm theo tên hoặc mô tả
        where[Op.or] = [
            { name: { [Op.like]: `%${keyword}%` } },
            { description: { [Op.like]: `%${keyword}%` } },
        ];
    }

    const categories = await db.NewsCategory.findAll({
        where,
        attributes: ['id', 'name', 'description', 'group', 'createdAt', 'updatedAt'],
        order: [
            ['name', 'ASC'],
            ['createdAt', 'DESC'],
        ],
    });

    return categories;
};



const updateArticle = async (id, data, imagePath) => {
    const updateData = {
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
        status: data.status,
        group: data.group || "news",
        order: data.order || 0

    };

    if (imagePath) {
        updateData.image = buildImagePath(imagePath);
    }

    return await db.NewsArticle.update(updateData, { where: { id } });
};



const deleteArticle = async (id) => {
    return await db.NewsArticle.destroy({ where: { id } });
};






const getNewsList = async (page, limit, categoryId, keyword, group) => {
    const offset = (page - 1) * limit;
    const Sequelize = db.Sequelize;
    const where = {};

    if (categoryId && !isNaN(Number(categoryId))) {
        where.categoryId = Number(categoryId);
    }

    if (keyword) {
        where[Sequelize.Op.or] = [
            { title: { [Sequelize.Op.like]: `%${keyword}%` } },
            { content: { [Sequelize.Op.like]: `%${keyword}%` } }
        ];
    }

    const includeCondition = {
        model: db.NewsCategory,
        as: 'category', // ❗ alias phải đúng như trong association
        attributes: ['id', 'name', 'group']
    };

    if (group) {
        includeCondition.where = { group }; // ❗ Lọc theo group tại include
    }

    const { rows, count } = await db.NewsArticle.findAndCountAll({
        where,
        include: [includeCondition],
        limit,
        offset,
        order: [['createdAt', 'DESC']]
    });

    return {
        EC: 0,
        EM: 'Lấy danh sách thành công',
        DT: {
            news: rows,
            pagination: {
                total: count,
                page,
                limit
            }
        }
    };
};

const getTopNews = async (group = 'news') => {
    try {
        const Sequelize = db.Sequelize;

        const news = await db.NewsArticle.findAll({
            limit: 8,
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: db.NewsCategory,
                    as: 'category',
                    attributes: ['id', 'name', 'group'],
                    where: { group }, // ✅ bắt buộc đúng group
                    required: true    // ✅ INNER JOIN để lọc đúng
                }
            ]
        });

        return {
            EC: 0,
            EM: 'Lấy danh sách tin tức thành công',
            DT: { news }
        };
    } catch (err) {
        console.error('❌ getTopNews error:', err);
        return {
            EC: -1,
            EM: 'Lỗi khi lấy tin tức',
            DT: []
        };
    }
};





const getNewsDetail = async (id) => {
    const news = await db.NewsArticle.findByPk(id, {
        include: {
            model: db.NewsCategory,
            as: "category", // phải đúng alias!
            attributes: ['id', 'name', 'group']
        }
    });

    if (!news) {
        return { EC: 1, EM: 'Không tìm thấy bài viết', DT: {} };
    }

    return { EC: 0, EM: 'Lấy chi tiết thành công', DT: news };
};

const getNewsPaginate = async ({ limit, offset }) => {
    const { count, rows } = await db.NewsArticle.findAndCountAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]]
    });

    return {
        news: rows,
        pagination: {
            total: count,
            page: Math.floor(offset / limit) + 1,
            limit
        }
    };
};

const getNewsPaginateTable = async (page, limit) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await db.NewsArticle.findAndCountAll({
        limit,
        offset,
        order: [['createdAt', 'DESC']]
    });

    return {
        EC: 0,
        EM: 'Success',
        DT: {
            articles: rows,
            totalPages: Math.ceil(count / limit)
        }
    };
};



export default {
    getAllCategories,
    createArticle,
    getArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    getNewsList,
    getNewsDetail,
    getNewsPaginate,
    getNewsPaginateTable,
    getTopNews,
    getAllCategoriesSearch

};
