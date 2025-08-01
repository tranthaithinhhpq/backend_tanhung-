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
import pageImageContentController from '../controller/pageImageContentController';
import pageController from '../controller/pageController';
import uploadController from "../controller/uploadController.js";
import questionController from "../controller/questionController.js";
import degreeController from '../controller/degreeController';
import positionController from '../controller/positionController';
import pageTextcontentController from '../controller/pageTextcontentController';
import pageVideoContentController from '../controller/pageVideoContentController';
import newsCategoryController from '../controller/newsCategoryController';
import workingSlotTemplateController from '../controller/workingSlotTemplateController';


import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction';

const router = express.Router();

// All routes below require authentication
router.use(checkUserJWT, checkUserPermission);

// Route upload ảnh từ Quill
router.post("/upload", upload.single("file"), uploadController.handleImageUpload);

// Auth protected
router.post("/logout", apiController.handleLogout);
router.get("/account", userController.getUserAccount);

// Users
router.get("/user/read", userController.read);
router.get("/user/read-doctor", userController.readDoctor);
router.post("/user", upload.single("image"), userController.create);
router.post("/user/create", upload.single("image"), userController.create);
router.put("/user/:id", upload.single("image"), userController.update);
// router.delete("/user/delete/:id", userController.remove);
router.delete("/user/delete", userController.remove);
// Doctor Info
router.get("/doctor-info/:userId", userController.getDoctorInfoWithAllData);
router.post("/doctor-info/create", upload.single("image"), doctorController.createDoctorInfo);
router.put("/doctor/:id", upload.single("image"), doctorController.updateDoctorInfo);
router.delete("/doctor/:id", doctorController.deleteDoctorInfo);
router.get("/doctor/read", doctorController.getDoctorList);

// Roles & groups
router.get("/role/read", roleController.read);
router.put("/role/update", roleController.updateRole);
router.post("/role/create", roleController.create);
router.put("/role/:id", roleController.update);
router.delete("/role/:id", roleController.remove);
router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
router.post("/role/assign-to-group", roleController.assignRoleToGroup);
router.get("/group/read", groupController.read);

// News admin
router.get("/news-admin", newsController.getList);
// router.get("/news-admin/:id", newsController.getDetail);
router.post("/news", upload.single("image"), newsController.create);
router.put("/news/edit/:id", upload.single("image"), newsController.update);
router.get('/admin/news/:id', newsController.getDetail);
router.put('/news/:id', upload.single('image'), newsController.update);
router.delete("/news/:id", newsController.remove);
router.get('/news/paginate', newsController.getNewsPaginate);

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
router.get('/device/paginate', deviceController.getDevicesPaginate);

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

// Banner admin
router.get('/banner', homepageController.getBannerPaginate);
router.post(
    '/banner',
    upload.fields([
        { name: 'imageDesktop', maxCount: 1 },
        { name: 'imagePhone', maxCount: 1 },
    ]),
    homepageController.create
);

router.put(
    '/banner/:id',
    upload.fields([
        { name: 'imageDesktop', maxCount: 1 },
        { name: 'imagePhone', maxCount: 1 }
    ]),
    homepageController.update
);
router.post('/banner/delete', homepageController.remove);

// PageImageContent admin
router.get('/pageimagecontent', pageImageContentController.getPaginate);
router.post(
    '/pageimagecontent',
    upload.fields([{ name: 'image', maxCount: 1 }]),
    pageImageContentController.create
);
router.put(
    '/pageimagecontent/:id',
    upload.fields([{ name: 'image', maxCount: 1 }]),
    pageImageContentController.update
);
router.delete('/pageimagecontent/:id', pageImageContentController.remove);


// page
router.post('/page', upload.single('image'), pageController.createPage);
router.get('/page', pageController.getAllPages);
router.get('/page/:id', pageController.getPageById);
router.put('/page/:id', upload.single('image'), pageController.updatePage);
router.delete('/page/:id', pageController.deletePage);


// question
router.get('/question', questionController.getPaginate);
router.post('/question', questionController.create);
router.put('/question/:id', questionController.update);
router.post('/question/delete', questionController.remove);

// Degree
router.get('/degree', degreeController.getAll);
router.get('/degree/paginate', degreeController.getPaginate);
router.post('/degree', degreeController.create);
router.put('/degree/:id', degreeController.update);
router.post('/degree/delete', degreeController.remove);

//Position
router.get('/position/paginate', positionController.getPaginate);
router.post('/position', positionController.create);
router.put('/position/:id', positionController.update);
router.post('/position/delete', positionController.remove);

// pageTextContent
router.get('/page-text-content/paginate', pageTextcontentController.getPaginate);
router.post('/page-text-content', pageTextcontentController.create);
router.put('/page-text-content/:id', pageTextcontentController.update);
router.post('/page-text-content/delete', pageTextcontentController.remove);

// page-video-content
router.get('/page-video-content/paginate', pageVideoContentController.getPaginate);
router.post('/page-video-content', pageVideoContentController.create);
router.put('/page-video-content/:id', pageVideoContentController.update);
router.post('/page-video-content/delete', pageVideoContentController.remove);

// page-text-content
router.get('/page-text-content/topbar', pageTextcontentController.getTopBarContent);

// news category
router.get('/news-category/paginate', newsCategoryController.getPaginate);
router.post('/news-category', newsCategoryController.create);
router.put('/news-category/:id', newsCategoryController.update);
router.post('/news-category/delete', newsCategoryController.remove);

// workingSlotTemplateController
router.get('/working-slot-template/paginate', workingSlotTemplateController.getPaginate);
router.get('/working-slot-template/paginate', workingSlotTemplateController.getPaginate);
router.post('/working-slot-template', workingSlotTemplateController.create);
router.put('/working-slot-template/:id', workingSlotTemplateController.update);
router.post('/working-slot-template/delete', workingSlotTemplateController.remove);

router.get('/doctor-schedule', doctorController.getAllDoctors);



export default router;
