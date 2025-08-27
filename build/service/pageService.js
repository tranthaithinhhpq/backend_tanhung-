"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
    var _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _index["default"].PageClient.create(data);
        case 1:
          return _context.a(2, {
            EC: 0,
            EM: 'Tạo trang thành công'
          });
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error('❌ createPage error:', _t);
          return _context.a(2, {
            EC: 1,
            EM: 'Lỗi khi tạo trang'
          });
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function create(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAllPages = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var pages;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return _index["default"].PageClient.findAll({
            order: [['createdAt', 'DESC']]
          });
        case 1:
          pages = _context2.v;
          return _context2.a(2, {
            EC: 0,
            EM: 'Success 1',
            DT: pages
          });
      }
    }, _callee2);
  }));
  return function getAllPages() {
    return _ref2.apply(this, arguments);
  };
}();
var getPageById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
    var page;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return _index["default"].PageClient.findByPk(id);
        case 1:
          page = _context3.v;
          if (page) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, {
            EC: 1,
            EM: 'PageClient not found'
          });
        case 2:
          return _context3.a(2, {
            EC: 0,
            EM: 'Success 2',
            DT: page
          });
      }
    }, _callee3);
  }));
  return function getPageById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var updatePage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id, body, file) {
    var page, newImage, oldImagePath, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _index["default"].PageClient.findByPk(id);
        case 1:
          page = _context4.v;
          if (page) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, {
            EC: 1,
            EM: 'PageClient not found'
          });
        case 2:
          newImage = page.image;
          if (file) {
            // Xoá ảnh cũ nếu có
            if (page.image) {
              oldImagePath = _path["default"].join(__dirname, '../public', page.image.startsWith('/') ? page.image.slice(1) : page.image);
              if (_fs["default"].existsSync(oldImagePath)) {
                _fs["default"].unlinkSync(oldImagePath);
              }
            }

            // Gán ảnh mới
            newImage = "/images/".concat(file.filename);
          }
          _context4.n = 3;
          return page.update(_objectSpread(_objectSpread({}, body), {}, {
            image: newImage
          }));
        case 3:
          return _context4.a(2, {
            EC: 0,
            EM: 'Updated',
            DT: page
          });
        case 4:
          _context4.p = 4;
          _t2 = _context4.v;
          console.error('❌ updatePage error:', _t2);
          return _context4.a(2, {
            EC: 1,
            EM: 'Lỗi khi cập nhật trang'
          });
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function updatePage(_x3, _x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
var deletePage = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
    var page, imagePath, _t3;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return _index["default"].PageClient.findByPk(id);
        case 1:
          page = _context5.v;
          if (page) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, {
            EC: 1,
            EM: 'PageClient not found'
          });
        case 2:
          if (page.image) {
            imagePath = _path["default"].join(__dirname, '../public', page.image.startsWith('/') ? page.image.slice(1) : page.image);
            if (_fs["default"].existsSync(imagePath)) {
              _fs["default"].unlinkSync(imagePath);
            }
          }
          _context5.n = 3;
          return page.destroy();
        case 3:
          return _context5.a(2, {
            EC: 0,
            EM: 'Deleted'
          });
        case 4:
          _context5.p = 4;
          _t3 = _context5.v;
          console.error("❌ deletePage error:", _t3);
          return _context5.a(2, {
            EC: 1,
            EM: 'Lỗi khi xóa trang'
          });
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return function deletePage(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
var getPagesBySection = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(section) {
    var pages, _t4;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _index["default"].PageClient.findAll({
            where: {
              section: section,
              status: true
            },
            attributes: ['slug', 'title'],
            order: [['createdAt', 'ASC']]
          });
        case 1:
          pages = _context6.v;
          return _context6.a(2, {
            EC: 0,
            EM: 'Success r nha',
            DT: pages
          });
        case 2:
          _context6.p = 2;
          _t4 = _context6.v;
          console.error('getPagesBySection service error:', _t4);
          return _context6.a(2, {
            EC: -1,
            EM: 'Error fetching pages',
            DT: []
          });
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function getPagesBySection(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
module.exports = {
  create: create,
  getAllPages: getAllPages,
  getPageById: getPageById,
  updatePage: updatePage,
  deletePage: deletePage,
  getPagesBySection: getPagesBySection
};