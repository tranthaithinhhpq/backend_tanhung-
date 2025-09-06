import express from 'express';
import userController from '../controller/userController.js';
import groupController from '../controller/groupController.js';
import roleController from '../controller/roleController.js';
import doctorController from '../controller/doctorController.js';
import newsController from '../controller/newsController.js';
import apiController from '../controller/apiController.js';
import upload from '../middleware/uploadMiddleware.js';
import specialtyController from '../controller/specialtyController.js';
import deviceController from '../controller/deviceController.js';
import workingSlotOverrideController from '../controller/workingSlotOverrideController.js';
import servicePriceController from '../controller/servicePriceController.js';
import bookingController from '../controller/bookingController.js';
import drugPriceController from '../controller/drugPriceController.js';
import homepageController from '../controller/homepageController.js';
import pageImageContentController from '../controller/pageImageContentController.js';
import pageController from '../controller/pageController.js';
import questionController from "../controller/questionController.js";
import degreeController from '../controller/degreeController.js';
import positionController from '../controller/positionController.js';
import pageTextcontentController from '../controller/pageTextcontentController.js';
import pageVideoContentController from '../controller/pageVideoContentController.js';
import newsCategoryController from '../controller/newsCategoryController.js';
import workingSlotTemplateController from '../controller/workingSlotTemplateController.js';
import imageController from '../controller/imageController.js';
import holidayController from '../controller/holidayController.js';



import JWTAction from '../middleware/JWTAction.js';

const { checkUserJWT, checkUserPermission } = JWTAction;

const router = express.Router();

// All routes below require authentication
router.use(checkUserJWT, checkUserPermission);

// Route upload ảnh từ Quill


// Auth protected
router.post("/logout", apiController.handleLogout);
router.get("/account", userController.getUserAccount);

// Users
router.get("/admin/user/read", userController.read);
router.get("/admin/user/read-doctor", userController.readDoctor);
router.post("/admin/user", upload.single("image"), userController.create);
router.post("/admin/user/create", upload.single("image"), userController.create);
router.get("/admin/user/create", groupController.read);
router.put("/admin/user/:id", upload.single("image"), userController.update);

// router.delete("/user/delete/:id", userController.remove);
router.delete("/admin/user/delete", userController.remove);

// Doctor Info
router.post("/admin/doctor/create", upload.single("image"), doctorController.createDoctorInfo);
router.put("/admin/doctor/update/:id", upload.single("image"), doctorController.updateDoctorInfo);
router.get("/admin/doctor/update/:userId", userController.getDoctorInfoWithAllData);
router.delete("/admin/doctor/delete/:id", doctorController.deleteDoctorInfo);
router.get("/admin/doctor/read", doctorController.getDoctorList);

// Roles & groups
router.get("/admin/role/read", roleController.read);
router.put("/admin/role/update", roleController.updateRole);
router.post("/admin/role/create", roleController.create);
router.put("/admin/role/:id", roleController.update);
router.delete("/admin/role/:id", roleController.remove);
router.get("/admin/role/by-group/:groupId", roleController.getRoleByGroup);
router.post("/admin/role/assign-to-group", roleController.assignRoleToGroup);
router.get("/admin/group/read", groupController.read);

// News admin
router.get("/admin/news-admin", newsController.getList);
// router.get("/news-admin/:id", newsController.getDetail);
router.post("/admin/news/create", upload.single("image"), newsController.create);
router.put("/admin/news/edit/:id", upload.single("image"), newsController.update);
// router.put('/news/edit/:id', upload.single('image'), newsController.update);
router.get('/admin/news/edit/:id', newsController.getDetail);


router.delete("/admin/news/delete/:id", newsController.remove);
router.get('/admin/news/paginate', newsController.getNewsPaginate);


// specialty admin
router.get("/admin/specialty/read", specialtyController.readSpecialties);
router.post("/admin/specialty/create", upload.single("image"), specialtyController.createSpecialty);
router.put("/admin/specialty/update/:id", upload.single("image"), specialtyController.updateSpecialty);
router.delete("/admin/specialty/delete/:id", specialtyController.deleteSpecialty);
router.get("admin/specialty-filter/read", specialtyController.readSpecialties);
router.get("/admin/specialty/update", specialtyController.readSpecialties);

// Device admin
router.get('/admin/device/update', deviceController.readDevices);
router.post('/admin/device/create', upload.single('image'), deviceController.createDevice);
router.put('/admin/device/update/:id', upload.single('image'), deviceController.updateDevice);
router.delete('/admin/device/delete/:id', deviceController.deleteDevice);
router.get('/admin/device/read', deviceController.getDevicesPaginate);

// workingSlotOverride admin
router.get('/admin/doctor-day-off/read', workingSlotOverrideController.getDayOffPaginate);
router.get('/admin/doctor-day-off/create', workingSlotOverrideController.getDoctorSlotsByDate);
router.post('/admin/doctor-day-off/create', workingSlotOverrideController.createOverride);
// router.post('/admin/doctor-day-off/day-off-all', workingSlotOverrideController.dayOffAll);
router.put('/admin/doctor-day-off/update/:id', workingSlotOverrideController.updateOverride);
router.delete('/admin/doctor-day-off/delete/:id', workingSlotOverrideController.deleteOverride);
router.delete('/admin/doctor-day-off/bulk-delete', workingSlotOverrideController.bulkDelete);


