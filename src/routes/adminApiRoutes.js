import express from 'express';
import userController from '../controller/userController';
import groupController from '../controller/groupController';
import roleController from '../controller/roleController';
import doctorController from '../controller/doctorController';
import newsController from '../controller/newsController';
import apiController from '../controller/apiController';
import upload from '../middleware/uploadMiddleware';
import specialtyController from '../controller/specialtyController';
import deviceController from '../controller/deviceController';
import workingSlotOverrideController from '../controller/workingSlotOverrideController';
import servicePriceController from '../controller/servicePriceController';
import bookingController from '../controller/bookingController';
import drugPriceController from '../controller/drugPriceController.js';
import homepageController from '../controller/homepageController';

import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction';

const router = express.Router();

// All routes below require authentication
router.use(checkUserJWT, checkUserPermission);

// Auth protected
router.post("/logout", apiController.handleLogout);
router.get("/account", userController.getUserAccount);

// Users
router.get("/user/read", userController.read);
router.get("/user/read-doctor", userController.readDoctor);
router.post("/user", upload.single("image"), userController.create);
router.post("/user/create", upload.single("image"), userController.create);
router.put("/user/:id", upload.single("image"), userController.update);
router.delete("/user/:id", userController.remove);

// Doctor Info
router.get("/doctor-info/:userId", userController.getDoctorInfoWithAllData);
router.post("/doctor-info/create", upload.single("image"), doctorController.createDoctorInfo);
router.put("/doctor/:id", upload.single("image"), doctorController.updateDoctorInfo);
router.delete("/doctor/:id", doctorController.deleteDoctorInfo);

// Roles & groups
router.get("/role/read", roleController.read);
router.post("/role", roleController.create);
router.post("/role/create", roleController.create);
router.put("/role/:id", roleController.update);
router.delete("/role/:id", roleController.remove);
router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
router.post("/role/assign-to-group", roleController.assignRoleToGroup);
router.get("/group/read", groupController.read);

// News admin
router.get("/news-admin", newsController.getList);
router.get("/news-admin/:id", newsController.getDetail);
router.post("/news", upload.single("image"), newsController.create);
router.put("/news/:id", upload.single("image"), newsController.update);
router.delete("/news/:id", newsController.remove);

// specialty admin
router.get("/specialty/read", specialtyController.readSpecialties);
router.post("/specialty", upload.single("image"), specialtyController.createSpecialty);
router.put("/specialty/:id", upload.single("image"), specialtyController.updateSpecialty);
router.delete("/specialty/:id", specialtyController.deleteSpecialty);

// Device admin
router.get('/device/read', deviceController.readDevices);
router.post('/device', upload.single('image'), deviceController.createDevice);
router.put('/device/:id', upload.single('image'), deviceController.updateDevice);
router.delete('/device/:id', deviceController.deleteDevice);

// workingSlotOverride admin
router.get('/doctor-day-off', workingSlotOverrideController.getOverrides);
router.get('/doctor-day-off/slots', workingSlotOverrideController.getDoctorSlotsByDate);
router.post('/doctor-day-off', workingSlotOverrideController.createOverride);
router.put('/doctor-day-off/:id', workingSlotOverrideController.updateOverride);
router.delete('/doctor-day-off/:id', workingSlotOverrideController.deleteOverride);
router.get('/doctor-day-off-paginate', workingSlotOverrideController.getDayOffPaginate);

// Service Price admin
router.get('/service-price/read', servicePriceController.readPaginate); // phân trang
router.get('/service-price/all', servicePriceController.getAllServicePrices); // toàn bộ (nếu cần)
router.post('/service-price', servicePriceController.createServicePrice);
router.put('/service-price/:id', servicePriceController.updateServicePrice);
router.delete('/service-price/:id', servicePriceController.deleteServicePrice);

// Booking admin
router.get('/booking', bookingController.getBookingPaginate);
router.get('/booking/:id', bookingController.getBookingById);

router.post('/booking/create', bookingController.createBookingForClient);
router.delete('/booking/:id', bookingController.deleteBookingForClient);
router.put('/booking/:id', bookingController.updateBooking);

// Drug Price admin
// router.get('/medicine/read', drugPriceController.readPaginate);
router.get('/medicine', drugPriceController.readPaginate);
router.post('/medicine', drugPriceController.createDrug);
router.put('/medicine/:id', drugPriceController.updateDrug);
router.delete('/medicine/:id', drugPriceController.deleteDrug);

// ✅ Home admin
router.get('/banner', homepageController.getAdminBanners);
router.put('/banner/:id', homepageController.updateBanner);


export default router;
