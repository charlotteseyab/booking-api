import express from 'express';
import { bookingRouter } from './routes/all-routes.js';
import mongoose from 'mongoose';
import 'dotenv/config'

await mongoose.connect(process.env.MONGO_URI);

//create app
const app = express();

//use middlewares
app.use(express.json());

//define route
app.get('/booking', (req,res,next) => {
    console.log(req.headers);
    res.json('You have booked a seat');
});


app.use(express.json())
app.use(bookingRouter)


//listen for incoming requests
app.listen(3000, () => {
    console.log('App is  listening on port 3000')
});