// Service Price admin
router.get('/admin/service-price/read', servicePriceController.readPaginate); // phân trang
router.get('/admin/service-price/all', servicePriceController.getAllServicePrices); // toàn bộ (nếu cần)
router.post('/admin/service-price/create', servicePriceController.createServicePrice);
router.put('/admin/service-price/update/:id', servicePriceController.updateServicePrice);
router.delete('/admin/service-price/delete/:id', servicePriceController.deleteServicePrice);

// Booking admin
router.get('/admin/booking/read', bookingController.getBookingPaginate);
router.get('/admin/booking/update/:id', bookingController.getBookingById);
router.post("/admin/booking/create", bookingController.createBooking);

router.post('/admin/booking/create', bookingController.createBookingForClient);
router.delete('/admin/booking/delete/:id', bookingController.deleteBookingForClient);
router.put('/admin/booking/update/:id', bookingController.updateBooking);

// Drug Price admin
// router.get('/medicine/read', drugPriceController.readPaginate);
router.get('/admin/medicine/read', drugPriceController.readPaginate);
router.post('/admin/medicine/create', drugPriceController.createDrug);
router.put('/admin/medicine/update/:id', drugPriceController.updateDrug);
router.delete('/admin/medicine/delete/:id', drugPriceController.deleteDrug);

// Banner admin
router.get('/admin/banner/read', homepageController.getBannerPaginate);
router.post(
    '/admin/banner/create',
    upload.fields([
        { name: 'imageDesktop', maxCount: 1 },
        { name: 'imagePhone', maxCount: 1 },
    ]),
    homepageController.create
);

router.put(
    '/admin/banner/update/:id',
    upload.fields([
        { name: 'imageDesktop', maxCount: 1 },
        { name: 'imagePhone', maxCount: 1 }
    ]),
    homepageController.update
);
router.post('/admin/banner/delete', homepageController.remove);

// PageImageContent admin
router.get('/admin/page-image-content/read', pageImageContentController.getPaginate);
router.post(
    '/admin/page-image-content/create',
    upload.fields([{ name: 'image', maxCount: 1 }]),
    pageImageContentController.create
);
router.put(
    '/admin/page-image-content/update/:id',
    upload.fields([{ name: 'image', maxCount: 1 }]),
    pageImageContentController.update
);
router.delete('/admin/page-image-content/delete/:id', pageImageContentController.remove);


// page
router.post('/admin/page/create', upload.single('image'), pageController.createPage);
// router.get('/admin/page/read', pageController.getAllPages);
router.get('/admin/page/read', pageController.readPages);
router.get('/admin/page/update/:id', pageController.getPageById);
router.put('/admin/page/update/:id', upload.single('image'), pageController.updatePage);
router.delete('/admin/page/delete/:id', pageController.deletePage);


// question
router.get('/admin/question/read', questionController.getPaginate);
router.post('/admin/question/create', questionController.create);
router.put('/admin/question/update/:id', questionController.update);
router.post('/admin/question/delete', questionController.remove);

// Degree
router.get('/admin/degree', degreeController.getAll);
router.get('/admin/degree/paginate', degreeController.getPaginate);
router.post('/admin/degree/create', degreeController.create);
router.put('/admin/degree/edit/:id', degreeController.update);
router.post('/admin/degree/delete', degreeController.remove);

//Position
router.get('/admin/position/read', positionController.getPaginate);
router.post('/admin/position/create', positionController.create);
router.put('/admin/position/edit/:id', positionController.update);
router.post('/admin/position/delete', positionController.remove);

// pageTextContent
router.get('/admin/page-text-content/read', pageTextcontentController.getPaginate);
router.post('/admin/page-text-content/create', pageTextcontentController.create);
router.put('/admin/page-text-content/update/:id', pageTextcontentController.update);
router.post('/admin/page-text-content/delete', pageTextcontentController.remove);

// page-video-content
router.get('/admin/page-video-content/read', pageVideoContentController.getPaginate);
router.post('/admin/page-video-content/create', pageVideoContentController.create);
router.put('/admin/page-video-content/update/:id', pageVideoContentController.update);
router.post('/admin/page-video-content/delete', pageVideoContentController.remove);

// page-text-content
router.get('/admin/page-text-content/topbar', pageTextcontentController.getTopBarContent);

// news category
router.get('/admin/news-category/read', newsCategoryController.getPaginate);
router.post('/admin/news-category/create', newsCategoryController.create);
router.put('/admin/news-category/update/:id', newsCategoryController.update);
router.post('/admin/news-category/delete', newsCategoryController.remove);

// workingSlotTemplateController
router.get('/admin/working-slot-template/read', workingSlotTemplateController.getPaginate);
router.post('/admin/working-slot-template/create', workingSlotTemplateController.create);
router.put('/admin/working-slot-template/update/:id', workingSlotTemplateController.update);
router.post('/admin/working-slot-template/delete', workingSlotTemplateController.remove);


// Lấy danh sách ảnh
router.get('/admin/images/read', imageController.getImages);

// Xóa ảnh
router.delete('/admin/images/delete/:filename', imageController.removeImage);

//
router.get('/admin/holiday/paginate', holidayController.getPaginate);
router.post('/admin/holiday/create', holidayController.create);
router.put('/admin/holiday/update/:id', holidayController.update);
router.post('/admin/holiday/delete', holidayController.delete);






export default router;
