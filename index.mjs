import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const mongoUrl = process.env.MONGO_URL;

app.use(express.json());

import locationRoutes from './routes/location.mjs';
import roadRoutes from './routes/road.mjs';
import trafficUpdateRoutes from './routes/trafficUpdate.mjs';
import shortestPathRoutes from './routes/shortestPath.mjs';

app.use('/locations', locationRoutes);
app.use('/roads', roadRoutes);
app.use('/traffic-updates', trafficUpdateRoutes);
app.use('/shortest-path', shortestPathRoutes);

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
