"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _homepageService = _interopRequireDefault(require("../service/homepageService"));
var _index = _interopRequireDefault(require("../models/index.js"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var formatPath = function formatPath(fullPath) {
  if (!fullPath) return '';
  return fullPath.replace(/^src\/public/, '');
};
var getPublicHomepage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _homepageService["default"].getClientHomepage();
        case 1:
          data = _context.v;
          return _context.a(2, res.status(200).json({
            EC: 0,
            DT: data
          }));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error("getPublicHomepage error:", _t);
          return _context.a(2, res.status(500).json({
            EC: 1,
            EM: "Server error"
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getPublicHomepage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAdminBanners = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _homepageService["default"].getBanners();
        case 1:
          data = _context2.v;
          return _context2.a(2, res.status(200).json({
            EC: 0,
            DT: data
          }));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          return _context2.a(2, res.status(500).json({
            EC: 1,
            EM: "Failed to fetch banners"
          }));
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getAdminBanners(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateBanner = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, data, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          id = req.params.id;
          data = req.body;
          _context3.n = 1;
          return _homepageService["default"].updateBanner(id, data);
        case 1:
          return _context3.a(2, res.status(200).json({
            EC: 0,
            EM: "Banner updated"
          }));
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          return _context3.a(2, res.status(500).json({
            EC: 1,
            EM: "Update failed"
          }));
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function updateBanner(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//

var getBannerPaginate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var page, limit, data, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 5;
          _context4.n = 1;
          return _homepageService["default"].getPaginate(page, limit);
        case 1:
          data = _context4.v;
          return _context4.a(2, res.status(200).json(data));
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          console.error('getBannerPaginate controller error:', _t4);
          return _context4.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server khi xử lý',
            DT: []
          }));
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function getBannerPaginate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var create = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$files, _req$files$imageDeskt, _req$files2, _req$files2$imagePhon, _req$body, title, sortOrder, imageDesktopPath, imagePhonePath, newBanner, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _req$body = req.body, title = _req$body.title, sortOrder = _req$body.sortOrder;
          imageDesktopPath = '';
          imagePhonePath = '';
          if ((_req$files = req.files) !== null && _req$files !== void 0 && (_req$files$imageDeskt = _req$files.imageDesktop) !== null && _req$files$imageDeskt !== void 0 && _req$files$imageDeskt[0]) {
            imageDesktopPath = '/images/' + req.files.imageDesktop[0].filename;
          }
          if ((_req$files2 = req.files) !== null && _req$files2 !== void 0 && (_req$files2$imagePhon = _req$files2.imagePhone) !== null && _req$files2$imagePhon !== void 0 && _req$files2$imagePhon[0]) {
            imagePhonePath = '/images/' + req.files.imagePhone[0].filename;
          }
          _context5.n = 1;
          return _index["default"].Banner.create({
            title: title,
            sortOrder: sortOrder,
            imageDesktop: imageDesktopPath,
            imagePhone: imagePhonePath
          });
        case 1:
          newBanner = _context5.v;
          return _context5.a(2, res.status(200).json({
            EC: 0,
            EM: 'Banner created',
            DT: newBanner
          }));
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.error(_t5);
          return _context5.a(2, res.status(500).json({
            EC: -1,
            EM: 'Internal error'
          }));
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function create(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var _req$files3, _req$files3$imageDesk, _req$files4, _req$files4$imagePhon, bannerId, banner, _req$body2, title, sortOrder, imageDesktopFile, imagePhoneFile, deleteFile, _formatPath, newImageDesktopPath, newImagePhonePath, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          bannerId = req.params.id;
          _context6.n = 1;
          return _index["default"].Banner.findByPk(bannerId);
        case 1:
          banner = _context6.v;
          if (banner) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            EC: 1,
            EM: 'Banner not found'
          }));
        case 2:
          _req$body2 = req.body, title = _req$body2.title, sortOrder = _req$body2.sortOrder;
          imageDesktopFile = (_req$files3 = req.files) === null || _req$files3 === void 0 ? void 0 : (_req$files3$imageDesk = _req$files3.imageDesktop) === null || _req$files3$imageDesk === void 0 ? void 0 : _req$files3$imageDesk[0];
          imagePhoneFile = (_req$files4 = req.files) === null || _req$files4 === void 0 ? void 0 : (_req$files4$imagePhon = _req$files4.imagePhone) === null || _req$files4$imagePhon === void 0 ? void 0 : _req$files4$imagePhon[0];
          deleteFile = function deleteFile(filePath) {
            if (!filePath) return;
            var normalized = filePath.startsWith('/') ? filePath.slice(1) : filePath;
            var fullPath = _path["default"].join(__dirname, '../public', normalized);
            if (_fs["default"].existsSync(fullPath)) _fs["default"].unlinkSync(fullPath);
          };
          _formatPath = function _formatPath(filePath) {
            if (!filePath) return null;
            var normalized = filePath.replace(/\\/g, '/');
            var index = normalized.indexOf('/images/');
            return index !== -1 ? normalized.substring(index) : '/' + _path["default"].basename(normalized);
          };
          newImageDesktopPath = banner.imageDesktop;
          newImagePhonePath = banner.imagePhone;
          if (imageDesktopFile) {
            deleteFile(banner.imageDesktop); // xóa ảnh cũ
            newImageDesktopPath = _formatPath(imageDesktopFile.path);
          }
          if (imagePhoneFile) {
            deleteFile(banner.imagePhone); // xóa ảnh cũ
            newImagePhonePath = _formatPath(imagePhoneFile.path);
          }
          _context6.n = 3;
          return banner.update({
            title: title || banner.title,
            sortOrder: sortOrder !== null && sortOrder !== void 0 ? sortOrder : banner.sortOrder,
            imageDesktop: newImageDesktopPath,
            imagePhone: newImagePhonePath
          });
        case 3:
          return _context6.a(2, res.status(200).json({
            EC: 0,
            EM: "Cập nhật banner thành công",
            DT: banner
          }));
        case 4:
          _context6.p = 4;
          _t6 = _context6.v;
          console.error("Error update banner", _t6);
          return _context6.a(2, res.status(500).json({
            EC: -1,
            EM: "Lỗi server khi cập nhật banner"
          }));
      }
    }, _callee6, null, [[0, 4]]);
  }));
  return function update(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _req$body3, id, imageDesktop, imageMobile, deleteFile, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _req$body3 = req.body, id = _req$body3.id, imageDesktop = _req$body3.imageDesktop, imageMobile = _req$body3.imageMobile;
          if (id) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, res.status(400).json({
            message: "Thiếu ID banner"
          }));
        case 1:
          // Xoá file ảnh nếu tồn tại
          deleteFile = function deleteFile(filePath) {
            if (!filePath) return;
            var normalizedPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
            var fullPath = _path["default"].join(__dirname, '../public', normalizedPath);
            console.log("Đường dẫn xóa:", fullPath);
            if (_fs["default"].existsSync(fullPath)) {
              _fs["default"].unlinkSync(fullPath);
            }
          };
          if (imageDesktop) deleteFile(imageDesktop);
          if (imageMobile) deleteFile(imageMobile);

          // Xoá khỏi DB
          _context7.n = 2;
          return _index["default"].Banner.destroy({
            where: {
              id: id
            }
          });
        case 2:
          return _context7.a(2, res.status(200).json({
            EC: 0,
            EM: 'Xoá banner thành công',
            DT: null
          }));
        case 3:
          _context7.p = 3;
          _t7 = _context7.v;
          console.error("Lỗi xoá banner:", _t7);
          return _context7.a(2, res.status(500).json({
            EC: 1,
            EM: 'Xoá banner thất bại',
            DT: null
          }));
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function remove(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getPublicBanners = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var banners, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return _homepageService["default"].getBannersClient();
        case 1:
          banners = _context8.v;
          return _context8.a(2, res.status(200).json({
            EC: 0,
            DT: banners
          }));
        case 2:
          _context8.p = 2;
          _t8 = _context8.v;
          console.error("getPublicBanners error:", _t8);
          return _context8.a(2, res.status(500).json({
            EC: 1,
            EM: "Server error"
          }));
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return function getPublicBanners(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var getHomeSections = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var data, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          _context9.n = 1;
          return _homepageService["default"].getSections(['shot_1', 'shot_2']);
        case 1:
          data = _context9.v;
          return _context9.a(2, res.status(200).json({
            EC: 0,
            DT: data
          }));
        case 2:
          _context9.p = 2;
          _t9 = _context9.v;
          return _context9.a(2, res.status(500).json({
            EC: 1,
            message: 'Lỗi server'
          }));
      }
    }, _callee9, null, [[0, 2]]);
  }));
  return function getHomeSections(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
var getHomeVideos = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var videos, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _context0.n = 1;
          return _index["default"].PageVideoContent.findAll({
            where: {
              section: 'intro-video'
            },
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          videos = _context0.v;
          res.status(200).json({
            EC: 0,
            DT: videos
          });
          _context0.n = 3;
          break;
        case 2:
          _context0.p = 2;
          _t0 = _context0.v;
          console.error('Lỗi getHomeVideos:', _t0);
          res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: []
          });
        case 3:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 2]]);
  }));
  return function getHomeVideos(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();
var getStatistics = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var data, _t1;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          _context1.n = 1;
          return _homepageService["default"].getStatistics();
        case 1:
          data = _context1.v;
          return _context1.a(2, res.status(200).json(data));
        case 2:
          _context1.p = 2;
          _t1 = _context1.v;
          console.error("Error getStatistics:", _t1);
          return _context1.a(2, res.status(500).json({
            EC: -1,
            EM: "Lỗi server",
            DT: []
          }));
      }
    }, _callee1, null, [[0, 2]]);
  }));
  return function getStatistics(_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}();
