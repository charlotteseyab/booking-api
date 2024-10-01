import express from 'express';
import { bookingRouter } from './routes/all-routes.js';
//import { getOneBooking } from './controllers/booking-controllers.js';

//craete app
const app = express();
//define route
app.get('/booking', (req,res,next) => {
    console.log(req.headers);
    res.json('You have booked a seat');
});

app.use(bookingRouter)

//listen for incoming requests
app.listen(3000, () => {
    console.log('App is  listening on port 3000')
});
