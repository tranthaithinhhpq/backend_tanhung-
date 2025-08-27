"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var getAllSpecialties = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _index["default"].Specialty.findAll({
            order: [['id', 'DESC']]
          });
        case 1:
          data = _context.v;
          return _context.a(2, {
            EC: 0,
            DT: data
          });
        case 2:
          _context.p = 2;
          _t = _context.v;
          return _context.a(2, {
            EC: -1,
            EM: 'Lỗi khi lấy danh sách chuyên khoa',
            DT: []
          });
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getAllSpecialties() {
    return _ref.apply(this, arguments);
  };
}();
var createNewSpecialty = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(body, file) {
    var toBool, _body$name, _body$description, _body$markdownContent, isSelectableParsed, payload, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          // ép kiểu chuỗi từ form-data sang boolean
          toBool = function toBool(v) {
            if (typeof v === 'boolean') return v;
            if (v === 1 || v === '1') return true;
            if (v === 0 || v === '0') return false;
            if (typeof v === 'string') {
              var s = v.trim().toLowerCase();
              if (s === 'true' || s === 'on' || s === 'yes') return true;
              if (s === 'false' || s === 'off' || s === 'no') return false;
            }
            return undefined; // không truyền thì trả về undefined để dùng default
          };
          _context2.p = 1;
          isSelectableParsed = toBool(body.isSelectable);
          payload = {
            name: (_body$name = body.name) === null || _body$name === void 0 ? void 0 : _body$name.trim(),
            description: (_body$description = body.description) !== null && _body$description !== void 0 ? _body$description : null,
            markdownContent: (_body$markdownContent = body.markdownContent) !== null && _body$markdownContent !== void 0 ? _body$markdownContent : null,
            // nếu không truyền isSelectable thì mặc định true
            isSelectable: isSelectableParsed === undefined ? true : isSelectableParsed,
            image: file ? "/images/".concat(file.filename) : null
          };
          _context2.n = 2;
          return _index["default"].Specialty.create(payload);
        case 2:
          return _context2.a(2, {
            EC: 0,
            EM: 'Tạo mới thành công'
          });
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error('createNewSpecialty error:', _t2);
          return _context2.a(2, {
            EC: -1,
            EM: 'Lỗi khi tạo chuyên khoa'
          });
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return function createNewSpecialty(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var updateSpecialty = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id, body, file) {
    var spec, currentPath, parseBool, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _index["default"].Specialty.findByPk(id);
        case 1:
          spec = _context3.v;
          if (spec) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, {
            EC: -1,
            EM: 'Không tìm thấy chuyên khoa'
          });
        case 2:
          // Nếu có file mới thì xóa ảnh cũ
          if (file && spec.image) {
            currentPath = _path["default"].join(__dirname, '..', 'public', spec.image.startsWith('/') ? spec.image.slice(1) : spec.image);
            if (_fs["default"].existsSync(currentPath)) {
              _fs["default"].unlinkSync(currentPath); // 🔥 Xoá ảnh cũ khỏi thư mục images
            }
          }

          // Ép kiểu isSelectable
          parseBool = function parseBool(v) {
            if (typeof v === 'boolean') return v;
            if (v === 1 || v === '1') return true;
            if (v === 0 || v === '0') return false;
            if (typeof v === 'string') {
              var s = v.trim().toLowerCase();
              if (['true', 'on', 'yes'].includes(s)) return true;
              if (['false', 'off', 'no'].includes(s)) return false;
            }
            return spec.isSelectable; // nếu không gửi thì giữ nguyên
          }; // Cập nhật dữ liệu

          spec.name = body.name;
          spec.displayOrder = body.displayOrder;
          spec.description = body.description;
          spec.markdownContent = body.markdownContent;
          spec.isSelectable = parseBool(body.isSelectable); // ✅ thêm dòng này
          if (file) spec.image = "/images/".concat(file.filename);
          _context3.n = 3;
          return spec.save();
        case 3:
          return _context3.a(2, {
            EC: 0,
            EM: 'Cập nhật thành công'
          });
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          console.error('Update Specialty Error:', _t3);
          return _context3.a(2, {
            EC: -1,
            EM: 'Lỗi khi cập nhật'
          });
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return function updateSpecialty(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteSpecialty = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
    var specialty, imgPath, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _index["default"].Specialty.findByPk(id);
        case 1:
          specialty = _context4.v;
          if (specialty) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, {
            EC: 1,
            EM: 'Chuyên khoa không tồn tại'
          });
        case 2:
          // ✅ Xóa ảnh nếu có
          if (specialty.image) {
            imgPath = _path["default"].join(__dirname, '..', 'public', specialty.image.startsWith('/') ? specialty.image.slice(1) : specialty.image);
            if (_fs["default"].existsSync(imgPath)) {
              _fs["default"].unlinkSync(imgPath); // xóa ảnh
            }
          }
          _context4.n = 3;
          return specialty.destroy();
        case 3:
          return _context4.a(2, {
            EC: 0,
            EM: 'Xóa thành công'
          });
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          console.error('❌ deleteSpecialty error:', _t4);
          return _context4.a(2, {
            EC: -1,
            EM: 'Lỗi khi xóa'
          });
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function deleteSpecialty(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getAllSpecialties: getAllSpecialties,
  createNewSpecialty: createNewSpecialty,
  updateSpecialty: updateSpecialty,
  deleteSpecialty: deleteSpecialty
};