import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import locationRoutes from './routes/location.mjs';
import roadRoutes from './routes/road.mjs';
import trafficUpdateRoutes from './routes/trafficUpdate.mjs';
import shortestPathRoutes from './routes/shortestPath.mjs';
import trafficConditionRoutes from './routes/trafficCondition.mjs';
import trafficReportRoutes from './routes/trafficReport.mjs';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoUrl = process.env.MONGO_URL;
const port = process.env.PORT || 8000;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(locationRoutes);
app.use(roadRoutes);
app.use(trafficUpdateRoutes);
app.use(shortestPathRoutes);
app.use(trafficConditionRoutes);
app.use(trafficReportRoutes);

export default app;
