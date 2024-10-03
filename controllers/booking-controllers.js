import { booking } from "../models/booking-model.js"



export const getAllBookings = async (req, res) => {
    const newBooking = await new booking(req.body)
        const bookings = await newBooking.save()
    res.status(200).json(bookings)
}

export const getOneBooking = async (req, res, next) => {
    // try {
    //     const newBooking = await new booking()
    //     const bookings = await newBooking.save(req.body)
    //     res.status(200).json(bookings)
    // } catch (error) {
    //     next(error);
    // }
}

export const postAllBookings = async (req, res, next) => {
    try {
        const newBooking = new booking(req.body)
        const bookings = await newBooking.save()
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