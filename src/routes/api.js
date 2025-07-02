import express from "express";
import apiController from '../controller/apiController';
import userController from "../controller/userController";
import groupController from '../controller/groupController';
import degreeController from '../controller/degreeController';
import positionController from '../controller/positionController';
import doctorController from '../controller/doctorController';
import bookingController from '../controller/bookingController';
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




    // Check JWT + permission cho route /admin/**
    router.all('*', checkUserJWT, checkUserPermission);

    // Private routes (nhưng không cần check quyền nếu không bắt đầu bằng /admin)
    router.post("/logout", apiController.handleLogout);
    router.get("/account", userController.getUserAccount);

    router.get('/user/read', userController.read);
    router.post("/user/create", upload.single('image'), userController.create);
    router.put('/user/update', upload.single('image'), userController.update);
    router.delete('/user/delete', userController.remove);
    router.get('/user/read-doctor', userController.readDoctor);

    router.get('/role/read', roleController.read);
    router.post('/role/create', roleController.create);
    router.put('/role/update', roleController.update);
    router.delete('/role/delete', roleController.remove);
    router.get('/role/by-group/:groupId', roleController.getRoleByGroup);
    router.post('/role/assign-to-group', roleController.assignRoleToGroup);

    router.get('/group/read', groupController.read);

    router.get('/doctor-info/:userId', userController.getDoctorInfoWithAllData);
    router.post('/doctor-info/create', doctorController.createDoctorInfo);
    router.put('/doctor-info/update/:userId', doctorController.updateDoctorInfo);

    router.get('/position/read', positionController.read);
    router.get('/degree/read', degreeController.read);

    return app.use("/api/v1", router);
};


export default initApiRoutes;