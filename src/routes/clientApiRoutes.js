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
router.get("/news", newsController.getNewsList);
router.get("/news/:id", newsController.getNewsDetail);
router.get("/news-categories", newsController.getCategories);

// Device 
router.get('/device/list', deviceController.readDevices);
router.get('/device/detail/:id', deviceController.getDeviceDetail);

// Service 
router.get('/service-price/selectable/:specialtyId', servicePriceController.getSelectableServicesBySpecialty);

export default router;
