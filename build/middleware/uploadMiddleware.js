"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    var uploadPath = './src/public/images';
    _fs["default"].mkdirSync(uploadPath, {
      recursive: true
    });
    cb(null, uploadPath);
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
var fileFilter = function fileFilter(req, file, cb) {
  var allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('File không hợp lệ. Chỉ cho phép ảnh và PDF.'));
  }
};
var upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: fileFilter
});
var _default = exports["default"] = upload;