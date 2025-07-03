import express from "express";
import apiController from '../controller/apiController';
import userController from "../controller/userController";
import groupController from '../controller/groupController';
import degreeController from '../controller/degreeController';
import positionController from '../controller/positionController';
import doctorController from '../controller/doctorController';
import bookingController from '../controller/bookingController';
import specialtyController from '../controller/specialtyController';
import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction';
import roleController from '../controller/roleController';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();

const initApiRoutes = (app) => {
    // Public routes
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);
    router.get('/doctor-gallery', doctorController.readDoctorGallery);
    router.get('/doctor/detail/:userId', doctorController.getDoctorDetailById);
    router.get('/doctor/others/:userId', doctorController.getOtherDoctors);
    router.get('/doctor/by-specialty/:specialtyId', doctorController.getDoctorBySpecialty);
    router.post('/booking/create', bookingController.createBooking);
    router.get('/specialty/read', specialtyController.readSpecialties);

    // Private routes (có check JWT + permission)
    router.post("/logout", checkUserJWT, checkUserPermission, apiController.handleLogout);
    router.get("/account", checkUserJWT, checkUserPermission, userController.getUserAccount);

    router.get('/user/read', checkUserJWT, checkUserPermission, userController.read);
    router.post("/user/create", checkUserJWT, checkUserPermission, upload.single('image'), userController.create);
    router.put('/user/update', checkUserJWT, checkUserPermission, upload.single('image'), userController.update);
    router.delete('/user/delete', checkUserJWT, checkUserPermission, userController.remove);
    router.get('/user/read-doctor', checkUserJWT, checkUserPermission, userController.readDoctor);

    router.get('/role/read', checkUserJWT, checkUserPermission, roleController.read);
    router.post('/role/create', checkUserJWT, checkUserPermission, roleController.create);
    router.put('/role/update', checkUserJWT, checkUserPermission, roleController.update);
    router.delete('/role/delete', checkUserJWT, checkUserPermission, roleController.remove);
    router.get('/role/by-group/:groupId', checkUserJWT, checkUserPermission, roleController.getRoleByGroup);
    router.post('/role/assign-to-group', checkUserJWT, checkUserPermission, roleController.assignRoleToGroup);

    router.get('/group/read', checkUserJWT, checkUserPermission, groupController.read);

    router.get('/doctor-info/:userId', checkUserJWT, checkUserPermission, userController.getDoctorInfoWithAllData);
    router.post('/doctor-info/create', checkUserJWT, checkUserPermission, doctorController.createDoctorInfo);
    router.put('/doctor-info/update/:userId', checkUserJWT, checkUserPermission, doctorController.updateDoctorInfo);

    router.get('/position/read', checkUserJWT, checkUserPermission, positionController.read);
    router.get('/degree/read', checkUserJWT, checkUserPermission, degreeController.read);

    return app.use("/api/v1", router);
};

export default initApiRoutes;
