import { booking } from "../models/booking-model.js"



export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')
}

export const getOneBooking = async (req, res, next) => {
    try {
        const newBooking = await new booking()
        const bookings = await newBooking.save(req.body)
        res.status(200).json(bookings)
    } catch (error) {
        next(error);
    }
}

export const postAllBookings = async (req, res, next) => {
    try {
        const newBooking = await new booking()
        const bookings = await newBooking.save(req.body)
        res.status(201).json(bookings)
    } catch (error) {
        next(error);
    }
}

export const updateOneBooking = (req, res) => {
    res.status(200).json('Updated one Booking')
}

export const deleteOneBooking = (req, res) => {
    res.status(200).json('Deleted one Booking')
}