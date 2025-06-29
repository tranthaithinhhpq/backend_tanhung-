import express from "express";
import apiController from '../controller/apiController'
import userController from "../controller/userController"
import groupController from '../controller/groupController';
import degreeController from '../controller/degreeController';
import positionController from '../controller/positionController';
import doctorController from '../controller/doctorController';
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
    router.get('/doctor-info/:userId', userController.getDoctorInfoWithAllData);
    router.post('/doctor-info/create', doctorController.createDoctorInfo);
    router.put('/doctor-info/update/:userId', doctorController.updateDoctorInfo);


    // position rotes
    router.get('/position/read', positionController.read);
    // degree rotes
    router.get('/degree/read', degreeController.read);




    return app.use("/api/v1", router);
}
export default initApiRoutes;