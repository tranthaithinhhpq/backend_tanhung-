const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '..', 'public', 'images');

const getAllImages = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(imageDir, (err, files) => {
            if (err) return reject(err);

            // Base URL của server
            const baseUrl = process.env.APP_IMAGE_URL || 'http://localhost:8080';

            const imageList = files.map(file => ({
                name: file,
                url: `${baseUrl}/images/${encodeURIComponent(file)}`
            }));

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
    deleteImage
};
