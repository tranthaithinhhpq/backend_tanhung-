import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Tạo __dirname trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, '..', 'public', 'images');

const getAllImages = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(imageDir, (err, files) => {
            if (err) return reject(err);

            const baseUrl = process.env.APP_IMAGE_URL || 'http://localhost:8080';

            const imageList = files.map((file) => {
                const stats = fs.statSync(path.join(imageDir, file));
                return {
                    name: file,
                    url: `${baseUrl}/images/${encodeURIComponent(file)}`,
                    createdAt: stats.birthtime, // hoặc stats.mtime nếu muốn lấy thời gian chỉnh sửa
                    sortOrder: 0, // nếu có dữ liệu sortOrder riêng thì load từ DB
                };
            });

            // Sắp xếp: sortOrder ASC, sau đó createdAt DESC
            imageList.sort((a, b) => {
                if (a.sortOrder !== b.sortOrder) {
                    return a.sortOrder - b.sortOrder; // ASC
                }
                return b.createdAt - a.createdAt; // DESC
            });

            resolve(imageList);
        });
    });
};

const deleteImage = (filename) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(imageDir, filename);
        fs.unlink(filePath, (err) => {
            if (err) return reject(err);
            resolve(true);
        });
    });
};

export default {
    getAllImages,
    deleteImage,
};
