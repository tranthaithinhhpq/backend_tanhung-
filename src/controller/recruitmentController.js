import db from "../models/index.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import { Op } from "sequelize";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const formatPath = (filePath) => {
    if (!filePath) return null;
    const normalized = filePath.replace(/\\/g, '/');
    const index = normalized.indexOf('/images/');
    return index !== -1 ? normalized.substring(index) : '/' + path.basename(normalized);
};

const deleteFile = (filePath) => {
    if (!filePath) return;
    const normalized = filePath.startsWith("/") ? filePath.slice(1) : filePath;
    const fullPath = path.join(__dirname, "../public", normalized);
    if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
};

const getRecruitmentPaginate = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit;

        const { count, rows } = await db.Recruitment.findAndCountAll({
            include: [{ model: db.Specialty, attributes: ["id", "name"] }],
            limit,
            offset,
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({
            EC: 0,
            DT: {
                rows,
                totalPages: Math.ceil(count / limit),
            },
        });
    } catch (e) {
        console.error("getRecruitmentPaginate error:", e);
        return res.status(500).json({ EC: -1, EM: "Server error" });
    }
};

const create = async (req, res) => {
    try {
        const { title, departmentId, description, requirement, benefit, deadline, status } = req.body;

        let imagePath = "";
        if (req.file) imagePath = formatPath(req.file.path);

        const newRecruitment = await db.Recruitment.create({
            title,
            departmentId,
            description,
            requirement,
            benefit,
            deadline,
            status,
            image: imagePath,
        });

        return res.status(200).json({ EC: 0, EM: "Created successfully", DT: newRecruitment });
    } catch (e) {
        console.error("Create recruitment error:", e);
        return res.status(500).json({ EC: -1, EM: "Server error" });
    }
};

const update = async (req, res) => {
    try {
        const recruitmentId = req.params.id;
        const recruitment = await db.Recruitment.findByPk(recruitmentId);
        if (!recruitment) return res.status(404).json({ EC: 1, EM: "Not found" });

        const { title, departmentId, description, requirement, benefit, deadline, status } = req.body;

        let newImagePath = recruitment.image;
        if (req.file) {
            deleteFile(recruitment.image);
            newImagePath = formatPath(req.file.path);
        }

        await recruitment.update({
            title,
            departmentId,
            description,
            requirement,
            benefit,
            deadline,
            status,
            image: newImagePath,
        });

        return res.status(200).json({ EC: 0, EM: "Updated successfully", DT: recruitment });
    } catch (e) {
        console.error("Update recruitment error:", e);
        return res.status(500).json({ EC: -1, EM: "Server error" });
    }
};

const remove = async (req, res) => {
    try {
        const { id, image } = req.body;
        if (!id) return res.status(400).json({ EC: 1, EM: "Missing id" });

        if (image) deleteFile(image);
        await db.Recruitment.destroy({ where: { id } });

        return res.status(200).json({ EC: 0, EM: "Deleted successfully" });
    } catch (e) {
        console.error("Delete recruitment error:", e);
        return res.status(500).json({ EC: -1, EM: "Server error" });
    }
};



const getList = async (req, res) => {
    try {
        const { specialtyId } = req.query;

        const where = {};
        if (specialtyId) where.departmentId = specialtyId;

        const data = await db.Recruitment.findAll({
            where,
            include: [{ model: db.Specialty, attributes: ["id", "name"] }],
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({ EC: 0, DT: data });
    } catch (err) {
        console.error("getList recruitment error:", err);
        return res.status(500).json({ EC: -1, EM: "Server error" });
    }
};

export default { getRecruitmentPaginate, create, update, remove, getList };
