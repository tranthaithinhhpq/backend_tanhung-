"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fs = require('fs');
var path = require('path');
var imageDir = path.join(__dirname, '..', 'public', 'images');
var getAllImages = function getAllImages() {
  return new Promise(function (resolve, reject) {
    fs.readdir(imageDir, function (err, files) {
      if (err) return reject(err);
      var baseUrl = process.env.APP_IMAGE_URL || 'http://localhost:8080';
      var imageList = files.map(function (file) {
        var stats = fs.statSync(path.join(imageDir, file));
        return {
          name: file,
          url: "".concat(baseUrl, "/images/").concat(encodeURIComponent(file)),
          createdAt: stats.birthtime,
          // hoặc stats.mtime nếu muốn lấy thời gian chỉnh sửa
          sortOrder: 0 // nếu bạn có dữ liệu sortOrder riêng, cần load từ DB
        };
      });

      // Sắp xếp: sortOrder ASC, sau đó createdAt DESC
      imageList.sort(function (a, b) {
        if (a.sortOrder !== b.sortOrder) {
          return a.sortOrder - b.sortOrder; // ASC
        }
        return b.createdAt - a.createdAt; // DESC
      });
      resolve(imageList);
    });
  });
};
var deleteImage = function deleteImage(filename) {
  return new Promise(function (resolve, reject) {
    var filePath = path.join(imageDir, filename);
    fs.unlink(filePath, function (err) {
      if (err) return reject(err);
      resolve(true);
    });
  });
};
var _default = exports["default"] = {
  getAllImages: getAllImages,
  deleteImage: deleteImage
};