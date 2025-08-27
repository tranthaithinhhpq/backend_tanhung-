"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _doctorService = _interopRequireDefault(require("../service/doctorService"));
var _index = _interopRequireDefault(require("../models/index.js"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
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
var sequelize = _index["default"].sequelize;
var createDoctorInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, doctorName, specialtyId, degreeId, positionId, markdownContent, file, newDoctor, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _req$body = req.body, doctorName = _req$body.doctorName, specialtyId = _req$body.specialtyId, degreeId = _req$body.degreeId, positionId = _req$body.positionId, markdownContent = _req$body.markdownContent;
          file = req.file;
          _context.n = 1;
          return _index["default"].DoctorInfo.create({
            doctorName: doctorName,
            specialtyId: specialtyId,
            degreeId: degreeId,
            positionId: positionId,
            markdownContent: markdownContent || '',
            image: file ? "/images/".concat(file.filename) : null
          });
        case 1:
          newDoctor = _context.v;
          _context.n = 2;
          return createDefaultSlotsForDoctor(newDoctor.id);
        case 2:
          return _context.a(2, res.status(201).json({
            EC: 0,
            EM: 'Tạo bác sĩ và lịch mặc định thành công'
          }));
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error("❌ createDoctorInfo error:", _t);
          return _context.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi khi tạo bác sĩ'
          }));
      }
    }, _callee, null, [[0, 3]]);
  }));
  return function createDoctorInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateDoctorInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var id, data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          id = req.params.id;
          _context2.n = 1;
          return _doctorService["default"].updateDoctorInfo(id, req.body, req.file);
        case 1:
          data = _context2.v;
          return _context2.a(2, res.status(200).json(data));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.error(_t2);
          return _context2.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error',
            DT: {}
          }));
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function updateDoctorInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var readDoctorGallery = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var data, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _doctorService["default"].readDoctorGallery();
        case 1:
          data = _context3.v;
          return _context3.a(2, res.status(data.EC === 0 ? 200 : 500).json(data));
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error(_t3);
          return _context3.a(2, res.status(500).json({
            EC: -1,
            EM: 'Server error',
            DT: null
          }));
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function readDoctorGallery(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getDoctorDetailById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var id, result, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          id = req.params.id; // Đảm bảo đây là id
          if (id) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, res.status(400).json({
            EC: 1,
            EM: 'Thiếu id',
            DT: {}
          }));
        case 1:
          _context4.n = 2;
          return _doctorService["default"].getDoctorDetailById(id);
        case 2:
          result = _context4.v;
          return _context4.a(2, res.status(200).json(result));
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          console.error("Error getDoctorDetailById:", _t4);
          return _context4.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: {}
          }));
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function getDoctorDetailById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getOtherDoctors = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, doctors, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          id = req.params.id;
          _context5.n = 1;
          return _index["default"].DoctorInfo.findAll({
            where: {
              id: _defineProperty({}, _index["default"].Sequelize.Op.ne, id)
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
          doctors = _context5.v;
          return _context5.a(2, res.status(200).json({
            EC: 0,
            EM: 'OK',
            DT: doctors
          }));
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.error("❌ getOtherDoctors error:", _t5);
          return _context5.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function getOtherDoctors(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();

// const getDoctorBySpecialty = async (req, res) => {
//     try {
//         const { specialtyId } = req.params;
//         const doctors = await db.DoctorInfo.findAll({
//             where: { specialtyId },
//             attributes: ['id', 'doctorName', 'image']
//         });

//         return res.status(200).json({
//             EC: 0,
//             DT: doctors
//         });
//     } catch (error) {
//         console.error("❌ Lỗi getDoctorBySpecialty:", error);
//         return res.status(500).json({
//             EC: -1,
//             EM: 'Lỗi server'
//         });
//     }
// };

var getDoctorBySpecialty = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var specialtyId, doctors, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          specialtyId = req.params.specialtyId;
          _context6.n = 1;
          return _index["default"].DoctorInfo.findAll({
            where: {
              specialtyId: specialtyId
            },
            attributes: ['id', 'doctorName', 'image'],
            include: [{
              model: _index["default"].Position,
              attributes: ['name']
            }, {
              model: _index["default"].Degree,
              attributes: ['name']
            }, {
              model: _index["default"].Specialty,
              attributes: ['name']
            }]
          });
        case 1:
          doctors = _context6.v;
          return _context6.a(2, res.status(200).json({
            EC: 0,
            DT: doctors
          }));
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          console.error('❌ Lỗi getDoctorBySpecialty:', _t6);
          return _context6.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server'
          }));
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function getDoctorBySpecialty(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getDoctorList = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _req$query, _req$query$page, page, _req$query$limit, limit, search, degreeId, specialtyId, positionId, offset, where, _yield$db$DoctorInfo$, count, rows, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit, search = _req$query.search, degreeId = _req$query.degreeId, specialtyId = _req$query.specialtyId, positionId = _req$query.positionId;
          page = +page;
          limit = +limit;
          offset = (page - 1) * limit;
          where = {};
          if (search) {
            where.doctorName = _defineProperty({}, _index["default"].Sequelize.Op.like, "%".concat(search, "%"));
          }
          if (degreeId) {
            where.degreeId = degreeId;
          }
          if (specialtyId) {
            where.specialtyId = specialtyId;
          }
          if (positionId) {
            where.positionId = positionId;
          }
          _context7.n = 1;
          return _index["default"].DoctorInfo.findAndCountAll({
            where: where,
            include: [{
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Degree,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }],
            limit: limit,
            offset: offset,
            order: [['createdAt', 'DESC']]
          });
        case 1:
          _yield$db$DoctorInfo$ = _context7.v;
          count = _yield$db$DoctorInfo$.count;
          rows = _yield$db$DoctorInfo$.rows;
          return _context7.a(2, res.status(200).json({
            EC: 0,
            EM: 'Lấy danh sách thành công',
            DT: {
              doctors: rows,
              totalPages: Math.ceil(count / limit)
            }
          }));
        case 2:
          _context7.p = 2;
          _t7 = _context7.v;
          console.error('getDoctorList error:', _t7);
          return _context7.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee7, null, [[0, 2]]);
  }));
  return function getDoctorList(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getDoctorDetail = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var id, doctor, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          id = req.params.id;
          _context8.n = 1;
          return _index["default"].DoctorInfo.findOne({
            where: {
              id: id
            },
            include: [{
              model: _index["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Position,
              attributes: ['id', 'name']
            }, {
              model: _index["default"].Degree,
              attributes: ['id', 'name']
            }]
          });
        case 1:
          doctor = _context8.v;
          if (doctor) {
            _context8.n = 2;
            break;
          }
          return _context8.a(2, res.status(404).json({
            EC: 1,
            EM: 'Không tìm thấy bác sĩ',
            DT: null
          }));
        case 2:
          return _context8.a(2, res.status(200).json({
            EC: 0,
            EM: 'OK',
            DT: doctor
          }));
        case 3:
          _context8.p = 3;
          _t8 = _context8.v;
          console.error(_t8);
          return _context8.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server khi lấy thông tin bác sĩ',
            DT: null
          }));
      }
    }, _callee8, null, [[0, 3]]);
  }));
  return function getDoctorDetail(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteDoctorInfo = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var doctorId, doctor, imagePath, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          doctorId = req.params.id; // Kiểm tra bác sĩ có tồn tại không
          _context9.n = 1;
          return _index["default"].DoctorInfo.findByPk(doctorId);
        case 1:
          doctor = _context9.v;
          if (doctor) {
            _context9.n = 2;
            break;
          }
          return _context9.a(2, res.status(404).json({
            EC: 1,
            EM: 'Bác sĩ không tồn tại',
            DT: null
          }));
        case 2:
          // Xóa ảnh nếu có
          if (doctor.image) {
            imagePath = _path["default"].join(__dirname, '../public', doctor.image.startsWith('/') ? doctor.image.slice(1) : doctor.image);
            if (_fs["default"].existsSync(imagePath)) {
              _fs["default"].unlinkSync(imagePath);
            }
          }

          // Xóa các slot làm việc mặc định
          _context9.n = 3;
          return _index["default"].WorkingSlotTemplate.destroy({
            where: {
              doctorId: doctorId
            }
          });
        case 3:
          _context9.n = 4;
          return doctor.destroy();
        case 4:
          return _context9.a(2, res.status(200).json({
            EC: 0,
            EM: 'Xóa bác sĩ và ảnh thành công',
            DT: null
          }));
        case 5:
          _context9.p = 5;
          _t9 = _context9.v;
          console.error("❌ deleteDoctorInfo error:", _t9);
          return _context9.a(2, res.status(500).json({
            EC: -1,
            EM: "Lỗi server",
            DT: {}
          }));
      }
    }, _callee9, null, [[0, 5]]);
  }));
  return function deleteDoctorInfo(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
var getDoctorListPaginate = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var page, limit, data, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          page = +req.query.page || 1;
          limit = +req.query.limit || 5;
          _context0.n = 1;
          return _doctorService["default"].getDoctorListPaginate(page, limit);
        case 1:
          data = _context0.v;
          return _context0.a(2, res.status(200).json(data));
        case 2:
          _context0.p = 2;
          _t0 = _context0.v;
          console.error("getDoctorListPaginate error:", _t0);
          return _context0.a(2, res.status(500).json({
            EC: -1,
            EM: "Server error",
            DT: {}
          }));
      }
    }, _callee0, null, [[0, 2]]);
  }));
  return function getDoctorListPaginate(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();
var getDoctorAvailableSchedule = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var doctorId, result, _t1;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          doctorId = req.params.id;
          _context1.n = 1;
          return _doctorService["default"].getAvailableScheduleByDoctor(doctorId);
        case 1:
          result = _context1.v;
          return _context1.a(2, res.status(200).json(result));
        case 2:
          _context1.p = 2;
          _t1 = _context1.v;
          console.error("Lỗi lấy lịch khám:", _t1);
          return _context1.a(2, res.status(500).json({
            EC: -1,
            EM: "Lỗi server"
          }));
      }
    }, _callee1, null, [[0, 2]]);
  }));
  return function getDoctorAvailableSchedule(_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}();
