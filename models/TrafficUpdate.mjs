import mongoose from 'mongoose';

const trafficUpdateSchema = new mongoose.Schema({
  road_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Road' },
  timestamp: Date,
  traffic_condition: String
});

export default mongoose.model('TrafficUpdate', trafficUpdateSchema);
