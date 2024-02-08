// route.js
const express = require('express');
const router = express.Router();
const Moment = require('./models/Moment');

// Get all moments
router.get('/moments', async (req, res) => {
  try {
    const moments = await Moment.find();
    res.json(moments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new moment
router.post('/moments', async (req, res) => {
  const moment = new Moment({
    date: req.body.date,
    message: req.body.message,
  });

  try {
    const newMoment = await moment.save();
    res.status(201).json(newMoment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
