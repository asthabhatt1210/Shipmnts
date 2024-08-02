const express = require('express');
const Location = require('../models/Location');
const router = express.Router();

router.post('/locations', async (req, res) => {
  const { name, latitude, longitude } = req.body;
  const location = new Location({ name, latitude, longitude });
  await location.save();
  res.status(201).json(location);
});

module.exports = router;
