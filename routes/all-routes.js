//import express from "express";
import { Router } from "express";
import { getAllBookings, getOneBooking, postAllBookings, updateOneBooking, deleteOneBooking } from "../controllers/booking-controllers.js";
//import { getOneBooking } from "../controllers/booking-controllers.js";

export const bookingRouter = Router()
bookingRouter.get('/bookings', getAllBookings)
bookingRouter.get('/booking/:id', getOneBooking)
bookingRouter.post('/bookings', postAllBookings)
bookingRouter.patch('/booking/:id', updateOneBooking)
bookingRouter.delete('/booking/:id', deleteOneBooking)