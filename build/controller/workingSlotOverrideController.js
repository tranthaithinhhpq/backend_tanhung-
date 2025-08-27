"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _workingSlotOverrideService = _interopRequireDefault(require("../service/workingSlotOverrideService"));
var _dateFns = require("date-fns");
var _index = _interopRequireDefault(require("../models/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var getOverrides = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var result, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _workingSlotOverrideService["default"].getOverrides(req.query);
        case 1:
          result = _context.v;
          return _context.a(2, res.status(200).json(result));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error('getOverrides error:', _t);
          return _context.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error'
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getOverrides(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createOverride = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body, doctorId, date, isActive, slotId, note, overrideData, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _req$body = req.body, doctorId = _req$body.doctorId, date = _req$body.date, isActive = _req$body.isActive, slotId = _req$body.slotId, note = _req$body.note;
          console.log("📌 Incoming date:", req.body.date, _typeof(req.body.date));
          if (!(!doctorId || !date)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            EC: 1,
            EM: 'Missing required fields'
          }));
        case 1:
          if (!Array.isArray(slotId)) {
            _context2.n = 3;
            break;
          }
          overrideData = slotId.map(function (s) {
            return {
              doctorId: doctorId,
              date: date,
              slotId: s,
              isActive: isActive,
              note: note
            };
          });
          _context2.n = 2;
          return _index["default"].WorkingSlotOverride.bulkCreate(overrideData);
        case 2:
          _context2.n = 4;
          break;
        case 3:
          _context2.n = 4;
          return _index["default"].WorkingSlotOverride.create({
            doctorId: doctorId,
            date: date,
            slotId: slotId || null,
            isActive: isActive,
            note: note
          });
        case 4:
          return _context2.a(2, res.status(200).json({
            EC: 0,
            EM: 'Thêm lịch nghỉ thành công'
          }));
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.error("❌ createOverride error:", _t2);
          return _context2.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error'
          }));
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return function createOverride(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateOverride = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, result, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          id = req.params.id;
          _context3.n = 1;
          return _workingSlotOverrideService["default"].updateOverride(id, req.body);
        case 1:
          result = _context3.v;
          return _context3.a(2, res.status(200).json(result));
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error('updateOverride error:', _t3);
          return _context3.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error'
          }));
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function updateOverride(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteOverride = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var id, result, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          id = req.params.id;
          _context4.n = 1;
          return _workingSlotOverrideService["default"].deleteOverride(id);
        case 1:
          result = _context4.v;
          return _context4.a(2, res.status(200).json(result));
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          console.error('deleteOverride error:', _t4);
          return _context4.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error'
          }));
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function deleteOverride(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getDoctorSlotsByDate = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$query, doctorId, date, jsDate, dayOfWeek, overrides, excludedSlotIds, slots, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _req$query = req.query, doctorId = _req$query.doctorId, date = _req$query.date;
          if (!(!doctorId || !date)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            EC: 1,
            EM: 'Missing doctorId or date'
          }));
        case 1:
          jsDate = new Date(date);
          dayOfWeek = jsDate.getDay(); // 0 (CN) đến 6 (Thứ 7)
          _context5.n = 2;
          return _index["default"].WorkingSlotOverride.findAll({
            where: {
              doctorId: doctorId,
              date: jsDate,
              slotId: _defineProperty({}, _index["default"].Sequelize.Op.ne, null),
              isActive: false
            }
          });
        case 2:
          overrides = _context5.v;
          excludedSlotIds = overrides.map(function (o) {
            return o.slotId;
          });
          _context5.n = 3;
          return _index["default"].WorkingSlotTemplate.findAll({
            where: {
              doctorId: doctorId,
              dayOfWeek: dayOfWeek,
              isActive: true,
              id: _defineProperty({}, _index["default"].Sequelize.Op.notIn, excludedSlotIds)
            },
            order: [['startTime', 'ASC']]
          });
        case 3:
          slots = _context5.v;
          return _context5.a(2, res.status(200).json({
            EC: 0,
            DT: slots
          }));
        case 4:
          _context5.p = 4;
          _t5 = _context5.v;
          console.error('❌ getDoctorSlotsByDate error:', _t5);
          return _context5.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error',
            DT: []
          }));
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return function getDoctorSlotsByDate(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getDayOffPaginate = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var page, limit, offset, whereClause, _yield$db$WorkingSlot, count, rows, totalPages, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 5;
          offset = (page - 1) * limit;
          whereClause = {};
          if (req.query.doctorId) {
            whereClause.doctorId = req.query.doctorId;
          }
          if (req.query.date) {
            whereClause.date = req.query.date;
          }
          _context6.n = 1;
          return _index["default"].WorkingSlotOverride.findAndCountAll({
            where: whereClause,
            limit: limit,
            offset: offset,
            include: [{
              model: _index["default"].DoctorInfo,
              attributes: ['doctorName']
            }, {
              model: _index["default"].WorkingSlotTemplate,
              attributes: ['startTime', 'endTime']
            }],
            order: [['date', 'DESC']]
          });
        case 1:
          _yield$db$WorkingSlot = _context6.v;
          count = _yield$db$WorkingSlot.count;
          rows = _yield$db$WorkingSlot.rows;
          totalPages = Math.ceil(count / limit);
          return _context6.a(2, res.status(200).json({
            EC: 0,
            EM: 'OK',
            DT: {
              records: rows,
              totalPages: totalPages
            }
          }));
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          console.error('❌ getDayOffPaginate error:', _t6);
          return _context6.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function getDayOffPaginate(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getOverrides: getOverrides,
  createOverride: createOverride,
  updateOverride: updateOverride,
  deleteOverride: deleteOverride,
  getDoctorSlotsByDate: getDoctorSlotsByDate,
  getDayOffPaginate: getDayOffPaginate
};