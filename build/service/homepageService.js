"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var getBanners = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return _index["default"].Banner.findAll({
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          return _context.a(2, _context.v);
      }
    }, _callee);
  }));
  return function getBanners() {
    return _ref.apply(this, arguments);
  };
}();
var updateBanner = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id, data) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return _index["default"].Banner.update(data, {
            where: {
              id: id
            }
          });
        case 1:
          return _context2.a(2, _context2.v);
      }
    }, _callee2);
  }));
  return function updateBanner(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getTextSections = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return _index["default"].PageTextContent.findAll({
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          return _context3.a(2, _context3.v);
      }
    }, _callee3);
  }));
  return function getTextSections() {
    return _ref3.apply(this, arguments);
  };
}();
var getImages = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return _index["default"].PageImageContent.findAll({
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          return _context4.a(2, _context4.v);
      }
    }, _callee4);
  }));
  return function getImages() {
    return _ref4.apply(this, arguments);
  };
}();
var getVideos = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return _index["default"].PageVideoContent.findAll({
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          return _context5.a(2, _context5.v);
      }
    }, _callee5);
  }));
  return function getVideos() {
    return _ref5.apply(this, arguments);
  };
}();
var getClientHomepage = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var banners, texts, images, videos;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return getBanners();
        case 1:
          banners = _context6.v;
          _context6.n = 2;
          return getTextSections();
        case 2:
          texts = _context6.v;
          _context6.n = 3;
          return getImages();
        case 3:
          images = _context6.v;
          _context6.n = 4;
          return getVideos();
        case 4:
          videos = _context6.v;
          return _context6.a(2, {
            banners: banners,
            texts: texts,
            images: images,
            videos: videos
          });
      }
    }, _callee6);
  }));
  return function getClientHomepage() {
    return _ref6.apply(this, arguments);
  };
}();

//

