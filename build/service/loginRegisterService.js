"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("dotenv/config");
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _sequelize = require("sequelize");
var _JWTService = require("./JWTService.js");
var _JWTAction = require("../middleware/JWTAction");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var salt = _bcryptjs["default"].genSaltSync(10);
var hashUserPassword = function hashUserPassword(userPassword) {
  var hashedPassword = _bcryptjs["default"].hashSync(userPassword, salt);
  return hashedPassword;
};
var checkEmailExist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(userEmail) {
    var user;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return _index["default"].User.findOne({
            where: {
              email: userEmail
            }
          });
        case 1:
          user = _context.v;
          if (!user) {
            _context.n = 2;
            break;
          }
          return _context.a(2, true);
        case 2:
          return _context.a(2, false);
      }
    }, _callee);
  }));
  return function checkEmailExist(_x) {
    return _ref.apply(this, arguments);
  };
}();
var checkPhoneExist = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userPhone) {
    var user;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return _index["default"].User.findOne({
            where: {
              phone: userPhone
            }
          });
        case 1:
          user = _context2.v;
          if (!user) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, true);
        case 2:
          return _context2.a(2, false);
      }
    }, _callee2);
  }));
  return function checkPhoneExist(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var registerNewUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(rawUserData) {
    var isEmailExist, isPhoneExist, hashPassword, _t;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return checkEmailExist(rawUserData.email);
        case 1:
          isEmailExist = _context3.v;
          if (!(isEmailExist === true)) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, {
            EM: 'The email is already existed',
            EC: 1
          });
        case 2:
          _context3.n = 3;
          return checkPhoneExist(rawUserData.phone);
        case 3:
          isPhoneExist = _context3.v;
          if (!(isPhoneExist === true)) {
            _context3.n = 4;
            break;
          }
          return _context3.a(2, {
            EM: 'The phone is already existed',
            EC: 1
          });
        case 4:
          //hash user password
          hashPassword = hashUserPassword(rawUserData.password); //create new user
          _context3.n = 5;
          return _index["default"].User.create({
            email: rawUserData.email,
            username: rawUserData.username,
            password: hashPassword,
            phone: rawUserData.phone,
            groupId: 4
          });
        case 5:
          return _context3.a(2, {
            EM: 'A user is created successfully',
            EC: 0
          });
        case 6:
          _context3.p = 6;
          _t = _context3.v;
          console.log(_t);
          return _context3.a(2, {
            EM: 'Something wrong in service ...',
            EC: -2
          });
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return function registerNewUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var checkPassword = function checkPassword(inputPassword, hashPassword) {
  return _bcryptjs["default"].compareSync(inputPassword, hashPassword);
};
var handleLogin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(rawData) {
    var user, isCorrectPassword, groupWithRoles, payload, token, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _index["default"].User.findOne({
            where: _defineProperty({}, _sequelize.Op.or, [{
              email: rawData.valueLogin
            }, {
              phone: rawData.valueLogin
            }])
          });
        case 1:
          user = _context4.v;
          if (!user) {
            _context4.n = 3;
            break;
          }
          isCorrectPassword = checkPassword(rawData.password, user.password);
          if (!(isCorrectPassword === true)) {
            _context4.n = 3;
            break;
          }
          _context4.n = 2;
          return (0, _JWTService.getGroupWithRoles)(user);
        case 2:
          groupWithRoles = _context4.v;
          payload = {
            email: user.email,
            groupWithRoles: groupWithRoles,
            username: user.username
            // expiresIn: process.env.JWT_EXPIRES_IN
          };
          token = (0, _JWTAction.createJWT)(payload);
          return _context4.a(2, {
            EM: 'ok!',
            EC: 0,
            DT: {
              access_token: token,
              groupWithRoles: groupWithRoles,
              email: user.email,
              username: user.username
            }
          });
        case 3:
          return _context4.a(2, {
            EM: 'your email/phone number or password is incorrect',
            EC: 1,
            DT: ''
          });
        case 4:
          _context4.p = 4;
          _t2 = _context4.v;
          console.log(_t2);
          return _context4.a(2, {
            EM: 'Something wrongs in service duma... ',
            EC: -2
          });
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function handleLogin(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
module.exports = {
  registerNewUser: registerNewUser,
  handleLogin: handleLogin,
  hashUserPassword: hashUserPassword,
  checkEmailExist: checkEmailExist,
  checkPhoneExist: checkPhoneExist
};