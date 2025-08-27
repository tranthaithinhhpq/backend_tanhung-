"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../controller/userController"));
var _groupController = _interopRequireDefault(require("../controller/groupController"));
var _roleController = _interopRequireDefault(require("../controller/roleController"));
var _doctorController = _interopRequireDefault(require("../controller/doctorController"));
var _newsController = _interopRequireDefault(require("../controller/newsController"));
var _apiController = _interopRequireDefault(require("../controller/apiController"));
var _uploadMiddleware = _interopRequireDefault(require("../middleware/uploadMiddleware"));
var _specialtyController = _interopRequireDefault(require("../controller/specialtyController"));
var _deviceController = _interopRequireDefault(require("../controller/deviceController"));
var _workingSlotOverrideController = _interopRequireDefault(require("../controller/workingSlotOverrideController"));
var _servicePriceController = _interopRequireDefault(require("../controller/servicePriceController"));
var _bookingController = _interopRequireDefault(require("../controller/bookingController"));
var _drugPriceController = _interopRequireDefault(require("../controller/drugPriceController.js"));
var _homepageController = _interopRequireDefault(require("../controller/homepageController"));
var _pageImageContentController = _interopRequireDefault(require("../controller/pageImageContentController"));
var _pageController = _interopRequireDefault(require("../controller/pageController"));
var _questionController = _interopRequireDefault(require("../controller/questionController.js"));
var _degreeController = _interopRequireDefault(require("../controller/degreeController"));
var _positionController = _interopRequireDefault(require("../controller/positionController"));
var _pageTextcontentController = _interopRequireDefault(require("../controller/pageTextcontentController"));
var _pageVideoContentController = _interopRequireDefault(require("../controller/pageVideoContentController"));
var _newsCategoryController = _interopRequireDefault(require("../controller/newsCategoryController"));
var _workingSlotTemplateController = _interopRequireDefault(require("../controller/workingSlotTemplateController"));
var _imageController = _interopRequireDefault(require("../controller/imageController"));
var _JWTAction = require("../middleware/JWTAction");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();

// All routes below require authentication
router.use(_JWTAction.checkUserJWT, _JWTAction.checkUserPermission);

// Route upload ảnh từ Quill

// Auth protected
router.post("/logout", _apiController["default"].handleLogout);
router.get("/account", _userController["default"].getUserAccount);

// Users
router.get("/admin/user/read", _userController["default"].read);
router.get("/admin/user/read-doctor", _userController["default"].readDoctor);
router.post("/admin/user", _uploadMiddleware["default"].single("image"), _userController["default"].create);
router.post("/admin/user/create", _uploadMiddleware["default"].single("image"), _userController["default"].create);
router.get("/admin/user/create", _groupController["default"].read);
router.put("/admin/user/:id", _uploadMiddleware["default"].single("image"), _userController["default"].update);

// router.delete("/user/delete/:id", userController.remove);
router["delete"]("/admin/user/delete", _userController["default"].remove);

// Doctor Info
router.post("/admin/doctor/create", _uploadMiddleware["default"].single("image"), _doctorController["default"].createDoctorInfo);
router.put("/admin/doctor/update/:id", _uploadMiddleware["default"].single("image"), _doctorController["default"].updateDoctorInfo);
router.get("/admin/doctor/update/:userId", _userController["default"].getDoctorInfoWithAllData);
router["delete"]("/admin/doctor/delete/:id", _doctorController["default"].deleteDoctorInfo);
router.get("/admin/doctor/read", _doctorController["default"].getDoctorList);

// Roles & groups
router.get("/admin/role/read", _roleController["default"].read);
router.put("/admin/role/update", _roleController["default"].updateRole);
router.post("/admin/role/create", _roleController["default"].create);
router.put("/admin/role/:id", _roleController["default"].update);
router["delete"]("/admin/role/:id", _roleController["default"].remove);
router.get("/admin/role/by-group/:groupId", _roleController["default"].getRoleByGroup);
router.post("/admin/role/assign-to-group", _roleController["default"].assignRoleToGroup);
router.get("/admin/group/read", _groupController["default"].read);

