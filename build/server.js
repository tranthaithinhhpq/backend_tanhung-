"use strict";

require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine.js"));
var _initApiRoutes = _interopRequireDefault(require("./routes/initApiRoutes.js"));
var _cors = _interopRequireDefault(require("./config/cors.js"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();

// 👉 Trust IIS/ARR reverse proxy (trên cùng sau khi tạo app)
app.set('trust proxy', 'loopback'); // hoặc true; 'loopback' = 127.0.0.1 / ::1

// (Tuỳ chọn) Nếu về sau bạn bật HTTPS ở IIS và muốn req.secure = true,
// nhưng IIS không set X-Forwarded-Proto, thêm đoạn “map” từ x-arr-ssl:
app.use(function (req, res, next) {
  if (req.headers['x-arr-ssl']) req.headers['x-forwarded-proto'] = 'https';
  next();
});

//config cors
(0, _cors["default"])(app);

//config view engine
(0, _viewEngine["default"])(app);

// body-parser
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));

// cookie-parser
app.use((0, _cookieParser["default"])());

// Static images
app.use('/images', _express["default"]["static"]('./src/public/images'));

// Health/test
app.get('/welcome', function (req, res) {
  return res.status(200).type('text').send('welcome backend');
});
app.get('/', function (req, res) {
  return res.status(200).type('text').send('welcome backend');
});

// API routes
(0, _initApiRoutes["default"])(app);

// 404 fallback
app.use(function (req, res) {
  return res.send('404 not found');
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(">>> JWT Backend is running on the port = " + PORT);
});