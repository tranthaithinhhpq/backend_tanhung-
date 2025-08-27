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
var getOverrides = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
    var doctorId, date, where, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          doctorId = query.doctorId, date = query.date;
          where = {};
          if (doctorId) where.doctorId = doctorId;
          if (date) where.date = date; // ✅ Thêm lọc theo ngày
          _context.n = 1;
          return _index["default"].WorkingSlotOverride.findAll({
            where: where,
            include: [{
              model: _index["default"].DoctorInfo,
              attributes: ['doctorName']
            }, {
              model: _index["default"].WorkingSlotTemplate,
              attributes: ['startTime', 'endTime']
            }],
            order: [['date', 'ASC']]
          });
        case 1:
          data = _context.v;
          return _context.a(2, {
            EC: 0,
            DT: data
          });
      }
    }, _callee);
  }));
  return function getOverrides(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createOverride = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data) {
    var record;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (!(!data.doctorId || !data.date || typeof data.isActive !== 'boolean')) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, {
            EC: 1,
            EM: 'Thiếu dữ liệu bắt buộc'
          });
        case 1:
          _context2.n = 2;
          return _index["default"].WorkingSlotOverride.create({
            doctorId: data.doctorId,
            slotId: data.slotId || null,
            date: data.date,
            isActive: data.isActive,
            note: data.note || null
          });
        case 2:
          record = _context2.v;
          return _context2.a(2, {
            EC: 0,
            EM: 'Tạo thành công',
            DT: record
          });
      }
    }, _callee2);
  }));
  return function createOverride(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var updateOverride = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id, data) {
    var override;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return _index["default"].WorkingSlotOverride.findByPk(id);
        case 1:
          override = _context3.v;
          if (override) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, {
            EC: 1,
            EM: 'Không tìm thấy'
          });
        case 2:
          _context3.n = 3;
          return override.update(data);
        case 3:
          return _context3.a(2, {
            EC: 0,
            EM: 'Cập nhật thành công'
          });
      }
    }, _callee3);
  }));
  return function updateOverride(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteOverride = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return _index["default"].WorkingSlotOverride.destroy({
            where: {
              id: id
            }
          });
        case 1:
          return _context4.a(2, {
            EC: 0,
            EM: 'Xóa thành công'
          });
      }
    }, _callee4);
  }));
  return function deleteOverride(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getOverrides: getOverrides,
  createOverride: createOverride,
  updateOverride: updateOverride,
  deleteOverride: deleteOverride
};