// News admin
router.get("/admin/news-admin", _newsController["default"].getList);
// router.get("/news-admin/:id", newsController.getDetail);
router.post("/admin/news/create", _uploadMiddleware["default"].single("image"), _newsController["default"].create);
router.put("/admin/news/edit/:id", _uploadMiddleware["default"].single("image"), _newsController["default"].update);
// router.put('/news/edit/:id', upload.single('image'), newsController.update);
router.get('/admin/news/edit/:id', _newsController["default"].getDetail);
router["delete"]("/admin/news/delete/:id", _newsController["default"].remove);
router.get('/admin/news/paginate', _newsController["default"].getNewsPaginate);

// specialty admin
router.get("/admin/specialty/read", _specialtyController["default"].readSpecialties);
router.post("/admin/specialty/create", _uploadMiddleware["default"].single("image"), _specialtyController["default"].createSpecialty);
router.put("/admin/specialty/update/:id", _uploadMiddleware["default"].single("image"), _specialtyController["default"].updateSpecialty);
router["delete"]("/admin/specialty/delete/:id", _specialtyController["default"].deleteSpecialty);
router.get("admin/specialty-filter/read", _specialtyController["default"].readSpecialties);
router.get("/admin/specialty/update", _specialtyController["default"].readSpecialties);

// Device admin
router.get('/admin/device/update', _deviceController["default"].readDevices);
router.post('/admin/device/create', _uploadMiddleware["default"].single('image'), _deviceController["default"].createDevice);
router.put('/admin/device/update/:id', _uploadMiddleware["default"].single('image'), _deviceController["default"].updateDevice);
router["delete"]('/admin/device/delete/:id', _deviceController["default"].deleteDevice);
router.get('/admin/device/read', _deviceController["default"].getDevicesPaginate);

// workingSlotOverride admin
router.get('/admin/doctor-day-off/read', _workingSlotOverrideController["default"].getDayOffPaginate);
router.get('/admin/doctor-day-off/create', _workingSlotOverrideController["default"].getDoctorSlotsByDate);
router.post('/admin/doctor-day-off/create', _workingSlotOverrideController["default"].createOverride);
router.put('/admin/doctor-day-off/update/:id', _workingSlotOverrideController["default"].updateOverride);
router["delete"]('/admin/doctor-day-off/delete/:id', _workingSlotOverrideController["default"].deleteOverride);

// Service Price admin
router.get('/admin/service-price/read', _servicePriceController["default"].readPaginate); // phân trang
router.get('/admin/service-price/all', _servicePriceController["default"].getAllServicePrices); // toàn bộ (nếu cần)
router.post('/admin/service-price/create', _servicePriceController["default"].createServicePrice);
router.put('/admin/service-price/update/:id', _servicePriceController["default"].updateServicePrice);
router["delete"]('/admin/service-price/delete/:id', _servicePriceController["default"].deleteServicePrice);

// Booking admin
router.get('/admin/booking/read', _bookingController["default"].getBookingPaginate);
router.get('/admin/booking/update/:id', _bookingController["default"].getBookingById);
router.post("admin/booking/create", _bookingController["default"].createBooking);
router.post('/admin/booking/create', _bookingController["default"].createBookingForClient);
router["delete"]('/admin/booking/delete/:id', _bookingController["default"].deleteBookingForClient);
router.put('/admin/booking/update/:id', _bookingController["default"].updateBooking);

// Drug Price admin
// router.get('/medicine/read', drugPriceController.readPaginate);
router.get('/admin/medicine/read', _drugPriceController["default"].readPaginate);
router.post('/admin/medicine/create', _drugPriceController["default"].createDrug);
router.put('/admin/medicine/update/:id', _drugPriceController["default"].updateDrug);
router["delete"]('/admin/medicine/delete/:id', _drugPriceController["default"].deleteDrug);

