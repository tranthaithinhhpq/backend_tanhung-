"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _userApiService = _interopRequireDefault(require("../service/userApiService"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
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
var db = require('../models');
var read = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _page, _limit, data, _data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          if (!(req.query.page && req.query.limit)) {
            _context.n = 2;
            break;
          }
          _page = req.query.page;
          _limit = req.query.limit;
          _context.n = 1;
          return _userApiService["default"].getUserWithPagination(+_page, +_limit);
        case 1:
          data = _context.v;
          return _context.a(2, res.status(200).json({
            EM: data.EM,
            // error message
            EC: data.EC,
            //error code
            DT: data.DT //data
          }));
        case 2:
          _context.n = 3;
          return _userApiService["default"].getAllUser(+page, +limit);
        case 3:
          _data = _context.v;
          return _context.a(2, res.status(200).json({
            EM: _data.EM,
            // error message
            EC: _data.EC,
            //error code
            DT: _data.DT //data
          }));
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.log(_t);
          return _context.a(2, res.status(500).json({
            EM: 'error from server haha',
            // error message
            EC: '-1',
            //error code
            DT: '' //data
          }));
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function read(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var readDoctor = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _userApiService["default"].getAllDoctor();
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
          console.log(_t2);
          return _context2.a(2, res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: ''
          }));
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function readDoctor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var create = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var imagePath, data, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          imagePath = req.file ? "/images/".concat(req.file.filename) : '';
          _context3.n = 1;
          return _userApiService["default"].createNewUser(_objectSpread(_objectSpread({}, req.body), {}, {
            image: imagePath
          }));
        case 1:
          data = _context3.v;
          return _context3.a(2, res.status(200).json(data));
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          return _context3.a(2, res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: ''
          }));
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function create(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// controller/userController.js
var update = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var user, imagePath, fullPath, data, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return db.User.findByPk(req.body.id);
        case 1:
          user = _context4.v;
          if (user) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            EM: 'User not found',
            EC: 1,
            DT: ''
          }));
        case 2:
          // 2. Xử lý ảnh: nếu có ảnh mới thì xoá ảnh cũ
          imagePath = req.file ? "/images/".concat(req.file.filename) : req.body.image || '';
          if (req.file && user.image && user.image !== imagePath) {
            fullPath = _path["default"].join(__dirname, '..', 'public', user.image.startsWith('/') ? user.image.slice(1) : user.image);
            if (_fs["default"].existsSync(fullPath)) {
              _fs["default"].unlinkSync(fullPath); // Xóa ảnh cũ
            }
          }

          // 3. Gọi service update
          _context4.n = 3;
          return _userApiService["default"].updateUser(_objectSpread(_objectSpread({}, req.body), {}, {
            image: imagePath
          }));
        case 3:
          data = _context4.v;
          return _context4.a(2, res.status(200).json(data));
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          console.error('❌ Update user error:', _t4);
          return _context4.a(2, res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function update(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var data, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return _userApiService["default"].deleteUser(req.body.id);
        case 1:
          data = _context5.v;
          return _context5.a(2, res.status(200).json({
            EM: data.EM,
            // error message
            EC: data.EC,
            //error code
            DT: data.DT //data
          }));
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.log(_t5);
          return _context5.a(2, res.status(500).json({
            EM: 'error from server',
            // error message
            EC: '-1',
            //error code
            DT: '' //data
          }));
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function remove(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getUserAccount = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          return _context6.a(2, res.status(200).json({
            EM: 'ok',
            // error message
            EC: 0,
            // error code
            DT: {
              access_token: req.token,
              groupWithRoles: req.user.groupWithRoles,
              email: req.user.email,
              username: req.user.username
            }
          }));
      }
    }, _callee6);
  }));
  return function getUserAccount(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getDoctorInfoByUserId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var userId, doctorInfo, _t6;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          userId = req.params.userId;
          _context7.n = 1;
          return db.DoctorInfo.findOne({
            where: {
              userId: userId
            },
            include: {
              model: db.Specialty,
              attributes: ['id', 'name']
            }
          });
        case 1:
          doctorInfo = _context7.v;
          if (doctorInfo) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, res.status(200).json({
            EM: 'Doctor info not found',
            EC: 1,
            DT: null
          }));
        case 2:
          return _context7.a(2, res.status(200).json({
            EM: 'Doctor info fetched',
            EC: 0,
            DT: doctorInfo
          }));
        case 3:
          _context7.p = 3;
          _t6 = _context7.v;
          console.log("getDoctorInfoByUserId errror", _t6);
          return _context7.a(2, res.status(500).json({
            EM: 'Server error',
            EC: -1,
            DT: null
          }));
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function getDoctorInfoByUserId(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getDoctorInfoWithAllData = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var userId, doctorInfo, specialties, degrees, positions, _t7;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          userId = req.params.userId;
          _context8.n = 1;
          return db.DoctorInfo.findOne({
            where: {
              userId: userId
            },
            include: [{
              model: db.Specialty,
              attributes: ['id', 'name']
            }, {
              model: db.Degree,
              attributes: ['id', 'name']
            }, {
              model: db.Position,
              attributes: ['id', 'name']
            }]
          });
        case 1:
          doctorInfo = _context8.v;
          _context8.n = 2;
          return db.Specialty.findAll({
            attributes: ['id', 'name']
          });
        case 2:
          specialties = _context8.v;
          _context8.n = 3;
          return db.Degree.findAll({
            attributes: ['id', 'name']
          });
        case 3:
          degrees = _context8.v;
          _context8.n = 4;
          return db.Position.findAll({
            attributes: ['id', 'name']
          });
        case 4:
          positions = _context8.v;
          return _context8.a(2, res.status(200).json({
            EM: 'Fetched doctor info + all data',
            EC: 0,
            DT: {
              doctorInfo: doctorInfo,
              specialties: specialties,
              degrees: degrees,
              positions: positions
            }
          }));
        case 5:
          _context8.p = 5;
          _t7 = _context8.v;
          console.log(_t7);
          return _context8.a(2, res.status(500).json({
            EM: 'Server error',
            EC: -1,
            DT: null
          }));
      }
    }, _callee8, null, [[0, 5]]);
  }));
  return function getDoctorInfoWithAllData(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  read: read,
  create: create,
  update: update,
  remove: remove,
  getUserAccount: getUserAccount,
  readDoctor: readDoctor,
  getDoctorInfoByUserId: getDoctorInfoByUserId,
  getDoctorInfoWithAllData: getDoctorInfoWithAllData
};