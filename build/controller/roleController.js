"use strict";

var _userApiService = _interopRequireDefault(require("../service/userApiService"));
var _roleApiService = _interopRequireDefault(require("../service/roleApiService"));
var _JWTAction = require("../middleware/JWTAction");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// 👈

var read = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _roleApiService["default"].getAllRoles();
        case 1:
          data = _context.v;
          return _context.a(2, res.status(200).json({
            EM: data.EM,
            // error message
            EC: data.EC,
            // error code
            DT: data.DT // data (roles list)
          }));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.log(_t);
          return _context.a(2, res.status(500).json({
            EM: "Server error",
            EC: -1,
            DT: ''
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function read(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var create = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _roleApiService["default"].createNewRoles(req.body);
        case 1:
          data = _context2.v;
          return _context2.a(2, res.status(200).json({
            EM: data.EM,
            // error message
            EC: data.EC,
            // error code
            DT: data.DT // data
          }));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.log("Error in getAllRoles:", _t2);
          return _context2.a(2, res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: []
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
    var data, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _userApiService["default"].updateUser(req.body);
        case 1:
          data = _context3.v;
          return _context3.a(2, res.status(200).json({
            EM: data.EM,
            // Error Message - Thông báo lỗi hoặc thành công
            EC: data.EC,
            // Error Code - Mã lỗi
            DT: data.DT // Data - Dữ liệu trả về (nếu có)
          }));
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.log(_t3);
          return _context3.a(2, res.status(500).json({
            EM: 'error from server',
            // Thông báo lỗi server
            EC: '-1',
            // Mã lỗi hệ thống
            DT: '' // Không có dữ liệu
          }));
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function update(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var data, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _roleApiService["default"].deleteRole(req.body.id);
        case 1:
          data = _context4.v;
          return _context4.a(2, res.status(200).json({
            EM: data.EM,
            // error message
            EC: data.EC,
            // error code
            DT: data.DT // data
          }));
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          console.log(_t4);
          return _context4.a(2, res.status(500).json({
            EM: 'error from server',
            // error message
            EC: '-1',
            // error code
            DT: '' // data
          }));
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function remove(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getRoleByGroup = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, data, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          id = req.params.groupId;
          _context5.n = 1;
          return _roleApiService["default"].getRoleByGroup(id);
        case 1:
          data = _context5.v;
          return _context5.a(2, res.status(200).json({
            EM: data.EM,
            // error message
            EC: data.EC,
            // error code
            DT: data.DT // data
          }));
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.log(_t5);
          return _context5.a(2, res.status(500).json({
            EM: 'error from server',
            // error message
            EC: '-1',
            // error code
            DT: '' // data
          }));
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function getRoleByGroup(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var assignRoleToGroup = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var data, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _roleApiService["default"].assignRoleToGroup(req.body.data);
        case 1:
          data = _context6.v;
          return _context6.a(2, res.status(200).json({
            EM: data.EM,
            // error message
            EC: data.EC,
            // error code
            DT: data.DT // data
          }));
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          console.log(_t6);
          return _context6.a(2, res.status(500).json({
            EM: 'error from server',
            // error message
            EC: '-1',
            // error code
            DT: '' // data
          }));
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function assignRoleToGroup(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var updateRole = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var data, result;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          data = req.body;
          console.log("check data: ", data);
          _context7.n = 1;
          return _roleApiService["default"].updateRole(data);
        case 1:
          result = _context7.v;
          return _context7.a(2, res.status(200).json(result));
      }
    }, _callee7);
  }));
  return function updateRole(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  read: read,
  create: create,
  update: update,
  remove: remove,
  getRoleByGroup: getRoleByGroup,
  assignRoleToGroup: assignRoleToGroup,
  updateRole: updateRole
};