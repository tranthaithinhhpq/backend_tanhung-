"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _newsService = _interopRequireDefault(require("../service/newsService"));
var _index = _interopRequireDefault(require("../models/index.js"));
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
// const getCategories = async (req, res) => {
//     try {
//         const { group } = req.query;
//         const categories = await newsService.getAllCategories(group);
//         res.json({ EC: 0, DT: categories });
//     } catch (err) {
//         console.error(err);
//         res.json({ EC: 1, EM: "Lỗi server" });
//     }
// };

// const getCategories = async (req, res) => {
//     try {
//         const group = req.query.group;
//         const categories = await newsService.getAllCategories(group); // truyền group vào
//         res.json({ EC: 0, DT: categories });
//     } catch (err) {
//         console.error(err);
//         res.json({ EC: 1, EM: "Lỗi server" });
//     }
// };

var getCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var where, categories, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          where = {};
          if (req.query.group) {
            where.group = req.query.group;
          }
          _context.n = 1;
          return _index["default"].NewsCategory.findAll({
            where: where
          });
        case 1:
          categories = _context.v;
          return _context.a(2, res.status(200).json({
            EC: 0,
            DT: categories
          }));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error('getAllCategories error:', _t);
          return _context.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getCategories(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var create = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$file, imagePath, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          imagePath = (_req$file = req.file) === null || _req$file === void 0 ? void 0 : _req$file.path;
          _context2.n = 1;
          return _newsService["default"].createArticle(req.body, imagePath);
        case 1:
          res.json({
            EC: 0,
            EM: "Tạo bài viết thành công"
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.error(_t2);
          res.json({
            EC: 1,
            EM: "Lỗi tạo bài viết"
          });
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function create(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _yield$newsService$ge, rows, count, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _newsService["default"].getArticles(req.query);
        case 1:
          _yield$newsService$ge = _context3.v;
          rows = _yield$newsService$ge.rows;
          count = _yield$newsService$ge.count;
          res.json({
            EC: 0,
            DT: rows,
            total: count
          });
          _context3.n = 3;
          break;
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error(_t3);
          res.json({
            EC: 1,
            EM: "Lỗi server"
          });
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function getList(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getDetail = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var article, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _index["default"].NewsArticle.findByPk(req.params.id, {
            include: {
              model: _index["default"].NewsCategory,
              as: 'category',
              // SỬA CHỖ NÀY: thêm alias đúng
              attributes: ['id', 'name', 'group']
            }
          });
        case 1:
          article = _context4.v;
          if (article) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            EC: 1,
            EM: "Không tìm thấy bài viết"
          }));
        case 2:
          return _context4.a(2, res.json({
            EC: 0,
            DT: article
          }));
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          console.error(_t4);
          return _context4.a(2, res.status(500).json({
            EC: 1,
            EM: "Lỗi server"
          }));
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function getDetail(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$file2, imagePath, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          imagePath = (_req$file2 = req.file) === null || _req$file2 === void 0 ? void 0 : _req$file2.path;
          _context5.n = 1;
          return _newsService["default"].updateArticle(req.params.id, req.body, imagePath);
        case 1:
          res.json({
            EC: 0,
            EM: "Cập nhật thành công"
          });
          _context5.n = 3;
          break;
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.error(_t5);
          res.json({
            EC: 1,
            EM: "Lỗi cập nhật"
          });
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function update(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _newsService["default"].deleteArticle(req.params.id);
        case 1:
          res.json({
            EC: 0,
            EM: "Xoá thành công"
          });
          _context6.n = 3;
          break;
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          console.error(_t6);
          res.json({
            EC: 1,
            EM: "Lỗi xoá"
          });
        case 3:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function remove(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getNewsList = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _req$query, _req$query$page, page, _req$query$limit, limit, categoryId, keyword, group, data, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 5 : _req$query$limit, categoryId = _req$query.categoryId, keyword = _req$query.keyword, group = _req$query.group;
          _context7.n = 1;
          return _newsService["default"].getNewsList(+page, +limit, categoryId, keyword, group);
        case 1:
          data = _context7.v;
          return _context7.a(2, res.status(200).json(data));
        case 2:
          _context7.p = 2;
          _t7 = _context7.v;
          console.error("getNewsList error:", _t7);
          return _context7.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee7, null, [[0, 2]]);
  }));
  return function getNewsList(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getNewsDetail = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var id, data, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          id = req.params.id;
          _context8.n = 1;
          return _newsService["default"].getNewsDetail(id);
        case 1:
          data = _context8.v;
          return _context8.a(2, res.status(200).json(data));
        case 2:
          _context8.p = 2;
          _t8 = _context8.v;
          console.error("getNewsDetail error:", _t8);
          return _context8.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: {}
          }));
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return function getNewsDetail(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

// Controller ví dụ
var getNewsSlider = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var group, result, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          group = req.query.group;
          _context9.n = 1;
          return _newsService["default"].getTopNews(group);
        case 1:
          result = _context9.v;
          return _context9.a(2, res.status(200).json(result));
        case 2:
          _context9.p = 2;
          _t9 = _context9.v;
          console.error("getNewsPreview error:", _t9);
          return _context9.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee9, null, [[0, 2]]);
  }));
  return function getNewsSlider(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
var getNewsPaginate = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var page, limit, offset, _req$query2, categoryId, categoryName, status, keyword, where, includeWhere, _yield$db$NewsArticle, count, rows, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          page = +req.query.page || 1;
          limit = +req.query.limit || 5;
          offset = (page - 1) * limit; // ⬇️ các tham số filter (tùy chọn)
          _req$query2 = req.query, categoryId = _req$query2.categoryId, categoryName = _req$query2.categoryName, status = _req$query2.status, keyword = _req$query2.keyword; // where cho bảng NewsArticle
          where = {};
          if (categoryId && !Number.isNaN(+categoryId)) {
            where.categoryId = +categoryId; // ✅ lọc theo categoryId
          }
          if (status) {
            where.status = status; // optional
          }
          if (keyword) {
            where.title = _defineProperty({}, Op.like, "%".concat(keyword, "%")); // optional: tìm theo tiêu đề
          }

          // where cho include (nếu lọc theo tên danh mục)
          includeWhere = {};
          if (categoryName) {
            includeWhere.name = _defineProperty({}, Op.like, "%".concat(categoryName, "%"));
          }
          _context0.n = 1;
          return _index["default"].NewsArticle.findAndCountAll({
            where: where,
            limit: limit,
            offset: offset,
            order: [['createdAt', 'DESC']],
            distinct: true,
            // tránh nhân bản count khi có include
            include: [_objectSpread({
              model: _index["default"].NewsCategory,
              as: 'category',
              attributes: ['id', 'name', 'group']
            }, Object.keys(includeWhere).length ? {
              where: includeWhere,
              required: true
            } : {
              required: false
            })]
          });
        case 1:
          _yield$db$NewsArticle = _context0.v;
          count = _yield$db$NewsArticle.count;
          rows = _yield$db$NewsArticle.rows;
          return _context0.a(2, res.status(200).json({
            EC: 0,
            EM: 'Thành công',
            DT: {
              articles: rows,
              totalPages: Math.ceil(count / limit),
              totalItems: count,
              page: page,
              limit: limit
            }
          }));
        case 2:
          _context0.p = 2;
          _t0 = _context0.v;
          console.error('getNewsPaginate error:', _t0);
          return _context0.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error',
            DT: []
          }));
      }
    }, _callee0, null, [[0, 2]]);
  }));
  return function getNewsPaginate(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();
var listNewsCategories = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var _req$query3, group, keyword, data, _t1;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          _req$query3 = req.query, group = _req$query3.group, keyword = _req$query3.keyword; // optional filters
          _context1.n = 1;
          return _newsService["default"].getAllCategoriesSearch({
            group: group,
            keyword: keyword
          });
        case 1:
          data = _context1.v;
          return _context1.a(2, res.status(200).json({
            EC: 0,
            EM: 'Get all categories successfully',
            DT: data
          }));
        case 2:
          _context1.p = 2;
          _t1 = _context1.v;
          console.error('listNewsCategories error:', _t1);
          return _context1.a(2, res.status(500).json({
            EC: 1,
            EM: 'Internal server error',
            DT: null
          }));
      }
    }, _callee1, null, [[0, 2]]);
  }));
  return function listNewsCategories(_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getCategories: getCategories,
  create: create,
  getList: getList,
  getDetail: getDetail,
  update: update,
  remove: remove,
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail,
  getNewsSlider: getNewsSlider,
  getNewsPaginate: getNewsPaginate,
  listNewsCategories: listNewsCategories
};