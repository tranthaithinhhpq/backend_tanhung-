"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index.js"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Utility để xử lý đường dẫn
var formatPath = function formatPath(filePath) {
  var relative = filePath.split('public')[1];
  return relative ? relative.replace(/\\/g, '/') : filePath;
};

// GET (phân trang)
var getPaginate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var page, limit, offset, _yield$db$PageImageCo, count, rows, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 5;
          offset = (page - 1) * limit;
          _context.n = 1;
          return _index["default"].PageImageContent.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [['sortOrder', 'ASC'], ['id', 'DESC']]
          });
        case 1:
          _yield$db$PageImageCo = _context.v;
          count = _yield$db$PageImageCo.count;
          rows = _yield$db$PageImageCo.rows;
          return _context.a(2, res.status(200).json({
            EC: 0,
            EM: 'Lấy danh sách thành công',
            DT: {
              totalRows: count,
              totalPages: Math.ceil(count / limit),
              currentPage: page,
              rows: rows
            }
          }));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error("getPageImageContentPaginate:", _t);
          return _context.a(2, res.status(500).json({
            EC: -1,
            EM: "Server error",
            DT: []
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getPaginate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// POST (tạo mới)
var create = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$files, _req$files$image, _req$files$image$, _req$body, section, title, sortOrder, imagePath, newItem, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _req$body = req.body, section = _req$body.section, title = _req$body.title, sortOrder = _req$body.sortOrder;
          imagePath = (_req$files = req.files) === null || _req$files === void 0 ? void 0 : (_req$files$image = _req$files.image) === null || _req$files$image === void 0 ? void 0 : (_req$files$image$ = _req$files$image[0]) === null || _req$files$image$ === void 0 ? void 0 : _req$files$image$.path;
          _context2.n = 1;
          return _index["default"].PageImageContent.create({
            section: section,
            title: title,
            sortOrder: sortOrder || 0,
            image: formatPath(imagePath)
          });
        case 1:
          newItem = _context2.v;
          return _context2.a(2, res.status(200).json({
            EC: 0,
            EM: "Tạo thành công",
            DT: newItem
          }));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.error("createPageImageContent:", _t2);
          return _context2.a(2, res.status(500).json({
            EC: -1,
            EM: "Lỗi khi tạo",
            DT: {}
          }));
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function create(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _req$files2, _req$files2$image, id, item, _req$body2, section, title, sortOrder, imageFile, oldImagePath, imagePath, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          id = req.params.id;
          _context3.n = 1;
          return _index["default"].PageImageContent.findByPk(id);
        case 1:
          item = _context3.v;
          if (item) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            EC: 1,
            EM: 'Không tìm thấy'
          }));
        case 2:
          _req$body2 = req.body, section = _req$body2.section, title = _req$body2.title, sortOrder = _req$body2.sortOrder;
          imageFile = (_req$files2 = req.files) === null || _req$files2 === void 0 ? void 0 : (_req$files2$image = _req$files2.image) === null || _req$files2$image === void 0 ? void 0 : _req$files2$image[0]; // Nếu có ảnh mới
          if (imageFile) {
            // Xóa ảnh cũ nếu tồn tại
            if (item.image) {
              oldImagePath = _path["default"].join(__dirname, '../public', item.image.startsWith('/') ? item.image.slice(1) : item.image);
              if (_fs["default"].existsSync(oldImagePath)) {
                _fs["default"].unlinkSync(oldImagePath);
              }
            }
          }
          imagePath = imageFile ? formatPath(imageFile.path) : item.image;
          _context3.n = 3;
          return item.update({
            section: section || item.section,
            title: title || item.title,
            sortOrder: sortOrder !== null && sortOrder !== void 0 ? sortOrder : item.sortOrder,
            image: imagePath
          });
        case 3:
          return _context3.a(2, res.status(200).json({
            EC: 0,
            EM: "Cập nhật thành công",
            DT: item
          }));
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          console.error("❌ updatePageImageContent error:", _t3);
          return _context3.a(2, res.status(500).json({
            EC: -1,
            EM: "Lỗi khi cập nhật",
            DT: {}
          }));
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return function update(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// DELETE
var remove = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var id, item, imagePath, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          id = req.params.id;
          _context4.n = 1;
          return _index["default"].PageImageContent.findByPk(id);
        case 1:
          item = _context4.v;
          if (item) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            EC: 1,
            EM: 'Không tìm thấy'
          }));
        case 2:
          // Xoá file ảnh nếu có
          if (item.image) {
            imagePath = _path["default"].join(__dirname, '../public', item.image.startsWith('/') ? item.image.slice(1) : item.image);
            if (_fs["default"].existsSync(imagePath)) {
              _fs["default"].unlinkSync(imagePath);
            }
          }

          // Xoá bản ghi DB
          _context4.n = 3;
          return item.destroy();
        case 3:
          return _context4.a(2, res.status(200).json({
            EC: 0,
            EM: "Xoá thành công"
          }));
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          console.error("❌ deletePageImageContent error:", _t4);
          return _context4.a(2, res.status(500).json({
            EC: -1,
            EM: "Lỗi khi xoá"
          }));
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function remove(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getPaginate: getPaginate,
  create: create,
  update: update,
  remove: remove
};