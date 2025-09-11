import db from "../models/index.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// format đường dẫn lưu vào DB
const formatPath = (filePath) => {
    if (!filePath) return null;
    const normalized = filePath.replace(/\\/g, '/');
    return '/images/' + path.basename(normalized); // luôn lưu dạng /images/filename.ext
};

// xoá file vật lý
const deleteFile = (filePath) => {
    if (!filePath) return;
    // filePath lưu trong DB đã có dạng: /images/abc.pdf
    const normalized = filePath.startsWith("/") ? filePath.slice(1) : filePath; // bỏ dấu /
    const fullPath = path.join(__dirname, "../public", normalized); // -> src/public/images/abc.pdf
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
        console.log("Đã xoá file:", fullPath);
    }
};

const getApplicationPaginate = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit;

        const { count, rows } = await db.Application.findAndCountAll({
            include: [{ model: db.Recruitment, attributes: ["id", "title"] }],
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
    } catch (error) {
        console.error("getApplicationPaginate error:", error);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};

const create = async (req, res) => {
    try {
        const { recruitmentId, fullName, email, phone, coverLetter, status } = req.body;

        let cvPath = "";
        if (req.file) cvPath = formatPath(req.file.path);

        const newApp = await db.Application.create({
            recruitmentId,
            fullName,
            email,
            phone,
            coverLetter,
            status,
            cvFile: cvPath,
        });

        return res.status(200).json({ EC: 0, EM: "Ứng viên đã được tạo", DT: newApp });
    } catch (error) {
        console.error("Create application error:", error);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};

const update = async (req, res) => {
    try {
        const appId = req.params.id;
        const app = await db.Application.findByPk(appId);
        if (!app) return res.status(404).json({ EC: 1, EM: "Không tìm thấy hồ sơ" });

        const { recruitmentId, fullName, email, phone, coverLetter, status } = req.body;

        let newCvPath = app.cvFile;
        if (req.file) {
            deleteFile(app.cvFile); // xoá CV cũ
            newCvPath = formatPath(req.file.path);
        }

        await app.update({
            recruitmentId,
            fullName,
            email,
            phone,
            coverLetter,
            status,
            cvFile: newCvPath,
        });

        return res.status(200).json({ EC: 0, EM: "Cập nhật thành công", DT: app });
    } catch (error) {
        console.error("Update application error:", error);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};

const remove = async (req, res) => {
    try {
        const { id, cvFile } = req.body;
        if (!id) return res.status(400).json({ EC: 1, EM: "Thiếu ID" });

        if (cvFile) deleteFile(cvFile);
        await db.Application.destroy({ where: { id } });

        return res.status(200).json({ EC: 0, EM: "Xoá hồ sơ thành công" });
    } catch (error) {
        console.error("Delete application error:", error);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};

const apply = async (req, res) => {
    try {
        const { recruitmentId, fullName, email, phone, coverLetter } = req.body;

        let cvPath = "";
        if (req.file) cvPath = '/images/' + req.file.filename;

        const newApp = await db.Application.create({
            recruitmentId,
            fullName,
            email,
            phone,
            coverLetter,
            status: "PENDING",
            cvFile: cvPath,
        });

        return res.status(200).json({ EC: 0, EM: "Ứng tuyển thành công", DT: newApp });
    } catch (error) {
        console.error("Apply error:", error);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};


export default { getApplicationPaginate, create, update, remove, apply };
