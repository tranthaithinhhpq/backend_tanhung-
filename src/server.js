import 'dotenv/config';
import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initApiRoutes from "./routes/initApiRoutes.js";
import configCors from "./config/cors.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";

const app = express();

// Trust reverse proxy
app.set('trust proxy', 'loopback');

// Map ARR SSL header -> HTTPS
app.use((req, res, next) => {
    if (req.headers['x-arr-ssl']) req.headers['x-forwarded-proto'] = 'https';
    next();
});

// Middlewares
configCors(app);
configViewEngine(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Static files
app.use('/images', express.static(path.resolve("src/public/images")));

// Health check
app.get(['/welcome', '/'], (req, res) => res.status(200).send("welcome backend"));

// API routes
initApiRoutes(app);

// 404 handler
app.use((req, res) => res.status(404).json({ EC: -1, EM: "API not found" }));

// Error handler
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ EC: -1, EM: "Internal server error" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);
});
