// backend/models/Player.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  health: { type: Number, required: true },
  strength: { type: Number, required: true },
  attack: { type: Number, required: true },
});

module.exports = mongoose.model('Player', playerSchema);
