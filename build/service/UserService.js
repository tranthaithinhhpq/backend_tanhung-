"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _bluebird = _interopRequireDefault(require("bluebird"));
var _index = _interopRequireDefault(require("../models/index"));
var _sequelize = require("sequelize/lib/sequelize");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var salt = _bcryptjs["default"].genSaltSync(10);
var hashUserPassword = function hashUserPassword(userPassword) {
  var hashPassword = _bcryptjs["default"].hashSync(userPassword, salt);
  return hashPassword;
};
var createNewUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(email, password, username) {
    var hashPass, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          hashPass = hashUserPassword(password);
          _context.p = 1;
          _context.n = 2;
          return _index["default"].User.create({
            username: username,
            email: email,
            password: hashPass
          });
        case 2:
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[1, 3]]);
  }));
  return function createNewUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var getUserList = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var newUser, roles, users;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return _index["default"].User.findOne({
            where: {
              id: 1
            },
            attributes: ["id", "username", "email"],
            include: {
              model: _index["default"].Group,
              attributes: ["id", "name", "description"]
            },
            raw: true,
            nest: true
          });
        case 1:
          newUser = _context2.v;
          _context2.n = 2;
          return _index["default"].Group.findOne({
            where: {
              id: 1
            },
            include: {
              model: _index["default"].Role
            },
            raw: true,
            nest: true
          });
        case 2:
          roles = _context2.v;
          users = [];
          _context2.n = 3;
          return _index["default"].User.findAll();
        case 3:
          users = _context2.v;
          return _context2.a(2, users);
      }
    }, _callee2);
  }));
  return function getUserList() {
    return _ref2.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(userId) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return _index["default"].User.destroy({
            where: {
              id: userId
            }
          });
        case 1:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function deleteUser(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getUserById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
    var user;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          user = {};
          _context4.n = 1;
          return _index["default"].User.findOne({
            where: {
              id: id
            }
          });
        case 1:
          user = _context4.v;
          return _context4.a(2, user.get({
            plain: true
          }));
      }
    }, _callee4);
  }));
  return function getUserById(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUserInformation = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(email, username, id) {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return _index["default"].User.update({
            email: email,
            username: username
          }, {
            where: {
              id: id
            }
          });
        case 1:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return function updateUserInformation(_x6, _x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
module.exports = {
  createNewUser: createNewUser,
  getUserList: getUserList,
  deleteUser: deleteUser,
  getUserById: getUserById,
  updateUserInformation: updateUserInformation
};