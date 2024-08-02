import express from 'express';
import getShortestPath from '../utils/shortestPath.mjs';

const router = express.Router();

router.get('/shortest-path', async (req, res) => {
  const { start_location_id, end_location_id } = req.query;
  const result = await getShortestPath(start_location_id, end_location_id);
  res.status(200).json(result);
});

export default router;
