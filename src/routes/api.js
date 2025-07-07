import express from "express";

// Controllers
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import degreeController from "../controller/degreeController";
import positionController from "../controller/positionController";
import doctorController from "../controller/doctorController";
import bookingController from "../controller/bookingController";
import specialtyController from "../controller/specialtyController";
import newsController from "../controller/newsController";
import roleController from "../controller/roleController";

// Middlewares
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";
import upload from "../middleware/uploadMiddleware";

const router = express.Router();

/**
 * Attach every route to the given Express application under the prefix "/api/v1".
 *
 * 1. PUBLIC  –  No authentication or authorisation required
 * 2. PROTECTED – Requires valid JWT and sufficient permission level
 *
 * Keeping a strict, top‑to‑bottom order helps to avoid accidental route shadowing.
 */
const initApiRoutes = (app) => {
    router.get('/news-admin', newsController.getList);
    /* ------------------------------------------------------------------------- */
    /*  PUBLIC ROUTES                                                            */
    /* ------------------------------------------------------------------------- */

    // Auth
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    // Doctor – public catalogue
    router.get("/doctor-gallery", doctorController.readDoctorGallery);
    router.get("/doctor/by-specialty/:specialtyId", doctorController.getDoctorBySpecialty);

    // Booking
    router.post("/booking/create", bookingController.createBooking);

    // Reference data
    router.get("/specialty/read", specialtyController.readSpecialties);

    // News (public)
    router.get("/news", newsController.getNewsList);
    router.get("/news/:id", newsController.getNewsDetail);
    router.get("/news-categories", newsController.getCategories);

    /* ------------------------------------------------------------------------- */
    /*  PROTECTED ROUTES                                                         */
    /* ------------------------------------------------------------------------- */

    // Everything declared after this line requires a valid JWT + permission.
    router.use(checkUserJWT, checkUserPermission);

    /* ---------- Auth --------------------------------------------------------- */
    router.post("/logout", apiController.handleLogout);
    router.get("/account", checkUserJWT, checkUserPermission, userController.getUserAccount);

    /* ---------- User management --------------------------------------------- */
    router.get("/user/read", userController.read);
    router.post("/user", upload.single("image"), userController.create);
    router.put("/user/:id", upload.single("image"), userController.update);
    router.delete("/user/:id", userController.remove);
    router.get("/user/read-doctor", userController.readDoctor);
    router.post("/user/create", checkUserJWT, checkUserPermission, upload.single('image'), userController.create);

    /* ---------- Roles & Groups ---------------------------------------------- */
    router.get("/role/read", checkUserJWT, checkUserPermission, roleController.read);
    router.post("/role", checkUserJWT, checkUserPermission, roleController.create);
    router.put("/role/:id", checkUserJWT, checkUserPermission, roleController.update);
    router.delete("/role/:id", checkUserJWT, checkUserPermission, roleController.remove);
    router.get("/role/by-group/:groupId", checkUserJWT, checkUserPermission, roleController.getRoleByGroup);
    router.post("/role/assign-to-group", checkUserJWT, checkUserPermission, roleController.assignRoleToGroup);
    router.post('/role/create', checkUserJWT, checkUserPermission, roleController.create);

    router.get("/group/read", groupController.read);

    /* ---------- Doctor info (admin) ----------------------------------------- */
    router.get("/doctor-info/:userId", checkUserJWT, checkUserPermission, userController.getDoctorInfoWithAllData);
    router.post('/doctor-info/create', checkUserJWT, checkUserPermission, upload.single('image'), doctorController.createDoctorInfo);
    router.get('/doctor/list', checkUserJWT, checkUserPermission, doctorController.getDoctorList);
    router.get("/doctor/others/:id", checkUserJWT, checkUserPermission, doctorController.getOtherDoctors);






    /* ---------- Doctor catalogue (admin) ------------------------------------ */
    router.get("/doctor/list", checkUserJWT, checkUserPermission, doctorController.getDoctorList);
    router.get("/doctor/detail/:id", checkUserJWT, checkUserPermission, doctorController.getDoctorDetailById);


    router.put('/doctor/:id', checkUserJWT, checkUserPermission, upload.single("image"), doctorController.updateDoctorInfo);
    router.delete('/doctor/:id', checkUserJWT, checkUserPermission, doctorController.deleteDoctorInfo);

    /* ---------- Static reference tables ------------------------------------- */
    router.get("/position/read", positionController.read);
    router.get("/degree/read", degreeController.read);

    /* ---------- News (admin) ------------------------------------------------- */
    router.get("/news-admin", checkUserJWT, checkUserPermission, newsController.getList);
    router.get("/news-admin/:id", checkUserJWT, checkUserPermission, newsController.getDetail);
    router.post("/news", checkUserJWT, checkUserPermission, upload.single("image"), newsController.create);
    router.put("/news/:id", checkUserJWT, checkUserPermission, upload.single("image"), newsController.update);
    router.delete("/news/:id", checkUserJWT, checkUserPermission, newsController.remove);

    /* ------------------------------------------------------------------------- */
    // Mount router
    app.use("/api/v1", router);
};

export default initApiRoutes;
