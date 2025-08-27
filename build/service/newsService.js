"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index"));
var _sequelize = _interopRequireWildcard(require("sequelize"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var buildImagePath = function buildImagePath(filePath) {
  if (!filePath) return '';
  return filePath.replace(/^.*?public[\\/]/, '/').replace(/\\/g, '/'); // chuẩn hóa dấu gạch chéo
};
var getAllCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(group) {
    var where, categories;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          where = {};
          if (group) {
            where.group = group;
          }
          _context.n = 1;
          return _index["default"].NewsCategory.findAll({
            where: where,
            // ✅ lọc theo group nếu có
            attributes: ['id', 'name', 'description', 'group'],
            order: [['name', 'ASC']]
          });
        case 1:
          categories = _context.v;
          return _context.a(2, categories);
      }
    }, _callee);
  }));
  return function getAllCategories(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createArticle = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data, imagePath) {
    var cleanPath;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          cleanPath = buildImagePath(imagePath);
          _context2.n = 1;
          return _index["default"].NewsArticle.create({
            title: data.title,
            content: data.content,
            image: cleanPath,
            categoryId: data.categoryId,
            status: data.status || 'draft',
            type: data.type
          });
        case 1:
          return _context2.a(2, _context2.v);
      }
    }, _callee2);
  }));
  return function createArticle(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getArticles = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(query) {
    var categoryId, search, _query$page, page, _query$limit, limit, where, offset, _yield$db$NewsArticle, rows, count;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          categoryId = query.categoryId, search = query.search, _query$page = query.page, page = _query$page === void 0 ? 1 : _query$page, _query$limit = query.limit, limit = _query$limit === void 0 ? 10 : _query$limit;
          where = {};
          if (categoryId) where.categoryId = +categoryId;
          if (search) where.title = _defineProperty({}, _sequelize["default"].Op.like, "%".concat(search, "%"));
          offset = (page - 1) * limit;
          _context3.n = 1;
          return _index["default"].NewsArticle.findAndCountAll({
            where: where,
            include: [{
              model: _index["default"].NewsCategory,
              attributes: ['name']
            }],
            limit: +limit,
            offset: +offset,
            order: [['order', 'ASC'],
            // số order nhỏ ưu tiên
            ['createdAt', 'DESC'] // trong cùng order thì mới nhất
            ]
          });
        case 1:
          _yield$db$NewsArticle = _context3.v;
          rows = _yield$db$NewsArticle.rows;
          count = _yield$db$NewsArticle.count;
          return _context3.a(2, {
            rows: rows,
            count: count
          });
      }
    }, _callee3);
  }));
  return function getArticles(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getArticleById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return _index["default"].NewsArticle.findOne({
            where: {
              id: id
            },
            include: [{
              model: _index["default"].NewsCategory,
              attributes: ['name']
            }]
          });
        case 1:
          return _context4.a(2, _context4.v);
      }
    }, _callee4);
  }));
  return function getArticleById(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var getAllCategoriesSearch = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var filters,
      group,
      keyword,
      where,
      categories,
      _args5 = arguments;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          filters = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
          group = filters.group, keyword = filters.keyword;
          where = {};
          if (group) {
            where.group = group; // ví dụ: 'news' | 'medicine'
          }
          if (keyword) {
            // tìm theo tên hoặc mô tả
            where[_sequelize.Op.or] = [{
              name: _defineProperty({}, _sequelize.Op.like, "%".concat(keyword, "%"))
            }, {
              description: _defineProperty({}, _sequelize.Op.like, "%".concat(keyword, "%"))
            }];
          }
          _context5.n = 1;
          return _index["default"].NewsCategory.findAll({
            where: where,
            attributes: ['id', 'name', 'description', 'group', 'createdAt', 'updatedAt'],
            order: [['name', 'ASC'], ['createdAt', 'DESC']]
          });
        case 1:
          categories = _context5.v;
          return _context5.a(2, categories);
      }
    }, _callee5);
  }));
  return function getAllCategoriesSearch() {
    return _ref5.apply(this, arguments);
  };
}();
var updateArticle = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(id, data, imagePath) {
    var updateData;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          updateData = {
            title: data.title,
            content: data.content,
            categoryId: data.categoryId,
            status: data.status,
            group: data.group || "news",
            type: data.type
          };
          if (imagePath) {
            updateData.image = buildImagePath(imagePath);
          }
          _context6.n = 1;
          return _index["default"].NewsArticle.update(updateData, {
            where: {
              id: id
            }
          });
        case 1:
          return _context6.a(2, _context6.v);
      }
    }, _callee6);
  }));
  return function updateArticle(_x6, _x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteArticle = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(id) {
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.n = 1;
          return _index["default"].NewsArticle.destroy({
            where: {
              id: id
            }
          });
        case 1:
          return _context7.a(2, _context7.v);
      }
    }, _callee7);
  }));
  return function deleteArticle(_x9) {
    return _ref7.apply(this, arguments);
  };
}();

