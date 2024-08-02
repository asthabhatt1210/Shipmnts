const mongoose = require('mongoose');

const roadSchema = new mongoose.Schema({
  start_location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  end_location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  distance: Number,
  traffic_condition: String
});

module.exports = mongoose.model('Road', roadSchema);