var createDefaultSlotsForDoctor = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(doctorId) {
    var defaultSlots, slotWithDoctor;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          defaultSlots = [
          // Monday (1)
          {
            dayOfWeek: 1,
            startTime: '07:00',
            endTime: '08:00'
          }, {
            dayOfWeek: 1,
            startTime: '08:00',
            endTime: '09:00'
          }, {
            dayOfWeek: 1,
            startTime: '09:00',
            endTime: '10:00'
          }, {
            dayOfWeek: 1,
            startTime: '10:00',
            endTime: '11:00'
          }, {
            dayOfWeek: 1,
            startTime: '13:00',
            endTime: '14:00'
          }, {
            dayOfWeek: 1,
            startTime: '14:00',
            endTime: '15:00'
          }, {
            dayOfWeek: 1,
            startTime: '15:00',
            endTime: '16:00'
          }, {
            dayOfWeek: 1,
            startTime: '16:00',
            endTime: '17:00'
          },
          // Tuesday (2)
          {
            dayOfWeek: 2,
            startTime: '07:00',
            endTime: '08:00'
          }, {
            dayOfWeek: 2,
            startTime: '08:00',
            endTime: '09:00'
          }, {
            dayOfWeek: 2,
            startTime: '09:00',
            endTime: '10:00'
          }, {
            dayOfWeek: 2,
            startTime: '10:00',
            endTime: '11:00'
          }, {
            dayOfWeek: 2,
            startTime: '13:00',
            endTime: '14:00'
          }, {
            dayOfWeek: 2,
            startTime: '14:00',
            endTime: '15:00'
          }, {
            dayOfWeek: 2,
            startTime: '15:00',
            endTime: '16:00'
          }, {
            dayOfWeek: 2,
            startTime: '16:00',
            endTime: '17:00'
          },
          // Wednesday (3)
          {
            dayOfWeek: 3,
            startTime: '07:00',
            endTime: '08:00'
          }, {
            dayOfWeek: 3,
            startTime: '08:00',
            endTime: '09:00'
          }, {
            dayOfWeek: 3,
            startTime: '09:00',
            endTime: '10:00'
          }, {
            dayOfWeek: 3,
            startTime: '10:00',
            endTime: '11:00'
          }, {
            dayOfWeek: 3,
            startTime: '13:00',
            endTime: '14:00'
          }, {
            dayOfWeek: 3,
            startTime: '14:00',
            endTime: '15:00'
          }, {
            dayOfWeek: 3,
            startTime: '15:00',
            endTime: '16:00'
          }, {
            dayOfWeek: 3,
            startTime: '16:00',
            endTime: '17:00'
          },
          // Thursday (4)
          {
            dayOfWeek: 4,
            startTime: '07:00',
            endTime: '08:00'
          }, {
            dayOfWeek: 4,
            startTime: '08:00',
            endTime: '09:00'
          }, {
            dayOfWeek: 4,
            startTime: '09:00',
            endTime: '10:00'
          }, {
            dayOfWeek: 4,
            startTime: '10:00',
            endTime: '11:00'
          }, {
            dayOfWeek: 4,
            startTime: '13:00',
            endTime: '14:00'
          }, {
            dayOfWeek: 4,
            startTime: '14:00',
            endTime: '15:00'
          }, {
            dayOfWeek: 4,
            startTime: '15:00',
            endTime: '16:00'
          }, {
            dayOfWeek: 4,
            startTime: '16:00',
            endTime: '17:00'
          },
          // Friday (5)
          {
            dayOfWeek: 5,
            startTime: '07:00',
            endTime: '08:00'
          }, {
            dayOfWeek: 5,
            startTime: '08:00',
            endTime: '09:00'
          }, {
            dayOfWeek: 5,
            startTime: '09:00',
            endTime: '10:00'
          }, {
            dayOfWeek: 5,
            startTime: '10:00',
            endTime: '11:00'
          }, {
            dayOfWeek: 5,
            startTime: '13:00',
            endTime: '14:00'
          }, {
            dayOfWeek: 5,
            startTime: '14:00',
            endTime: '15:00'
          }, {
            dayOfWeek: 5,
            startTime: '15:00',
            endTime: '16:00'
          }, {
            dayOfWeek: 5,
            startTime: '16:00',
            endTime: '17:00'
          },
          // Saturday (6)
          {
            dayOfWeek: 6,
            startTime: '07:00',
            endTime: '08:00'
          }, {
            dayOfWeek: 6,
            startTime: '08:00',
            endTime: '09:00'
          }, {
            dayOfWeek: 6,
            startTime: '09:00',
            endTime: '10:00'
          }, {
            dayOfWeek: 6,
            startTime: '10:00',
            endTime: '11:00'
          }];
          slotWithDoctor = defaultSlots.map(function (slot) {
            return _objectSpread(_objectSpread({}, slot), {}, {
              doctorId: doctorId
            });
          });
          _context10.n = 1;
          return _index["default"].WorkingSlotTemplate.bulkCreate(slotWithDoctor);
        case 1:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return function createDefaultSlotsForDoctor(_x21) {
    return _ref10.apply(this, arguments);
  };
}();
var getAllDoctors = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
    var result, _t10;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _context11.n = 1;
          return _doctorService["default"].getAllDoctors();
        case 1:
          result = _context11.v;
          return _context11.a(2, res.status(200).json(result));
        case 2:
          _context11.p = 2;
          _t10 = _context11.v;
          console.error('❌ getAllDoctors error:', _t10);
          return _context11.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee11, null, [[0, 2]]);
  }));
  return function getAllDoctors(_x22, _x23) {
    return _ref11.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  createDoctorInfo: createDoctorInfo,
  updateDoctorInfo: updateDoctorInfo,
  readDoctorGallery: readDoctorGallery,
  getDoctorDetailById: getDoctorDetailById,
  getOtherDoctors: getOtherDoctors,
  getDoctorBySpecialty: getDoctorBySpecialty,
  getDoctorList: getDoctorList,
  getDoctorDetail: getDoctorDetail,
  deleteDoctorInfo: deleteDoctorInfo,
  getDoctorListPaginate: getDoctorListPaginate,
  getDoctorAvailableSchedule: getDoctorAvailableSchedule,
  createDefaultSlotsForDoctor: createDefaultSlotsForDoctor,
  getAllDoctors: getAllDoctors
};