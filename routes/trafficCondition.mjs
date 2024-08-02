import express from 'express';
import Road from '../models/Road.mjs';

const router = express.Router();

router.get('/roads/:id/traffic-condition', async (req, res) => {
  const road = await Road.findById(req.params.id);
  res.status(200).json({ traffic_condition: road.traffic_condition });
});

export default router;
