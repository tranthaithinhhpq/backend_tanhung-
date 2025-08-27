"use strict";

var _index = _interopRequireDefault(require("../models/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createNewRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(roles) {
    var currentRoles, persists, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _index["default"].Role.findAll({
            attributes: ['url', 'description'],
            raw: true
          });
        case 1:
          currentRoles = _context.v;
          // Lọc ra các role chưa tồn tại trong DB
          persists = roles.filter(function (_ref2) {
            var url1 = _ref2.url;
            return !currentRoles.some(function (_ref3) {
              var url2 = _ref3.url;
              return url1 === url2;
            });
          }); // Nếu không có role mới nào để tạo
          if (!(persists.length === 0)) {
            _context.n = 2;
            break;
          }
          return _context.a(2, {
            EM: 'Nothing to create ...',
            EC: 0,
            DT: []
          });
        case 2:
          _context.n = 3;
          return _index["default"].Role.bulkCreate(persists);
        case 3:
          return _context.a(2, {
            EM: "Create roles succeeds: ".concat(persists.length, " roles..."),
            EC: 0,
            DT: []
          });
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.log("Error in createNewRoles:", _t);
          return _context.a(2, {
            EM: 'Something went wrong',
            EC: -1,
            DT: []
          });
      }
    }, _callee, null, [[0, 4]]);
  }));
  return function createNewRoles(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAllRoles = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _index["default"].Role.findAll({
            order: [['id', 'ASC']]
          });
        case 1:
          data = _context2.v;
          return _context2.a(2, {
            EM: 'Get all Roles succeeds',
            EC: 0,
            DT: data
          });
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.log(_t2);
          return _context2.a(2, {
            EM: 'Something went wrong with services',
            EC: 1,
            DT: []
          });
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getAllRoles() {
    return _ref4.apply(this, arguments);
  };
}();
var deleteRole = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
    var role, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _index["default"].Role.findOne({
            where: {
              id: id
            }
          });
        case 1:
          role = _context3.v;
          if (!role) {
            _context3.n = 2;
            break;
          }
          _context3.n = 2;
          return role.destroy();
        case 2:
          return _context3.a(2, {
            EM: 'Delete Roles succeeds',
            EC: 0,
            DT: []
          });
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          console.log(_t3);
          return _context3.a(2, {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
          });
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return function deleteRole(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
var getRoleByGroup = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
    var roles, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          if (id) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, {
            EM: 'Not found any roles',
            EC: 0,
            DT: []
          });
        case 1:
          _context4.n = 2;
          return _index["default"].Group.findOne({
            where: {
              id: id
            },
            attributes: ["id", "name", "description"],
            include: {
              model: _index["default"].Role,
              attributes: ["id", "url", "description"],
              through: {
                attributes: []
              } // loại bỏ thuộc tính trung gian
            }
          });
        case 2:
          roles = _context4.v;
          return _context4.a(2, {
            EM: 'Get roles by group succeeds',
            EC: 0,
            DT: roles
          });
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          console.log("Error in getRoleByGroup:", _t4);
          return _context4.a(2, {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
          });
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function getRoleByGroup(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
var assignRoleToGroup = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(data) {
    var _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return _index["default"].Group_Role.destroy({
            where: {
              groupId: +data.groupId
            }
          });
        case 1:
          _context5.n = 2;
          return _index["default"].Group_Role.bulkCreate(data.groupRoles);
        case 2:
          return _context5.a(2, {
            EM: 'Assign Role to Group succeeds',
            EC: 0,
            DT: []
          });
        case 3:
          _context5.p = 3;
          _t5 = _context5.v;
          console.log(_t5);
          return _context5.a(2, {
            EM: 'Something went wrong with services',
            EC: 1,
            DT: []
          });
      }
    }, _callee5, null, [[0, 3]]);
  }));
  return function assignRoleToGroup(_x4) {
    return _ref7.apply(this, arguments);
  };
}();
var updateRole = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(data) {
    var role, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _index["default"].Role.findOne({
            where: {
              id: data.id
            }
          });
        case 1:
          role = _context6.v;
          if (!role) {
            _context6.n = 3;
            break;
          }
          role.url = data.url;
          role.description = data.description;
          _context6.n = 2;
          return role.save();
        case 2:
          return _context6.a(2, {
            EM: 'Update role success',
            EC: 0,
            DT: ''
          });
        case 3:
          return _context6.a(2, {
            EM: 'Role not found',
            EC: 1,
            DT: ''
          });
        case 4:
          _context6.n = 6;
          break;
        case 5:
          _context6.p = 5;
          _t6 = _context6.v;
          console.log('❌ Error update role:', _t6);
          return _context6.a(2, {
            EM: 'Something wrong in service...',
            EC: 1,
            DT: ''
          });
        case 6:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 5]]);
  }));
  return function updateRole(_x5) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  createNewRoles: createNewRoles,
  getAllRoles: getAllRoles,
  deleteRole: deleteRole,
  getRoleByGroup: getRoleByGroup,
  assignRoleToGroup: assignRoleToGroup,
  updateRole: updateRole
};