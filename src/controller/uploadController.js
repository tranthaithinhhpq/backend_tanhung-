import fs from 'fs';
import path from 'path';
const handleImageUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Không có file nào được upload" });
        }

        const fullPath = req.file.path; // vd: src/public/images/abc.png

        // Chuẩn hoá: chuyển \\ -> / và loại bỏ 'src/public/' để tạo path public
        const relativePath = fullPath.replace(/\\\\|\\/g, "/").replace("src/public/", "");

        return res.status(200).json({ path: relativePath });
    } catch (error) {
        console.error("Upload failed:", error);
        return res.status(500).json({ message: "Lỗi khi upload ảnh" });
    }
};



const handleDeleteFile = async (req, res) => {
    try {
        const filename = req.body.filename;
        if (!filename) {
            return res.status(400).json({ message: "Thiếu tên file cần xóa" });
        }

        const filePath = path.join(__dirname, '..', 'public', 'images', filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return res.status(200).json({ message: "Xóa file thành công" });
        } else {
            return res.status(404).json({ message: "Không tìm thấy file" });
        }
    } catch (error) {
        console.error("Xóa file thất bại:", error);
        return res.status(500).json({ message: "Lỗi server khi xóa file" });
    }
};


export default {
    handleImageUpload, handleDeleteFile
};