// Banner admin
router.get('/admin/banner/read', _homepageController["default"].getBannerPaginate);
router.post('/admin/banner/create', _uploadMiddleware["default"].fields([{
  name: 'imageDesktop',
  maxCount: 1
}, {
  name: 'imagePhone',
  maxCount: 1
}]), _homepageController["default"].create);
router.put('/admin/banner/update/:id', _uploadMiddleware["default"].fields([{
  name: 'imageDesktop',
  maxCount: 1
}, {
  name: 'imagePhone',
  maxCount: 1
}]), _homepageController["default"].update);
router.post('/admin/banner/delete', _homepageController["default"].remove);

// PageImageContent admin
router.get('/admin/page-image-content/read', _pageImageContentController["default"].getPaginate);
router.post('/admin/page-image-content/create', _uploadMiddleware["default"].fields([{
  name: 'image',
  maxCount: 1
}]), _pageImageContentController["default"].create);
router.put('/admin/page-image-content/update/:id', _uploadMiddleware["default"].fields([{
  name: 'image',
  maxCount: 1
}]), _pageImageContentController["default"].update);
router["delete"]('/admin/page-image-content/delete/:id', _pageImageContentController["default"].remove);

// page
router.post('/admin/page/create', _uploadMiddleware["default"].single('image'), _pageController["default"].createPage);
router.get('/admin/page/read', _pageController["default"].getAllPages);
router.get('/admin/page/update/:id', _pageController["default"].getPageById);
router.put('/admin/page/update/:id', _uploadMiddleware["default"].single('image'), _pageController["default"].updatePage);
router["delete"]('/admin/page/delete/:id', _pageController["default"].deletePage);

// question
router.get('/admin/question/read', _questionController["default"].getPaginate);
router.post('/admin/question/create', _questionController["default"].create);
router.put('/admin/question/update/:id', _questionController["default"].update);
router.post('/admin/question/delete', _questionController["default"].remove);

// Degree
router.get('/admin/degree', _degreeController["default"].getAll);
router.get('/admin/degree/paginate', _degreeController["default"].getPaginate);
router.post('/admin/degree/create', _degreeController["default"].create);
router.put('/admin/degree/edit/:id', _degreeController["default"].update);
router.post('/admin/degree/delete', _degreeController["default"].remove);

//Position
router.get('/admin/position/read', _positionController["default"].getPaginate);
router.post('/admin/position/create', _positionController["default"].create);
router.put('/admin/position/edit/:id', _positionController["default"].update);
router.post('/admin/position/delete', _positionController["default"].remove);

// pageTextContent
router.get('/admin/page-text-content/read', _pageTextcontentController["default"].getPaginate);
router.post('/admin/page-text-content/create', _pageTextcontentController["default"].create);
router.put('/admin/page-text-content/update/:id', _pageTextcontentController["default"].update);
router.post('/admin/page-text-content/delete', _pageTextcontentController["default"].remove);

// page-video-content
router.get('/admin/page-video-content/read', _pageVideoContentController["default"].getPaginate);
router.post('/admin/page-video-content/create', _pageVideoContentController["default"].create);
router.put('/admin/page-video-content/update/:id', _pageVideoContentController["default"].update);
router.post('/admin/page-video-content/delete', _pageVideoContentController["default"].remove);

// page-text-content
router.get('/admin/page-text-content/topbar', _pageTextcontentController["default"].getTopBarContent);

// news category
router.get('/admin/news-category/read', _newsCategoryController["default"].getPaginate);
router.post('/admin/news-category/create', _newsCategoryController["default"].create);
router.put('/admin/news-category/update/:id', _newsCategoryController["default"].update);
router.post('/admin/news-category/delete', _newsCategoryController["default"].remove);

// workingSlotTemplateController
router.get('/admin/working-slot-template/read', _workingSlotTemplateController["default"].getPaginate);
router.post('/admin/working-slot-template/create', _workingSlotTemplateController["default"].create);
router.put('/admin/working-slot-template/update/:id', _workingSlotTemplateController["default"].update);
router.post('/admin/working-slot-template/delete', _workingSlotTemplateController["default"].remove);

// Lấy danh sách ảnh
router.get('/admin/images/read', _imageController["default"].getImages);

// Xóa ảnh
router["delete"]('/admin/images/delete/:filename', _imageController["default"].removeImage);
var _default = exports["default"] = router;