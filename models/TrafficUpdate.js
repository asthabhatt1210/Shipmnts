const mongoose = require('mongoose');

const trafficUpdateSchema = new mongoose.Schema({
  road_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Road' },
  timestamp: Date,
  traffic_condition: String
});

module.exports = mongoose.model('TrafficUpdate', trafficUpdateSchema);
