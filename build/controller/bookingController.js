"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _models = _interopRequireDefault(require("../models"));
var _bookingService = _interopRequireDefault(require("../service/bookingService.js"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createBooking = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, name, phone, dob, address, email, reason, doctorId, specialtyId, slotId, scheduleTime, servicePriceId, booking, doctor, specialty, service, slot, transporter, htmlContent, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _req$body = req.body, name = _req$body.name, phone = _req$body.phone, dob = _req$body.dob, address = _req$body.address, email = _req$body.email, reason = _req$body.reason, doctorId = _req$body.doctorId, specialtyId = _req$body.specialtyId, slotId = _req$body.slotId, scheduleTime = _req$body.scheduleTime, servicePriceId = _req$body.servicePriceId; // 1️⃣ Lưu booking
          _context.n = 1;
          return _models["default"].Booking.create({
            name: name,
            phone: phone,
            dob: dob,
            address: address,
            email: email,
            reason: reason,
            doctorId: doctorId,
            specialtyId: specialtyId,
            slotId: slotId,
            scheduleTime: scheduleTime,
            servicePriceId: servicePriceId
          });
        case 1:
          booking = _context.v;
          if (!email) {
            _context.n = 8;
            break;
          }
          _context.n = 2;
          return _models["default"].DoctorInfo.findByPk(doctorId);
        case 2:
          doctor = _context.v;
          _context.n = 3;
          return _models["default"].Specialty.findByPk(specialtyId);
        case 3:
          specialty = _context.v;
          if (!servicePriceId) {
            _context.n = 5;
            break;
          }
          _context.n = 4;
          return _models["default"].ServicePrice.findByPk(servicePriceId);
        case 4:
          _t = _context.v;
          _context.n = 6;
          break;
        case 5:
          _t = null;
        case 6:
          service = _t;
          _context.n = 7;
          return _models["default"].WorkingSlotTemplate.findByPk(slotId);
        case 7:
          slot = _context.v;
          // Cấu hình SMTP (Gmail hoặc SMTP của hosting)
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SMTP_USER,
              // Email gửi
              pass: process.env.SMTP_PASS // Mật khẩu ứng dụng
            }
          }); // Nội dung email
          htmlContent = "\n                <h3>Xin ch\xE0o ".concat(name, "</h3>\n                <p>B\u1EA1n \u0111\xE3 \u0111\u1EB7t l\u1ECBch kh\xE1m th\xE0nh c\xF4ng t\u1EA1i <b>B\u1EC7nh vi\u1EC7n T\xE2n H\u01B0ng</b>.</p>\n                <p><b>Th\xF4ng tin l\u1ECBch h\u1EB9n:</b></p>\n                <ul>\n                    <li><b>B\xE1c s\u0129:</b> ").concat((doctor === null || doctor === void 0 ? void 0 : doctor.doctorName) || '---', "</li>\n                    <li><b>Chuy\xEAn khoa:</b> ").concat((specialty === null || specialty === void 0 ? void 0 : specialty.name) || '---', "</li>\n                    <li><b>Ng\xE0y kh\xE1m:</b> ").concat(new Date(scheduleTime).toLocaleDateString('vi-VN'), "</li>\n                    <li><b>Gi\u1EDD kh\xE1m:</b> ").concat((slot === null || slot === void 0 ? void 0 : slot.startTime) || '---', "</li>\n                    <li><b>D\u1ECBch v\u1EE5:</b> ").concat((service === null || service === void 0 ? void 0 : service.name) || '---', "</li>\n                </ul>\n                <p>Vui l\xF2ng \u0111\u1EBFn tr\u01B0\u1EDBc gi\u1EDD h\u1EB9n 15 ph\xFAt \u0111\u1EC3 l\xE0m th\u1EE7 t\u1EE5c.</p>\n                <p>Xin c\u1EA3m \u01A1n!</p>\n            "); // Gửi email
          _context.n = 8;
          return transporter.sendMail({
            from: "\"B\u1EC7nh vi\u1EC7n T\xE2n H\u01B0ng\" <".concat(process.env.SMTP_USER, ">"),
            to: email,
            subject: "Xác nhận lịch khám",
            html: htmlContent
          });
        case 8:
          return _context.a(2, res.status(200).json({
            EC: 0,
            EM: 'Đặt lịch thành công',
            DT: booking
          }));
        case 9:
          _context.p = 9;
          _t2 = _context.v;
          console.error('❌ createBooking error:', _t2);
          return _context.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi tạo booking',
            DT: {}
          }));
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function createBooking(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getBookingPaginate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$query, page, limit, doctorId, date, specialtyId, status, startDate, endDate, result, _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _req$query = req.query, page = _req$query.page, limit = _req$query.limit, doctorId = _req$query.doctorId, date = _req$query.date, specialtyId = _req$query.specialtyId, status = _req$query.status, startDate = _req$query.startDate, endDate = _req$query.endDate;
          _context2.n = 1;
          return _bookingService["default"].getPaginatedBookings({
            page: +page || 1,
            limit: +limit || 10,
            doctorId: doctorId,
            date: date,
            specialtyId: specialtyId,
            status: status,
            startDate: startDate,
            endDate: endDate
          });
        case 1:
          result = _context2.v;
          return _context2.a(2, res.status(200).json(result));
        case 2:
          _context2.p = 2;
          _t3 = _context2.v;
          console.error("❌ getBookingPaginate error:", _t3);
          return _context2.a(2, res.status(500).json({
            EC: 1,
            EM: "Server error",
            DT: []
          }));
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getBookingPaginate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createBookingForClient = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _req$body2, name, phone, dob, address, email, reason, doctorId, specialtyId, slotId, scheduleTime, servicePriceId, booking, _t4;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _req$body2 = req.body, name = _req$body2.name, phone = _req$body2.phone, dob = _req$body2.dob, address = _req$body2.address, email = _req$body2.email, reason = _req$body2.reason, doctorId = _req$body2.doctorId, specialtyId = _req$body2.specialtyId, slotId = _req$body2.slotId, scheduleTime = _req$body2.scheduleTime, servicePriceId = _req$body2.servicePriceId;
          _context3.n = 1;
          return _models["default"].Booking.create({
            name: name,
            phone: phone,
            dob: dob,
            address: address,
            email: email,
            reason: reason,
            doctorId: doctorId,
            specialtyId: specialtyId,
            slotId: slotId,
            scheduleTime: scheduleTime,
            servicePriceId: servicePriceId
          });
        case 1:
          booking = _context3.v;
          return _context3.a(2, res.status(200).json({
            EC: 0,
            EM: 'Đặt lịch thành công',
            DT: booking
          }));
        case 2:
          _context3.p = 2;
          _t4 = _context3.v;
          console.error('❌ createBooking error:', _t4);
          return _context3.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi tạo booking',
            DT: {}
          }));
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function createBookingForClient(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteBookingForClient = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var id, _t5;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          id = req.params.id;
          _context4.n = 1;
          return _models["default"].Booking.destroy({
            where: {
              id: id
            }
          });
        case 1:
          return _context4.a(2, res.status(200).json({
            EC: 0,
            EM: "Xóa thành công"
          }));
        case 2:
          _context4.p = 2;
          _t5 = _context4.v;
          console.error("deleteBooking error:", _t5);
          return _context4.a(2, res.status(500).json({
            EC: 1,
            EM: "Lỗi khi xóa booking"
          }));
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function deleteBookingForClient(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateBooking = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, _req$body3, name, phone, dob, address, email, reason, specialtyId, doctorId, servicePriceId, slotId, scheduleTime, status, booking, _t6;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          id = req.params.id;
          _req$body3 = req.body, name = _req$body3.name, phone = _req$body3.phone, dob = _req$body3.dob, address = _req$body3.address, email = _req$body3.email, reason = _req$body3.reason, specialtyId = _req$body3.specialtyId, doctorId = _req$body3.doctorId, servicePriceId = _req$body3.servicePriceId, slotId = _req$body3.slotId, scheduleTime = _req$body3.scheduleTime, status = _req$body3.status;
          if (!(!name || !phone || !doctorId || !slotId || !scheduleTime)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            EC: 1,
            EM: 'Thiếu thông tin bắt buộc'
          }));
        case 1:
          _context5.n = 2;
          return _models["default"].Booking.findByPk(id);
        case 2:
          booking = _context5.v;
          if (booking) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, res.status(404).json({
            EC: 1,
            EM: 'Không tìm thấy lịch hẹn'
          }));
        case 3:
          if (!(new Date(scheduleTime) < new Date())) {
            _context5.n = 4;
            break;
          }
          return _context5.a(2, res.status(400).json({
            EC: 1,
            EM: 'Không thể đặt lịch cho thời gian trong quá khứ'
          }));
        case 4:
          // Cập nhật các trường
          booking.name = name;
          booking.phone = phone;
          booking.dob = dob || null;
          booking.address = address || null;
          booking.email = email || null;
          booking.reason = reason || null;
          booking.specialtyId = specialtyId;
          booking.doctorId = doctorId;
          booking.servicePriceId = servicePriceId || null;
          booking.slotId = slotId;
          booking.scheduleTime = scheduleTime;
          booking.status = status;
          _context5.n = 5;
          return booking.save();
        case 5:
          return _context5.a(2, res.status(200).json({
            EC: 0,
            EM: 'Cập nhật lịch hẹn thành công',
            DT: booking
          }));
        case 6:
          _context5.p = 6;
          _t6 = _context5.v;
          console.error('❌ Lỗi update booking:', _t6);
          return _context5.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: _t6.message
          }));
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return function updateBooking(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getBookingById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var _booking$DoctorInfo, _booking$DoctorInfo2, _booking$Specialty, _booking$Specialty2, _booking$ServicePrice, _booking$ServicePrice2, _booking$WorkingSlotT, _booking$WorkingSlotT2, _booking$WorkingSlotT3, id, Booking, booking, _t7;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          id = req.params.id;
          Booking = _models["default"].Booking; // ✅ thêm dòng này
          _context6.n = 1;
          return Booking.findByPk(id, {
            include: [{
              model: _models["default"].DoctorInfo,
              attributes: ['id', 'doctorName']
            }, {
              model: _models["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _models["default"].ServicePrice,
              attributes: ['id', 'name']
            }, {
              model: _models["default"].WorkingSlotTemplate,
              attributes: ['id', 'startTime', 'endTime']
            }]
          });
        case 1:
          booking = _context6.v;
          if (booking) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            EC: 1,
            EM: 'Không tìm thấy lịch hẹn'
          }));
        case 2:
          return _context6.a(2, res.status(200).json({
            EC: 0,
            EM: 'Lấy thông tin lịch hẹn thành công',
            DT: {
              id: booking.id,
              name: booking.name,
              phone: booking.phone,
              dob: booking.dob,
              address: booking.address,
              email: booking.email,
              reason: booking.reason,
              doctorId: (_booking$DoctorInfo = booking.DoctorInfo) === null || _booking$DoctorInfo === void 0 ? void 0 : _booking$DoctorInfo.id,
              doctorName: (_booking$DoctorInfo2 = booking.DoctorInfo) === null || _booking$DoctorInfo2 === void 0 ? void 0 : _booking$DoctorInfo2.doctorName,
              specialtyId: (_booking$Specialty = booking.Specialty) === null || _booking$Specialty === void 0 ? void 0 : _booking$Specialty.id,
              specialtyName: (_booking$Specialty2 = booking.Specialty) === null || _booking$Specialty2 === void 0 ? void 0 : _booking$Specialty2.name,
              servicePriceId: (_booking$ServicePrice = booking.ServicePrice) === null || _booking$ServicePrice === void 0 ? void 0 : _booking$ServicePrice.id,
              serviceName: (_booking$ServicePrice2 = booking.ServicePrice) === null || _booking$ServicePrice2 === void 0 ? void 0 : _booking$ServicePrice2.name,
              slotId: (_booking$WorkingSlotT = booking.WorkingSlotTemplate) === null || _booking$WorkingSlotT === void 0 ? void 0 : _booking$WorkingSlotT.id,
              slotTime: "".concat((_booking$WorkingSlotT2 = booking.WorkingSlotTemplate) === null || _booking$WorkingSlotT2 === void 0 ? void 0 : _booking$WorkingSlotT2.startTime, " - ").concat((_booking$WorkingSlotT3 = booking.WorkingSlotTemplate) === null || _booking$WorkingSlotT3 === void 0 ? void 0 : _booking$WorkingSlotT3.endTime),
              scheduleTime: booking.scheduleTime
            }
          }));
        case 3:
          _context6.p = 3;
          _t7 = _context6.v;
          console.error("❌ Lỗi get booking:", _t7);
          return _context6.a(2, res.status(500).json({
            EC: -1,
            EM: 'Lỗi server',
            DT: _t7.message
          }));
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function getBookingById(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getBookingsByPhone = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var phone, bookings, _t8;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          phone = req.query.phone;
          if (phone) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, res.status(400).json({
            EC: 1,
            EM: 'Thiếu số điện thoại',
            DT: []
          }));
        case 1:
          _context7.n = 2;
          return _models["default"].Booking.findAll({
            where: {
              phone: phone
            },
            include: [{
              model: _models["default"].DoctorInfo,
              attributes: ['id', 'doctorName']
            }, {
              model: _models["default"].Specialty,
              attributes: ['id', 'name']
            }, {
              model: _models["default"].ServicePrice,
              attributes: ['id', 'name']
            }, {
              model: _models["default"].WorkingSlotTemplate,
              attributes: ['id', 'startTime', 'endTime']
            }],
            order: [['scheduleTime', 'DESC']]
          });
        case 2:
          bookings = _context7.v;
          return _context7.a(2, res.status(200).json({
            EC: 0,
            EM: 'Lấy lịch hẹn thành công',
            DT: bookings
          }));
        case 3:
          _context7.p = 3;
          _t8 = _context7.v;
          console.error("getBookingsByPhone error:", _t8);
          return _context7.a(2, res.status(500).json({
            EC: 1,
            EM: 'Lỗi server',
            DT: []
          }));
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function getBookingsByPhone(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  createBooking: createBooking,
  getBookingPaginate: getBookingPaginate,
  getBookingById: getBookingById,
  createBookingForClient: createBookingForClient,
  deleteBookingForClient: deleteBookingForClient,
  updateBooking: updateBooking,
  getBookingsByPhone: getBookingsByPhone
};