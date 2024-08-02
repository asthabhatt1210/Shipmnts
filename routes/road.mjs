import express from 'express';
import Road from '../models/Road.mjs';

const router = express.Router();

router.post('/roads', async (req, res) => {
  const { start_location_id, end_location_id, distance, traffic_condition } = req.body;
  const road = new Road({ start_location_id, end_location_id, distance, traffic_condition });
  await road.save();
  res.status(201).json(road);
});

export default router;
