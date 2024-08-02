import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const locationRoutes = require('./routes/location');
const roadRoutes = require('./routes/road');
const trafficUpdateRoutes = require('./routes/trafficUpdate');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000; 
const MONGO_URL = process.env.MONGO_URL; 

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.log(error));


app.use(locationRoutes);
app.use(roadRoutes);
app.use(trafficUpdateRoutes);





