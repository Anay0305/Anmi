// Moment.js
const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Moment = mongoose.model('Moment', momentSchema);

module.exports = Moment;
