import express from "express";
import clientRoutes from './clientApiRoutes.js';
import adminRoutes from './adminApiRoutes';

const initApiRoutes = (app) => {
    const router = express.Router();

    // Mount client routes (public)
    router.use('/', clientRoutes);

    // Mount admin routes (protected inside admin file)
    router.use('/', adminRoutes);

    app.use('/api/v1', router);
};

export default initApiRoutes;
