"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index"));
var _sequelize = require("sequelize");
var _dateFns = require("date-fns");
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createDoctorInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(body, file) {
    var _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _index["default"].DoctorInfo.create({
            doctorName: body.doctorName,
            specialtyId: body.specialtyId,
            degreeId: body.degreeId,
            positionId: body.positionId,
            markdownContent: body.markdownContent || '',
            image: file ? "/images/".concat(file.filename) : null
          });
        case 1:
          return _context.a(2, {
            EC: 0,
            EM: 'Tạo thông tin bác sĩ thành công',
            DT: ''
          });
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error("❌ createDoctorInfo error:", _t);
          return _context.a(2, {
            EC: 1,
            EM: 'Lỗi khi tạo thông tin',
            DT: ''
          });
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function createDoctorInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateDoctorInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id, body, file) {
    var doctor, newImagePath, oldPath, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _index["default"].DoctorInfo.findByPk(id);
        case 1:
          doctor = _context2.v;
          if (doctor) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, {
            EC: 1,
            EM: 'Bác sĩ không tồn tại',
            DT: {}
          });
        case 2:
          newImagePath = doctor.image; // Nếu có ảnh mới → xóa ảnh cũ trong thư mục
          if (file) {
            // Xóa ảnh cũ
            if (doctor.image) {
              oldPath = _path["default"].join(__dirname, '../public', doctor.image.startsWith('/') ? doctor.image.slice(1) : doctor.image);
              if (_fs["default"].existsSync(oldPath)) {
                _fs["default"].unlinkSync(oldPath);
              }
            }

            // Cập nhật ảnh mới
            newImagePath = "/images/".concat(file.filename);
          }
          _context2.n = 3;
          return doctor.update({
            doctorName: body.doctorName,
            specialtyId: body.specialtyId,
            degreeId: body.degreeId,
            positionId: body.positionId,
            markdownContent: body.markdownContent,
            image: newImagePath
          });
        case 3:
          return _context2.a(2, {
            EC: 0,
            EM: 'Cập nhật thành công',
            DT: {}
          });
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          console.error("❌ updateDoctorInfo error:", _t2);
          return _context2.a(2, {
            EC: 1,
            EM: 'Lỗi cập nhật',
            DT: {}
          });
      }
    }, _callee2, null, [[0, 4]]);
  }));
  return function updateDoctorInfo(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var getDoctorList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var doctors, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _index["default"].DoctorInfo.findAll({
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Degree,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }],
            order: [['id', 'DESC']]
          });
        case 1:
          doctors = _context3.v;
          return _context3.a(2, {
            EC: 0,
            EM: 'Lấy danh sách thành công',
            DT: doctors
          });
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error("❌ getDoctorList error:", _t3);
          return _context3.a(2, {
            EC: 1,
            EM: 'Lỗi lấy danh sách',
            DT: []
          });
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function getDoctorList() {
    return _ref3.apply(this, arguments);
  };
}();
var getAllDoctors = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var doctors, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _index["default"].DoctorInfo.findAll({
            attributes: ['id', 'doctorName'],
            order: [['doctorName', 'ASC']]
          });
        case 1:
          doctors = _context4.v;
          return _context4.a(2, {
            EC: 0,
            EM: 'Lấy danh sách bác sĩ thành công',
            DT: doctors
          });
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          console.error('❌ getAllDoctors service error:', _t4);
          return _context4.a(2, {
            EC: 1,
            EM: 'Lỗi khi lấy danh sách bác sĩ',
            DT: []
          });
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function getAllDoctors() {
    return _ref4.apply(this, arguments);
  };
}();
var getDoctorListPaginate = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(page, limit) {
    var offset, _yield$db$DoctorInfo$, count, rows, totalPages, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          offset = (page - 1) * limit;
          _context5.n = 1;
          return _index["default"].DoctorInfo.findAndCountAll({
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Degree,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }],
            limit: limit,
            offset: offset,
            order: [['id', 'DESC']]
          });
        case 1:
          _yield$db$DoctorInfo$ = _context5.v;
          count = _yield$db$DoctorInfo$.count;
          rows = _yield$db$DoctorInfo$.rows;
          totalPages = Math.ceil(count / limit);
          return _context5.a(2, {
            EC: 0,
            EM: "Lấy danh sách bác sĩ thành công",
            DT: {
              doctors: rows,
              totalPages: totalPages
            }
          });
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.error("❌ getDoctorListPaginate error:", _t5);
          return _context5.a(2, {
            EC: 1,
            EM: "Lỗi lấy danh sách",
            DT: {}
          });
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function getDoctorListPaginate(_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();
var getDoctorDetail = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(id) {
    var doctor, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _index["default"].DoctorInfo.findOne({
            where: {
              id: id
            },
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Degree,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }]
          });
        case 1:
          doctor = _context6.v;
          if (doctor) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, {
            EC: 1,
            EM: 'Không tìm thấy bác sĩ',
            DT: {}
          });
        case 2:
          return _context6.a(2, {
            EC: 0,
            EM: 'OK',
            DT: doctor
          });
        case 3:
          _context6.p = 3;
          _t6 = _context6.v;
          console.error("❌ getDoctorDetail error:", _t6);
          return _context6.a(2, {
            EC: 1,
            EM: 'Lỗi server',
            DT: {}
          });
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function getDoctorDetail(_x8) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteDoctorInfo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(id) {
    var doctor, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return _index["default"].DoctorInfo.findByPk(id);
        case 1:
          doctor = _context7.v;
          if (doctor) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, {
            EC: 1,
            EM: 'Bác sĩ không tồn tại',
            DT: {}
          });
        case 2:
          _context7.n = 3;
          return doctor.destroy();
        case 3:
          return _context7.a(2, {
            EC: 0,
            EM: 'Xóa thành công',
            DT: {}
          });
        case 4:
          _context7.p = 4;
          _t7 = _context7.v;
          console.error("❌ deleteDoctorInfo error:", _t7);
          return _context7.a(2, {
            EC: 1,
            EM: 'Lỗi xóa',
            DT: {}
          });
      }
    }, _callee7, null, [[0, 4]]);
  }));
  return function deleteDoctorInfo(_x9) {
    return _ref7.apply(this, arguments);
  };
}();
var getDoctorBySpecialty = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(specialtyId) {
    var doctors, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return _index["default"].DoctorInfo.findAll({
            where: {
              specialtyId: specialtyId
            },
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Degree,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }]
          });
        case 1:
          doctors = _context8.v;
          return _context8.a(2, {
            EC: 0,
            EM: 'Lấy danh sách thành công',
            DT: doctors
          });
        case 2:
          _context8.p = 2;
          _t8 = _context8.v;
          console.error("❌ getDoctorBySpecialty error:", _t8);
          return _context8.a(2, {
            EC: 1,
            EM: 'Lỗi server',
            DT: []
          });
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return function getDoctorBySpecialty(_x0) {
    return _ref8.apply(this, arguments);
  };
}();
var getOtherDoctors = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(currentDoctorId) {
    var doctors, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          _context9.n = 1;
          return _index["default"].DoctorInfo.findAll({
            where: {
              id: _defineProperty({}, _index["default"].Sequelize.Op.ne, currentDoctorId)
            },
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }]
          });
        case 1:
          doctors = _context9.v;
          return _context9.a(2, {
            EC: 0,
            EM: 'OK',
            DT: doctors
          });
        case 2:
          _context9.p = 2;
          _t9 = _context9.v;
          console.error("❌ getOtherDoctors error:", _t9);
          return _context9.a(2, {
            EC: 1,
            EM: 'Lỗi server',
            DT: []
          });
      }
    }, _callee9, null, [[0, 2]]);
  }));
  return function getOtherDoctors(_x1) {
    return _ref9.apply(this, arguments);
  };
}();
var getDoctorDetailById = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(id) {
    var doctor, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _context0.n = 1;
          return _index["default"].DoctorInfo.findOne({
            where: {
              id: id
            },
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Degree,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }]
          });
        case 1:
          doctor = _context0.v;
          if (doctor) {
            _context0.n = 2;
            break;
          }
          return _context0.a(2, {
            EC: 1,
            EM: 'Không tìm thấy bác sĩ',
            DT: {}
          });
        case 2:
          return _context0.a(2, {
            EC: 0,
            EM: 'OK',
            DT: doctor
          });
        case 3:
          _context0.p = 3;
          _t0 = _context0.v;
          console.error("❌ getDoctorDetailById error:", _t0);
          return _context0.a(2, {
            EC: 1,
            EM: 'Lỗi server',
            DT: {}
          });
      }
    }, _callee0, null, [[0, 3]]);
  }));
  return function getDoctorDetailById(_x10) {
    return _ref0.apply(this, arguments);
  };
}();
var DEFAULT_SLOTS = ["07:00", "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];
var getAvailableScheduleByDoctor = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(doctorId) {
    var today, next30Days, workingSlots, formattedSlots, startDate, endDate, overrides, overrideMap, response, _iterator, _step, date, dow, dateStr, available, _iterator2, _step2, slot, key, status, _t1;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          doctorId = parseInt(doctorId);
          _context1.p = 1;
          today = new Date();
          next30Days = (0, _dateFns.eachDayOfInterval)({
            start: today,
            end: (0, _dateFns.addDays)(today, 30)
          });
          console.log("next30Days: ", next30Days);
          _context1.n = 2;
          return _index["default"].WorkingSlotTemplate.findAll({
            where: {
              doctorId: doctorId
            }
          });
        case 2:
          workingSlots = _context1.v;
          if (workingSlots.length) {
            _context1.n = 3;
            break;
          }
          return _context1.a(2, {
            EC: 0,
            DT: []
          });
        case 3:
          formattedSlots = workingSlots.map(function (slot) {
            return {
              dayOfWeek: slot.dayOfWeek,
              slotId: slot.id,
              time: "".concat(slot.startTime, " - ").concat(slot.endTime)
            };
          });
          startDate = (0, _dateFns.format)((0, _dateFns.startOfDay)(today), 'yyyy-MM-dd');
          endDate = (0, _dateFns.format)((0, _dateFns.endOfDay)((0, _dateFns.addDays)(today, 10)), 'yyyy-MM-dd');
          console.log("endDate: ", endDate, "endDate: ");
          _context1.n = 4;
          return _index["default"].WorkingSlotOverride.findAll({
            where: {
              doctorId: doctorId,
              date: _defineProperty({}, _sequelize.Op.between, [startDate, endDate])
            }
          });
        case 4:
          overrides = _context1.v;
          overrideMap = {};
          overrides.forEach(function (ov) {
            console.log("   \u27A4 Date: ".concat(ov.date, ", slotId: ").concat(ov.slotId, ", isActive: ").concat(ov.isActive));
            var key = "".concat(ov.date, "-").concat(ov.slotId);
            overrideMap[key] = ov.isActive === false ? 'disabled' : 'active';
          });
          console.log("🧩 overrideMap đã xử lý:", overrideMap);
          response = [];
          _iterator = _createForOfIteratorHelper(next30Days);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              date = _step.value;
              dow = (0, _dateFns.getDay)(date);
              dateStr = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
              available = [];
              _iterator2 = _createForOfIteratorHelper(formattedSlots);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  slot = _step2.value;
                  if (slot.dayOfWeek === dow) {
                    key = "".concat(dateStr, "-").concat(slot.slotId);
                    status = overrideMap[key];
                    if (status !== 'disabled') {
                      available.push({
                        slotId: slot.slotId,
                        time: slot.time
                      });
                    }
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              if (available.length > 0) {
                response.push({
                  date: dateStr,
                  slots: available
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return _context1.a(2, {
            EC: 0,
            DT: response
          });
        case 5:
          _context1.p = 5;
          _t1 = _context1.v;
          console.error("❌ Lỗi trong getAvailableScheduleByDoctor:", _t1);
          return _context1.a(2, {
            EC: -1,
            EM: "Lỗi khi lấy lịch bác sĩ",
            DT: []
          });
      }
    }, _callee1, null, [[1, 5]]);
  }));
  return function getAvailableScheduleByDoctor(_x11) {
    return _ref1.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  createDoctorInfo: createDoctorInfo,
  updateDoctorInfo: updateDoctorInfo,
  getDoctorList: getDoctorList,
  getDoctorListPaginate: getDoctorListPaginate,
  getDoctorDetail: getDoctorDetail,
  deleteDoctorInfo: deleteDoctorInfo,
  getDoctorBySpecialty: getDoctorBySpecialty,
  getOtherDoctors: getOtherDoctors,
  getDoctorDetailById: getDoctorDetailById,
  getAvailableScheduleByDoctor: getAvailableScheduleByDoctor,
  getAllDoctors: getAllDoctors
};