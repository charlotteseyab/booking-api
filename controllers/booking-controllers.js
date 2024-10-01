
export const getAllBookings = (req,res) => {
    res.status(200).json('These are all bookings')
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is one Booking')
}

export const postAllBookings = (req, res) => {
    res.status(201).json('Posted bookings')
}

export const updateOneBooking = (req, res) => {
    res.status(200).json('Updated one Booking')
}

export const deleteOneBooking = (req, res) => {
    res.status(200).json('Deleted one Booking')
}