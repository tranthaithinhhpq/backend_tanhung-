import express from 'express';
import apiController from '../controller/apiController';
import doctorController from '../controller/doctorController';
import bookingController from '../controller/bookingController';
import specialtyController from '../controller/specialtyController';
import positionController from '../controller/positionController';
import degreeController from '../controller/degreeController';
import newsController from '../controller/newsController';
import deviceController from '../controller/deviceController';
import servicePriceController from '../controller/servicePriceController';
import drugPriceController from '../controller/drugPriceController';
import homepageController from '../controller/homepageController';
import pageController from '../controller/pageController';
import questionController from "../controller/questionController.js";
import searchController from "../controller/searchController.js";
import newsCategoryController from "../controller/newsCategoryController.js";

const router = express.Router();

// Auth
router.post("/register", apiController.handleRegister);
router.post("/login", apiController.handleLogin);

// Doctor (public)
router.get("/doctor/list", doctorController.getDoctorList);
router.get("/doctor/detail/:id", doctorController.getDoctorDetailById);
router.get("/doctor/others/:id", doctorController.getOtherDoctors);
router.get("/doctor/by-specialty/:specialtyId", doctorController.getDoctorBySpecialty);
router.get("/doctor-gallery", doctorController.readDoctorGallery);
router.get("/doctor/:id/schedule", doctorController.getDoctorAvailableSchedule);

// Booking
router.post("/booking/create", bookingController.createBooking);

// Static data
router.get("/specialty/read", specialtyController.readSpecialties);
router.get("/position/read", positionController.read);
router.get("/degree/read", degreeController.read);

// News (public)
router.get("/client/news", newsController.getNewsList);
router.get("/client/news/:id", newsController.getNewsDetail);
router.get("/news-categories", newsController.getCategories);
router.get('/news-categories-nav', newsCategoryController.getAllCategories);

// Device 

router.get('/client/device', deviceController.readDevices);
router.get('/device/detail/:id', deviceController.getDeviceDetail);

// Service Prices
router.get('/service-price/selectable/:specialtyId', servicePriceController.getSelectableServicesBySpecialty);
router.get('/serviceprice', servicePriceController.getPublicServicePrices);
// Drugs Prices
router.get('/client/medicine', drugPriceController.getPublicDrugPrices);

// Home 
router.get('/homepage', homepageController.getPublicHomepage);
router.get('/client/banner', homepageController.getPublicBanners);
router.get('/client/home-sections', homepageController.getHomeSections);
router.get('/client/home-videos', homepageController.getHomeVideos);
router.get('/client/logo', homepageController.getLogoImage);

// router.get('/client/news/preview', newsController.getPaginatedNewsPreview);
router.get("/client/news-preview", newsController.getNewsSlider);
router.get('/client/statistics', homepageController.getStatistics);
router.get('/client/partners', homepageController.getPartnerImages);

// Page
router.get('/client/page', pageController.getPagesBySection);
router.get('/client/page/:slug', pageController.getPageBySlug);

// Question
router.post('/question', questionController.submitQuestion);

// History
router.get('/booking-history', bookingController.getBookingsByPhone);

// Search
router.get("/search", searchController.searchAll);

router.get("/doctor/read", doctorController.getDoctorList);


export default router;
