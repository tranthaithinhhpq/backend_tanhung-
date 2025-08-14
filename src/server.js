import 'dotenv/config'
import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initApiRoutes from "./routes/initApiRoutes.js";
import configCors from "./config/cors.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

// 👉 Trust IIS/ARR reverse proxy (trên cùng sau khi tạo app)
app.set('trust proxy', 'loopback'); // hoặc true; 'loopback' = 127.0.0.1 / ::1

// (Tuỳ chọn) Nếu về sau bạn bật HTTPS ở IIS và muốn req.secure = true,
// nhưng IIS không set X-Forwarded-Proto, thêm đoạn “map” từ x-arr-ssl:
app.use((req, res, next) => {
    if (req.headers['x-arr-ssl']) req.headers['x-forwarded-proto'] = 'https';
    next();
});

//config cors
configCors(app);

//config view engine
configViewEngine(app);

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cookie-parser
app.use(cookieParser());

// Static images
app.use('/images', express.static('./src/public/images'));

// Health/test
app.get('/welcome', (req, res) => res.status(200).type('text').send('welcome backend'));
app.get('/', (req, res) => res.status(200).type('text').send('welcome backend'));

// API routes
initApiRoutes(app);

// 404 fallback
app.use((req, res) => res.send('404 not found'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);
});
