// const handleImageUpload = async (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ message: "Không có file nào được upload" });
//     }

//     const filePath = req.file.path.replace("src/public/", ""); // Tạo path public
//     return res.status(200).json({ path: filePath });
// };

// export default { handleImageUpload };


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

export default {
    handleImageUpload
};
