import express from "express";
import apiController from '../controller/apiController'
import userController from "../controller/userController"
import groupController from '../controller/groupController';
import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction'
import roleController from '../controller/roleController';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();
/**
 * 
 * @param {*} app : express app
 */



const initApiRoutes = (app) => {


    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);
    router.all('*', checkUserJWT, checkUserPermission);
    router.post("/logout", apiController.handleLogout);
    router.get("/account", userController.getUserAccount);

    //user routes
    router.get('/user/read', userController.read);
    router.post("/user/create", upload.single('image'), userController.create);
    // routes/api.js
    router.put('/user/update', upload.single('image'), userController.update);
    router.delete("/user/delete", userController.remove);
    router.get("/user/read-doctor", userController.readDoctor);


    // role routes
    router.get("/role/read", roleController.read);
    router.post("/role/create", roleController.create);
    router.put("/role/update", roleController.update);
    router.delete("/role/delete", roleController.remove);
    router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
    router.post("/role/assign-to-group", roleController.assignRoleToGroup);

    // group routes
    router.get("/group/read", groupController.read);

    // doctor routes

    router.post('/doctor-info', upload.single('image'), doctorController.createDoctorInfo);
    router.put('/doctor-info/:userId', upload.single('image'), doctorController.updateDoctorInfo);



    return app.use("/api/v1", router);
}
export default initApiRoutes;