var getPartnerImages = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
    var data, formattedData, _t10;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          _context10.n = 1;
          return _index["default"].PageImageContent.findAll({
            where: {
              section: 'partner'
            },
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          data = _context10.v;
          formattedData = data.map(function (item) {
            return _objectSpread(_objectSpread({}, item.toJSON()), {}, {
              image: formatPath(item.image)
            });
          });
          return _context10.a(2, res.status(200).json({
            EC: 0,
            DT: formattedData
          }));
        case 2:
          _context10.p = 2;
          _t10 = _context10.v;
          console.error('getPartnerImages error:', _t10);
          return _context10.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee10, null, [[0, 2]]);
  }));
  return function getPartnerImages(_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}();
var getLogoImage = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
    var logo, _t11;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _context11.n = 1;
          return _index["default"].PageImageContent.findOne({
            where: {
              section: 'logo'
            },
            order: [['sortOrder', 'ASC'], ['createdAt', 'ASC']]
          });
        case 1:
          logo = _context11.v;
          if (!logo) {
            _context11.n = 2;
            break;
          }
          return _context11.a(2, res.status(200).json({
            EC: 0,
            EM: 'Get logo successfully',
            DT: logo
          }));
        case 2:
          return _context11.a(2, res.status(404).json({
            EC: 1,
            EM: 'No logo found',
            DT: null
          }));
        case 3:
          _context11.n = 5;
          break;
        case 4:
          _context11.p = 4;
          _t11 = _context11.v;
          console.error('Error fetching logo:', _t11);
          return _context11.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error',
            DT: null
          }));
        case 5:
          return _context11.a(2);
      }
    }, _callee11, null, [[0, 4]]);
  }));
  return function getLogoImage(_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}();
var handleGetHomeIntroSections = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(req, res) {
    var data;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          _context12.n = 1;
          return _homepageService["default"].getHomeIntroSections();
        case 1:
          data = _context12.v;
          return _context12.a(2, res.status(200).json(data));
      }
    }, _callee12);
  }));
  return function handleGetHomeIntroSections(_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getPublicHomepage: getPublicHomepage,
  getAdminBanners: getAdminBanners,
  updateBanner: updateBanner,
  getBannerPaginate: getBannerPaginate,
  create: create,
  update: update,
  remove: remove,
  getPublicBanners: getPublicBanners,
  getHomeSections: getHomeSections,
  getHomeVideos: getHomeVideos,
  getStatistics: getStatistics,
  getPartnerImages: getPartnerImages,
  getLogoImage: getLogoImage,
  handleGetHomeIntroSections: handleGetHomeIntroSections
};