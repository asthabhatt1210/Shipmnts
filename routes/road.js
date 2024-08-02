const express = require('express');
const Road = require('../models/Road');
const router = express.Router();

router.post('/roads', async (req, res) => {
  const { start_location_id, end_location_id, distance, traffic_condition } = req.body;
  const road = new Road({ start_location_id, end_location_id, distance, traffic_condition });
  await road.save();
  res.status(201).json(road);
});

module.exports = router;
