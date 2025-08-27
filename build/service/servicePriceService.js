"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index.js"));
var _sequelize = require("sequelize");
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
var getAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
    var page, limit, offset, where, _yield$db$ServicePric, count, rows;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          page = parseInt(query.page) || 1;
          limit = parseInt(query.limit) || 10;
          offset = (page - 1) * limit;
          where = {};
          if (query.specialtyId) {
            where.specialtyId = query.specialtyId;
          }
          _context.n = 1;
          return _index["default"].ServicePrice.findAndCountAll({
            where: where,
            limit: limit,
            offset: offset,
            order: [['id', 'DESC']],
            include: [{
              model: _index["default"].Specialty,
              attributes: ['name']
            }]
          });
        case 1:
          _yield$db$ServicePric = _context.v;
          count = _yield$db$ServicePric.count;
          rows = _yield$db$ServicePric.rows;
          return _context.a(2, {
            EC: 0,
            EM: 'OK',
            DT: {
              records: rows,
              totalPages: Math.ceil(count / limit)
            }
          });
      }
    }, _callee);
  }));
  return function getAll(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAllGroups = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var groups, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _index["default"].ServicePrice.findAll({
            attributes: [[_index["default"].Sequelize.fn('DISTINCT', _index["default"].Sequelize.col('group')), 'group']],
            // Lấy các nhóm duy nhất
            order: [['group', 'ASC']] // Sắp xếp theo tên nhóm (hoặc bất kỳ thuộc tính nào khác)
          });
        case 1:
          groups = _context2.v;
          return _context2.a(2, {
            EC: 0,
            EM: 'OK',
            DT: groups.map(function (group) {
              return group.group;
            }) // Chỉ lấy tên nhóm (group)
          });
        case 2:
          _context2.p = 2;
          _t = _context2.v;
          console.error("getAllGroups service error:", _t);
          return _context2.a(2, {
            EC: -1,
            EM: 'Lỗi khi lấy nhóm',
            DT: []
          });
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getAllGroups() {
    return _ref2.apply(this, arguments);
  };
}();
var create = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(data) {
    var _data$isSelectable;
    var required, _i, _required, field, newService;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          // const required = ['name', 'group', 'price', 'priceInsurance', 'specialtyId'];
          required = ['name', 'price', 'priceInsurance'];
          _i = 0, _required = required;
        case 1:
          if (!(_i < _required.length)) {
            _context3.n = 3;
            break;
          }
          field = _required[_i];
          if (data[field]) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, {
            EC: 1,
            EM: "Thi\u1EBFu th\xF4ng tin b\u1EAFt bu\u1ED9c: ".concat(field)
          });
        case 2:
          _i++;
          _context3.n = 1;
          break;
        case 3:
          _context3.n = 4;
          return _index["default"].ServicePrice.create({
            name: data.name,
            group: data.group,
            price: data.price,
            priceInsurance: data.priceInsurance,
            isSelectable: (_data$isSelectable = data.isSelectable) !== null && _data$isSelectable !== void 0 ? _data$isSelectable : false,
            specialtyId: data.specialtyId
          });
        case 4:
          newService = _context3.v;
          return _context3.a(2, {
            EC: 0,
            EM: 'Tạo thành công',
            DT: newService
          });
      }
    }, _callee3);
  }));
  return function create(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id, data) {
    var service;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return _index["default"].ServicePrice.findByPk(id);
        case 1:
          service = _context4.v;
          if (service) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, {
            EC: 1,
            EM: 'Không tìm thấy dịch vụ'
          });
        case 2:
          _context4.n = 3;
          return service.update({
            name: data.name,
            group: data.group,
            price: data.price,
            priceInsurance: data.priceInsurance,
            isSelectable: data.isSelectable,
            specialtyId: data.specialtyId
          });
        case 3:
          return _context4.a(2, {
            EC: 0,
            EM: 'Cập nhật thành công',
            DT: service
          });
      }
    }, _callee4);
  }));
  return function update(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return _index["default"].ServicePrice.destroy({
            where: {
              id: id
            }
          });
        case 1:
          return _context5.a(2, {
            EC: 0,
            EM: 'Xóa thành công'
          });
      }
    }, _callee5);
  }));
  return function remove(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

// const getPaginatedServices = async (page, limit, filters) => {
//     const offset = (page - 1) * limit;

//     const where = {};

//     if (filters.group) {
//         where.group = filters.group;
//     }

//     if (filters.specialtyId) {
//         where.specialtyId = filters.specialtyId;
//     }

//     try {
//         const { count, rows } = await db.ServicePrice.findAndCountAll({
//             where,
//             limit,
//             offset,
//             order: [['id', 'DESC']], // Sắp xếp theo id giảm dần
//         });

//         return {
//             rows,
//             totalItems: count,
//             totalPages: Math.ceil(count / limit),  // Tính tổng số trang
//         };

//     } catch (err) {
//         console.error('❌ Lỗi trong getPaginatedServices:', err);
//         throw err;  // Để lỗi này tiếp tục đi lên controller để xử lý
//     }
// };

var getPaginatedServices = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(page, limit, filters) {
    var offset, where, _yield$db$ServicePric2, count, rows, servicesWithSpecialtyName, _t2;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          offset = (page - 1) * limit;
          where = {};
          if (filters.group) {
            where.group = filters.group; // Lọc theo nhóm
          }
          if (filters.specialtyId) {
            where.specialtyId = filters.specialtyId; // Lọc theo chuyên khoa
          }
          _context6.p = 1;
          _context6.n = 2;
          return _index["default"].ServicePrice.findAndCountAll({
            where: where,
            limit: limit,
            offset: offset,
            order: [['id', 'DESC']],
            // Sắp xếp theo id giảm dần
            include: [{
              model: _index["default"].Specialty,
              attributes: ['name'] // Lấy trường name của bảng Specialty
            }]
          });
        case 2:
          _yield$db$ServicePric2 = _context6.v;
          count = _yield$db$ServicePric2.count;
          rows = _yield$db$ServicePric2.rows;
          // Đảm bảo trả về dữ liệu đã liên kết với bảng Specialty
          servicesWithSpecialtyName = rows.map(function (service) {
            // Gán tên chuyên khoa vào mỗi dịch vụ
            return _objectSpread(_objectSpread({}, service.dataValues), {}, {
              Specialty: service.Specialty ? service.Specialty.name : 'N/A' // Lấy tên chuyên khoa
            });
          });
          return _context6.a(2, {
            rows: servicesWithSpecialtyName,
            totalItems: count,
            totalPages: Math.ceil(count / limit) // Tính tổng số trang
          });
        case 3:
          _context6.p = 3;
          _t2 = _context6.v;
          console.error('❌ Lỗi trong getPaginatedServices:', _t2);
          throw _t2;
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 3]]);
  }));
  return function getPaginatedServices(_x6, _x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
var getPublicList = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(_ref7) {
    var _ref7$page, page, _ref7$limit, limit, specialtyId, q, offset, where, _yield$db$ServicePric3, count, rows;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _ref7$page = _ref7.page, page = _ref7$page === void 0 ? 1 : _ref7$page, _ref7$limit = _ref7.limit, limit = _ref7$limit === void 0 ? 10 : _ref7$limit, specialtyId = _ref7.specialtyId, q = _ref7.q;
          offset = (page - 1) * limit;
          where = {};
          if (specialtyId) where.specialtyId = specialtyId;
          if (q) where.name = _defineProperty({}, _sequelize.Op.like, "%".concat(q, "%"));
          _context7.n = 1;
          return _index["default"].ServicePrice.findAndCountAll({
            where: where,
            limit: +limit,
            offset: +offset,
            order: [['name', 'ASC']],
            attributes: ['id', 'name', 'group', 'price', 'priceInsurance', 'specialtyId'],
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }]
          });
        case 1:
          _yield$db$ServicePric3 = _context7.v;
          count = _yield$db$ServicePric3.count;
          rows = _yield$db$ServicePric3.rows;
          return _context7.a(2, {
            rows: rows,
            totalPages: Math.ceil(count / limit)
          });
      }
    }, _callee7);
  }));
  return function getPublicList(_x9) {
    return _ref8.apply(this, arguments);
  };
}();
var getDrugList = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(_ref9) {
    var _ref9$page, page, _ref9$limit, limit, q, offset, where, _yield$db$DrugPrice$f, count, rows;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _ref9$page = _ref9.page, page = _ref9$page === void 0 ? 1 : _ref9$page, _ref9$limit = _ref9.limit, limit = _ref9$limit === void 0 ? 10 : _ref9$limit, q = _ref9.q;
          offset = (page - 1) * limit;
          where = {};
          if (q) where.name = _defineProperty({}, _sequelize.Op.like, "%".concat(q, "%"));
          _context8.n = 1;
          return _index["default"].DrugPrice.findAndCountAll({
            where: where,
            limit: +limit,
            offset: +offset,
            order: [['name', 'ASC']],
            attributes: ['id', 'code', 'name', 'activeIngredient', 'concentration', 'unit', 'price', 'insurancePrice']
          });
        case 1:
          _yield$db$DrugPrice$f = _context8.v;
          count = _yield$db$DrugPrice$f.count;
          rows = _yield$db$DrugPrice$f.rows;
          return _context8.a(2, {
            rows: rows,
            totalPages: Math.ceil(count / limit)
          });
      }
    }, _callee8);
  }));
  return function getDrugList(_x0) {
    return _ref0.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getPaginatedServices: getPaginatedServices,
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
  getPublicList: getPublicList,
  getDrugList: getDrugList,
  getAllGroups: getAllGroups
};