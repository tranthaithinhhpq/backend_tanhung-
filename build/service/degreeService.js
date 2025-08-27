"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var getAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return _index["default"].Degree.findAll({
            order: [['id', 'ASC']]
          });
        case 1:
          data = _context.v;
          return _context.a(2, {
            EC: 0,
            EM: 'OK',
            DT: data
          });
      }
    }, _callee);
  }));
  return function getAll() {
    return _ref.apply(this, arguments);
  };
}();
var getPaginate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var page,
      limit,
      offset,
      _yield$db$Degree$find,
      count,
      rows,
      _args2 = arguments,
      _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
          limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 10;
          _context2.p = 1;
          offset = (page - 1) * limit;
          _context2.n = 2;
          return _index["default"].Degree.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']]
          });
        case 2:
          _yield$db$Degree$find = _context2.v;
          count = _yield$db$Degree$find.count;
          rows = _yield$db$Degree$find.rows;
          return _context2.a(2, {
            EC: 0,
            EM: 'Success',
            DT: {
              totalRows: count,
              totalPages: Math.ceil(count / limit),
              currentPage: page,
              rows: rows
            }
          });
        case 3:
          _context2.p = 3;
          _t = _context2.v;
          console.error('getPaginate Degree error:', _t);
          return _context2.a(2, {
            EC: -1,
            EM: 'Server error',
            DT: {}
          });
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return function getPaginate() {
    return _ref2.apply(this, arguments);
  };
}();
var create = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(data) {
    var degree;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (data.name) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, {
            EC: 1,
            EM: 'Name is required'
          });
        case 1:
          _context3.n = 2;
          return _index["default"].Degree.create(data);
        case 2:
          degree = _context3.v;
          return _context3.a(2, {
            EC: 0,
            EM: 'Created',
            DT: degree
          });
      }
    }, _callee3);
  }));
  return function create(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id, data) {
    var degree;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return _index["default"].Degree.findByPk(id);
        case 1:
          degree = _context4.v;
          if (degree) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, {
            EC: 1,
            EM: 'Not found'
          });
        case 2:
          _context4.n = 3;
          return degree.update(data);
        case 3:
          return _context4.a(2, {
            EC: 0,
            EM: 'Updated',
            DT: degree
          });
      }
    }, _callee4);
  }));
  return function update(_x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
    var degree;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return _index["default"].Degree.findByPk(id);
        case 1:
          degree = _context5.v;
          if (degree) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, {
            EC: 1,
            EM: 'Not found'
          });
        case 2:
          _context5.n = 3;
          return degree.destroy();
        case 3:
          return _context5.a(2, {
            EC: 0,
            EM: 'Deleted'
          });
      }
    }, _callee5);
  }));
  return function remove(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getAll: getAll,
  getPaginate: getPaginate,
  create: create,
  update: update,
  remove: remove
};