// const getNewsList = async (page, limit, categoryId, keyword, group) => {
//     const offset = (page - 1) * limit;
//     const Sequelize = db.Sequelize;
//     const where = {};

//     if (categoryId && !isNaN(Number(categoryId))) {
//         where.categoryId = Number(categoryId);
//     }

//     if (keyword) {
//         where[Sequelize.Op.or] = [
//             { title: { [Sequelize.Op.like]: `%${keyword}%` } },
//             { content: { [Sequelize.Op.like]: `%${keyword}%` } }
//         ];
//     }

//     const includeCondition = {
//         model: db.NewsCategory,
//         as: 'category', // ❗ alias phải đúng như trong association
//         attributes: ['id', 'name', 'group']
//     };

//     if (group) {
//         includeCondition.where = { group }; // ❗ Lọc theo group tại include
//     }

//     const { rows, count } = await db.NewsArticle.findAndCountAll({
//         where,
//         include: [includeCondition],
//         limit,
//         offset,
//         order: [['createdAt', 'DESC']]
//     });

//     return {
//         EC: 0,
//         EM: 'Lấy danh sách thành công',
//         DT: {
//             news: rows,
//             pagination: {
//                 total: count,
//                 page,
//                 limit
//             }
//         }
//     };
// };

var getNewsList = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(page, limit, categoryId, keyword, group) {
    var offset, Sequelize, where, includeCondition, _yield$db$NewsArticle2, rows, count;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          offset = (page - 1) * limit;
          Sequelize = _index["default"].Sequelize;
          where = {}; // Filter theo categoryId
          if (categoryId && !isNaN(Number(categoryId))) {
            where.categoryId = Number(categoryId);
          }

          // Filter theo keyword
          if (keyword) {
            where[Sequelize.Op.or] = [{
              title: _defineProperty({}, Sequelize.Op.like, "%".concat(keyword, "%"))
            }, {
              content: _defineProperty({}, Sequelize.Op.like, "%".concat(keyword, "%"))
            }];
          }

          // Include category và filter group
          includeCondition = {
            model: _index["default"].NewsCategory,
            as: 'category',
            attributes: ['id', 'name', 'group']
          };
          if (group) {
            includeCondition.where = {
              group: group
            };
          }
          _context8.n = 1;
          return _index["default"].NewsArticle.findAndCountAll({
            where: where,
            include: [includeCondition],
            limit: limit,
            offset: offset,
            order: [
            // Ưu tiên type trước
            [Sequelize.literal("CASE WHEN type = 'type' THEN 1 ELSE 2 END"), 'ASC'],
            // Sau đó sắp xếp theo ngày cập nhật mới nhất
            ['updatedAt', 'DESC']]
          });
        case 1:
          _yield$db$NewsArticle2 = _context8.v;
          rows = _yield$db$NewsArticle2.rows;
          count = _yield$db$NewsArticle2.count;
          return _context8.a(2, {
            EC: 0,
            EM: 'Lấy danh sách thành công',
            DT: {
              news: rows,
              pagination: {
                total: count,
                page: page,
                limit: limit
              }
            }
          });
      }
    }, _callee8);
  }));
  return function getNewsList(_x0, _x1, _x10, _x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();
var getTopNews = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    var group,
      _Sequelize,
      news,
      _args9 = arguments,
      _t;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          group = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : 'news';
          _context9.p = 1;
          _Sequelize = _index["default"].Sequelize;
          _context9.n = 2;
          return _index["default"].NewsArticle.findAll({
            limit: 8,
            order: [['createdAt', 'DESC']],
            include: [{
              model: _index["default"].NewsCategory,
              as: 'category',
              attributes: ['id', 'name', 'group'],
              where: {
                group: group
              },
              // ✅ bắt buộc đúng group
              required: true // ✅ INNER JOIN để lọc đúng
            }]
          });
        case 2:
          news = _context9.v;
          return _context9.a(2, {
            EC: 0,
            EM: 'Lấy danh sách tin tức thành công',
            DT: {
              news: news
            }
          });
        case 3:
          _context9.p = 3;
          _t = _context9.v;
          console.error('❌ getTopNews error:', _t);
          return _context9.a(2, {
            EC: -1,
            EM: 'Lỗi khi lấy tin tức',
            DT: []
          });
      }
    }, _callee9, null, [[1, 3]]);
  }));
  return function getTopNews() {
    return _ref9.apply(this, arguments);
  };
}();
var getNewsDetail = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(id) {
    var news;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _context0.n = 1;
          return _index["default"].NewsArticle.findByPk(id, {
            include: {
              model: _index["default"].NewsCategory,
              as: "category",
              // phải đúng alias!
              attributes: ['id', 'name', 'group']
            }
          });
        case 1:
          news = _context0.v;
          if (news) {
            _context0.n = 2;
            break;
          }
          return _context0.a(2, {
            EC: 1,
            EM: 'Không tìm thấy bài viết',
            DT: {}
          });
        case 2:
          return _context0.a(2, {
            EC: 0,
            EM: 'Lấy chi tiết thành công',
            DT: news
          });
      }
    }, _callee0);
  }));
  return function getNewsDetail(_x13) {
    return _ref0.apply(this, arguments);
  };
}();
var getNewsPaginate = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(_ref1) {
    var limit, offset, _yield$db$NewsArticle3, count, rows;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          limit = _ref1.limit, offset = _ref1.offset;
          _context1.n = 1;
          return _index["default"].NewsArticle.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [["createdAt", "DESC"]]
          });
        case 1:
          _yield$db$NewsArticle3 = _context1.v;
          count = _yield$db$NewsArticle3.count;
          rows = _yield$db$NewsArticle3.rows;
          return _context1.a(2, {
            news: rows,
            pagination: {
              total: count,
              page: Math.floor(offset / limit) + 1,
              limit: limit
            }
          });
      }
    }, _callee1);
  }));
  return function getNewsPaginate(_x14) {
    return _ref10.apply(this, arguments);
  };
}();
var getNewsPaginateTable = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(page, limit) {
    var offset, _yield$db$NewsArticle4, count, rows;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          offset = (page - 1) * limit;
          _context10.n = 1;
          return _index["default"].NewsArticle.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [['createdAt', 'DESC']]
          });
        case 1:
          _yield$db$NewsArticle4 = _context10.v;
          count = _yield$db$NewsArticle4.count;
          rows = _yield$db$NewsArticle4.rows;
          return _context10.a(2, {
            EC: 0,
            EM: 'Success',
            DT: {
              articles: rows,
              totalPages: Math.ceil(count / limit)
            }
          });
      }
    }, _callee10);
  }));
  return function getNewsPaginateTable(_x15, _x16) {
    return _ref11.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getAllCategories: getAllCategories,
  createArticle: createArticle,
  getArticles: getArticles,
  getArticleById: getArticleById,
  updateArticle: updateArticle,
  deleteArticle: deleteArticle,
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail,
  getNewsPaginate: getNewsPaginate,
  getNewsPaginateTable: getNewsPaginateTable,
  getTopNews: getTopNews,
  getAllCategoriesSearch: getAllCategoriesSearch
};