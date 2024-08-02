import express from 'express';
import getShortestPath from '../utils/pathfinding.mjs'; // Correct import path

const router = express.Router();

router.get('/shortest-path', async (req, res) => {
  try {
    const { start_location_id, end_location_id } = req.query;

    if (!start_location_id || !end_location_id) {
      return res.status(400).json({ message: 'Start and End Location IDs are required' });
    }

    // Calculate the shortest path
    const pathResult = await getShortestPath(start_location_id, end_location_id);

    res.status(200).json({
      path: pathResult.path,
      total_distance: pathResult.totalDistance,
      estimated_time: pathResult.totalDistance * 1.5 // Example calculation for estimated time
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