var getPaginate = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    var page,
      limit,
      offset,
      _yield$db$Banner$find,
      count,
      rows,
      _args7 = arguments,
      _t;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          page = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 1;
          limit = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 5;
          _context7.p = 1;
          offset = (page - 1) * limit;
          _context7.n = 2;
          return _index["default"].Banner.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [['sortOrder', 'ASC'], ['id', 'DESC']]
          });
        case 2:
          _yield$db$Banner$find = _context7.v;
          count = _yield$db$Banner$find.count;
          rows = _yield$db$Banner$find.rows;
          return _context7.a(2, {
            EC: 0,
            EM: 'Lấy danh sách banner thành công',
            DT: {
              totalRows: count,
              totalPages: Math.ceil(count / limit),
              currentPage: page,
              rows: rows
            }
          });
        case 3:
          _context7.p = 3;
          _t = _context7.v;
          console.error("getBannerPaginate error:", _t);
          return _context7.a(2, {
            EC: -1,
            EM: 'Lỗi server khi lấy danh sách banner',
            DT: []
          });
      }
    }, _callee7, null, [[1, 3]]);
  }));
  return function getPaginate() {
    return _ref7.apply(this, arguments);
  };
}();
var create = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(data) {
    var banner, _t2;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return _index["default"].Banner.create(data);
        case 1:
          banner = _context8.v;
          return _context8.a(2, {
            EC: 0,
            EM: 'Tạo thành công',
            DT: banner
          });
        case 2:
          _context8.p = 2;
          _t2 = _context8.v;
          console.error("❌ createBanner:", _t2);
          return _context8.a(2, {
            EC: 1,
            EM: 'Lỗi tạo',
            DT: {}
          });
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return function create(_x3) {
    return _ref8.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(id, data) {
    var banner, _t3;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          _context9.n = 1;
          return _index["default"].Banner.findByPk(id);
        case 1:
          banner = _context9.v;
          if (banner) {
            _context9.n = 2;
            break;
          }
          return _context9.a(2, {
            EC: 1,
            EM: 'Không tìm thấy',
            DT: {}
          });
        case 2:
          _context9.n = 3;
          return banner.update(data);
        case 3:
          return _context9.a(2, {
            EC: 0,
            EM: 'Cập nhật thành công',
            DT: banner
          });
        case 4:
          _context9.p = 4;
          _t3 = _context9.v;
          console.error("❌ updateBanner:", _t3);
          return _context9.a(2, {
            EC: 1,
            EM: 'Lỗi cập nhật',
            DT: {}
          });
      }
    }, _callee9, null, [[0, 4]]);
  }));
  return function update(_x4, _x5) {
    return _ref9.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(id) {
    var banner, _t4;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _context0.n = 1;
          return _index["default"].Banner.findByPk(id);
        case 1:
          banner = _context0.v;
          if (banner) {
            _context0.n = 2;
            break;
          }
          return _context0.a(2, {
            EC: 1,
            EM: 'Không tìm thấy',
            DT: {}
          });
        case 2:
          _context0.n = 3;
          return banner.destroy();
        case 3:
          return _context0.a(2, {
            EC: 0,
            EM: 'Xóa thành công',
            DT: {}
          });
        case 4:
          _context0.p = 4;
          _t4 = _context0.v;
          console.error("❌ deleteBanner:", _t4);
          return _context0.a(2, {
            EC: 1,
            EM: 'Lỗi xóa',
            DT: {}
          });
      }
    }, _callee0, null, [[0, 4]]);
  }));
  return function remove(_x6) {
    return _ref0.apply(this, arguments);
  };
}();
var getBannersClient = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
    var banners, _t5;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          _context1.n = 1;
          return _index["default"].Banner.findAll({
            order: [['sortOrder', 'ASC']],
            attributes: ['id', 'title', 'imageDesktop', 'imagePhone', 'sortOrder']
          });
        case 1:
          banners = _context1.v;
          return _context1.a(2, banners);
        case 2:
          _context1.p = 2;
          _t5 = _context1.v;
          console.error("getBanners error:", _t5);
          return _context1.a(2, []);
      }
    }, _callee1, null, [[0, 2]]);
  }));
  return function getBannersClient() {
    return _ref1.apply(this, arguments);
  };
}();
var getSections = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(sections) {
    var images, result;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _context10.n = 1;
          return _index["default"].PageImageContent.findAll({
            where: {
              section: sections
            },
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          images = _context10.v;
          result = {};
          sections.forEach(function (sec) {
            result[sec] = images.filter(function (img) {
              return img.section === sec;
            });
          });
          return _context10.a(2, result);
      }
    }, _callee10);
  }));
  return function getSections(_x7) {
    return _ref10.apply(this, arguments);
  };
}();
var getStatistics = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
    var stats;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          _context11.n = 1;
          return _index["default"].PageTextContent.findAll({
            where: {
              section: 'statistic'
            },
            order: [['sortOrder', 'ASC']],
            attributes: ['id', 'title', 'contentText']
          });
        case 1:
          stats = _context11.v;
          return _context11.a(2, {
            EC: 0,
            DT: stats
          });
      }
    }, _callee11);
  }));
  return function getStatistics() {
    return _ref11.apply(this, arguments);
  };
}();
var getHomeIntroSections = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
    var sectionsToFetch, data, grouped, _t6;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          _context12.p = 0;
          sectionsToFetch = ['home-title-1', 'home-content-1', 'home-title-2', 'home-content-2'];
          _context12.n = 1;
          return _index["default"].PageTextContent.findAll({
            where: {
              section: sectionsToFetch
            },
            order: [['sortOrder', 'ASC']]
          });
        case 1:
          data = _context12.v;
          // Gom nhóm theo section
          grouped = {};
          sectionsToFetch.forEach(function (sec) {
            return grouped[sec] = [];
          });
          data.forEach(function (item) {
            if (!grouped[item.section]) grouped[item.section] = [];
            grouped[item.section].push(item);
          });
          return _context12.a(2, {
            EC: 0,
            EM: 'OK',
            DT: grouped
          });
        case 2:
          _context12.p = 2;
          _t6 = _context12.v;
          console.error("Error in getHomeIntroSections:", _t6);
          return _context12.a(2, {
            EC: 1,
            EM: 'Lỗi server',
            DT: null
          });
      }
    }, _callee12, null, [[0, 2]]);
  }));
  return function getHomeIntroSections() {
    return _ref12.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getBanners: getBanners,
  updateBanner: updateBanner,
  getTextSections: getTextSections,
  getImages: getImages,
  getVideos: getVideos,
  getClientHomepage: getClientHomepage,
  getPaginate: getPaginate,
  update: update,
  create: create,
  remove: remove,
  getBannersClient: getBannersClient,
  getSections: getSections,
  getStatistics: getStatistics,
  getHomeIntroSections: getHomeIntroSections
};