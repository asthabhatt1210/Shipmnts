import express from 'express';
import Road from '../models/Road.mjs';
import { Parser } from 'json2csv';

const router = express.Router();

router.get('/report/traffic', async (req, res) => {
  const roads = await Road.find();
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(roads);
  res.header('Content-Type', 'text/csv');
  res.attachment('traffic_report.csv');
  res.status(200).send(csv);
});

export default router;
