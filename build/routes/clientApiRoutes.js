"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _apiController = _interopRequireDefault(require("../controller/apiController"));
var _doctorController = _interopRequireDefault(require("../controller/doctorController"));
var _bookingController = _interopRequireDefault(require("../controller/bookingController"));
var _specialtyController = _interopRequireDefault(require("../controller/specialtyController"));
var _positionController = _interopRequireDefault(require("../controller/positionController"));
var _degreeController = _interopRequireDefault(require("../controller/degreeController"));
var _newsController = _interopRequireDefault(require("../controller/newsController"));
var _deviceController = _interopRequireDefault(require("../controller/deviceController"));
var _servicePriceController = _interopRequireDefault(require("../controller/servicePriceController"));
var _drugPriceController = _interopRequireDefault(require("../controller/drugPriceController"));
var _homepageController = _interopRequireDefault(require("../controller/homepageController"));
var _pageController = _interopRequireDefault(require("../controller/pageController"));
var _questionController = _interopRequireDefault(require("../controller/questionController.js"));
var _searchController = _interopRequireDefault(require("../controller/searchController.js"));
var _newsCategoryController = _interopRequireDefault(require("../controller/newsCategoryController.js"));
var _pageTextcontentController = _interopRequireDefault(require("../controller/pageTextcontentController.js"));
var _uploadController = _interopRequireDefault(require("../controller/uploadController.js"));
var _uploadMiddleware = _interopRequireDefault(require("../middleware/uploadMiddleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();

// Auth
router.post("/register", _apiController["default"].handleRegister);
router.post("/login", _apiController["default"].handleLogin);

// Doctor (public)
router.get("/doctor/list", _doctorController["default"].getDoctorList);
router.get("/doctor/detail/:id", _doctorController["default"].getDoctorDetailById);
router.get("/doctor/others/:id", _doctorController["default"].getOtherDoctors);
router.get("/doctor/by-specialty/:specialtyId", _doctorController["default"].getDoctorBySpecialty);
router.get("/doctor-gallery", _doctorController["default"].readDoctorGallery);
router.get("/doctor/:id/schedule", _doctorController["default"].getDoctorAvailableSchedule);

// Booking
router.post("/booking/create", _bookingController["default"].createBooking);

// Static data
router.get("/specialty/read", _specialtyController["default"].readSpecialties);
router.get("/position/read", _positionController["default"].read);
router.get("/degree/read", _degreeController["default"].read);

// News (public)
router.get("/client/news", _newsController["default"].getNewsList);
router.get("/client/news/:id", _newsController["default"].getNewsDetail);
router.get("/news-categories", _newsController["default"].getCategories);
router.get('/news-categories-nav', _newsCategoryController["default"].getAllCategories);
router.get('/newscategory/list', _newsController["default"].listNewsCategories);

// Device 

router.get('/client/device', _deviceController["default"].readDevices);
router.get('/device/detail/:id', _deviceController["default"].getDeviceDetail);

// Service Prices
router.get('/service-price/selectable/:specialtyId', _servicePriceController["default"].getSelectableServicesBySpecialty);
router.get('/serviceprice', _servicePriceController["default"].getPublicServicePrices);
router.get('/service-price/groups', _servicePriceController["default"].getAllGroups);

// Drugs Prices
router.get('/client/medicine', _drugPriceController["default"].getPublicDrugPrices);

// Home 
router.get('/homepage', _homepageController["default"].getPublicHomepage);
router.get('/client/banner', _homepageController["default"].getPublicBanners);
router.get('/client/home-sections-img', _homepageController["default"].getHomeSections);
router.get('/client/home-videos', _homepageController["default"].getHomeVideos);
router.get('/client/logo', _homepageController["default"].getLogoImage);
router.get('/client/home-sections', _homepageController["default"].handleGetHomeIntroSections);

// router.get('/client/news/preview', newsController.getPaginatedNewsPreview);
router.get("/client/news-preview", _newsController["default"].getNewsSlider);
router.get('/client/statistics', _homepageController["default"].getStatistics);
router.get('/client/partners', _homepageController["default"].getPartnerImages);

// Page
router.get('/client/page', _pageController["default"].getPagesBySection);
router.get('/client/page/:slug', _pageController["default"].getPageBySlug);

// Question
router.post('/question', _questionController["default"].submitQuestion);

// History
router.get('/booking-history', _bookingController["default"].getBookingsByPhone);

// Search
router.get("/search", _searchController["default"].searchAll);
router.get("/doctor/read", _doctorController["default"].getDoctorList);
router.get('/doctor-schedule', _doctorController["default"].getAllDoctors);
router.get('/page-text-content/topbar', _pageTextcontentController["default"].getTopBarContent);
router.post("/upload", _uploadMiddleware["default"].single("file"), _uploadController["default"].handleImageUpload);
var _default = exports["default"] = router;