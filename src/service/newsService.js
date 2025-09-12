import db from "../models/index.js";
import Sequelize from "sequelize";
import { Op } from "sequelize";
import path from "path";
import fs from "fs";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





const buildImagePath = (filePath) => {
    if (!filePath) return '';
    return filePath.replace(/^.*?public[\\/]/, '/').replace(/\\/g, '/');
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
        authorId: data.authorId, // ✅ thêm tác giả
        status: data.status || 'draft',
        type: data.type
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



// const updateArticle = async (id, data, imagePath) => {
//     try {
//         const article = await db.NewsArticle.findByPk(id);
//         if (!article) {
//             return { EC: 1, EM: "Bài viết không tồn tại", DT: {} };
//         }

//         let newImagePath = article.image;

//         // Nếu có ảnh mới
//         if (imagePath) {
//             // Nếu có ảnh cũ thì xóa
//             if (article.image) {
//                 const normalizedPath = article.image.startsWith('/')
//                     ? article.image.slice(1)
//                     : article.image;

//                 const oldPath = path.join(process.cwd(), "src", "public", normalizedPath);
//                 try {
//                     if (fs.existsSync(oldPath)) {
//                         fs.unlinkSync(oldPath);
//                         console.log("🗑 Đã xóa ảnh cũ:", oldPath);
//                     }
//                 } catch (err) {
//                     console.error("⚠️ Lỗi khi xóa ảnh cũ:", err);
//                 }
//             }

//             // Gán ảnh mới
//             newImagePath = buildImagePath(imagePath);
//         }

//         await article.update({
//             title: data.title,
//             content: data.content,
//             categoryId: data.categoryId,
//             status: data.status,
//             group: data.group || "news",
//             type: data.type,
//             image: newImagePath
//         });

//         return { EC: 0, EM: "Cập nhật thành công", DT: {} };
//     } catch (err) {
//         console.error("❌ updateArticle error:", err);
//         return { EC: 1, EM: "Lỗi cập nhật", DT: {} };
//     }
// };


const updateArticle = async (id, data, imagePath) => {
    try {
        const article = await db.NewsArticle.findByPk(id);
        if (!article) {
            return { EC: 1, EM: "Bài viết không tồn tại", DT: {} };
        }

        let newImagePath = article.image;

        // Nếu có ảnh mới
        if (imagePath) {
            // Xóa ảnh cũ nếu tồn tại
            if (article.image) {
                const normalizedPath = article.image.startsWith("/")
                    ? article.image.slice(1)
                    : article.image;

                const oldPath = path.join(process.cwd(), "src", "public", normalizedPath);
                try {
                    if (fs.existsSync(oldPath)) {
                        fs.unlinkSync(oldPath);
                        console.log("🗑 Đã xóa ảnh cũ:", oldPath);
                    }
                } catch (err) {
                    console.error("⚠️ Lỗi khi xóa ảnh cũ:", err);
                }
            }

            // Gán ảnh mới
            newImagePath = buildImagePath(imagePath);
        }

        // ✅ Cập nhật bài viết
        await article.update({
            title: data.title,
            content: data.content,
            categoryId: data.categoryId,
            authorId: data.authorId,   // 👉 thêm tác giả
            status: data.status,
            group: data.group || "news",
            type: data.type,
            image: newImagePath,
        });

        return { EC: 0, EM: "Cập nhật thành công", DT: {} };
    } catch (err) {
        console.error("❌ updateArticle error:", err);
        return { EC: 1, EM: "Lỗi cập nhật", DT: {} };
    }
};



const deleteArticle = async (id) => {
    try {
        const article = await db.NewsArticle.findByPk(id);
        if (!article) {
            return { EC: 1, EM: 'Bài viết không tồn tại', DT: null };
        }

        // Xóa ảnh trong public nếu có
        if (article.image) {
            const normalizedPath = article.image.startsWith('/')
                ? article.image.slice(1)
                : article.image;

            const imagePath = path.join(__dirname, '../public', normalizedPath);

            try {
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                    console.log("🗑 Đã xoá ảnh tin tức:", imagePath);
                }
            } catch (err) {
                console.error("⚠️ Lỗi khi xoá ảnh:", err);
            }
        }

        // Xóa record trong DB
        await article.destroy();

        return { EC: 0, EM: 'Xóa bài viết và ảnh thành công', DT: null };
    } catch (err) {
        console.error("❌ deleteArticle error:", err);
        return { EC: 1, EM: 'Lỗi khi xóa bài viết', DT: null };
    }
};




// const getNewsList = async (page, limit, categoryId, keyword, group) => {
//     const offset = (page - 1) * limit;
//     const Sequelize = db.Sequelize;
//     const where = {};

//     if (categoryId && !isNaN(Number(categoryId))) {
//         where.categoryId = Number(categoryId);
//     }

//     if (keyword) {
//         where[Sequelize.Op.or] = [
//             { title: { [Sequelize.Op.like]: `%${keyword}%` } },
//             { content: { [Sequelize.Op.like]: `%${keyword}%` } }
//         ];
//     }

//     const includeCondition = {
//         model: db.NewsCategory,
//         as: 'category', // ❗ alias phải đúng như trong association
//         attributes: ['id', 'name', 'group']
//     };

//     if (group) {
//         includeCondition.where = { group }; // ❗ Lọc theo group tại include
//     }

//     const { rows, count } = await db.NewsArticle.findAndCountAll({
//         where,
//         include: [includeCondition],
//         limit,
//         offset,
//         order: [['createdAt', 'DESC']]
//     });

//     return {
//         EC: 0,
//         EM: 'Lấy danh sách thành công',
//         DT: {
//             news: rows,
//             pagination: {
//                 total: count,
//                 page,
//                 limit
//             }
//         }
//     };
// };


const getNewsList = async (page, limit, categoryId, keyword, group) => {
    const offset = (page - 1) * limit;
    const Sequelize = db.Sequelize;
    const where = {};

    // Filter theo categoryId
    if (categoryId && !isNaN(Number(categoryId))) {
        where.categoryId = Number(categoryId);
    }

    // Filter theo keyword
    if (keyword) {
        where[Sequelize.Op.or] = [
            { title: { [Sequelize.Op.like]: `%${keyword}%` } },
            { content: { [Sequelize.Op.like]: `%${keyword}%` } }
        ];
    }

    // Include category và filter group
    const includeCondition = {
        model: db.NewsCategory,
        as: 'category',
        attributes: ['id', 'name', 'group']
    };

    if (group) {
        includeCondition.where = { group };
    }

    const { rows, count } = await db.NewsArticle.findAndCountAll({
        where,
        include: [includeCondition],
        limit,
        offset,
        order: [
            // Ưu tiên type trước
            [Sequelize.literal("CASE WHEN type = 'type' THEN 1 ELSE 2 END"), 'ASC'],
            // Sau đó sắp xếp theo ngày cập nhật mới nhất
            ['updatedAt', 'DESC']
        ]
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
