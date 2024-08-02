import express from 'express';
import TrafficUpdate from '../models/TrafficUpdate.mjs';

const router = express.Router();

router.post('/traffic-updates', async (req, res) => {
  const { road_id, timestamp, traffic_condition } = req.body;
  const trafficUpdate = new TrafficUpdate({ road_id, timestamp, traffic_condition });
  await trafficUpdate.save();
  res.status(201).json(trafficUpdate);
});

export default router;
