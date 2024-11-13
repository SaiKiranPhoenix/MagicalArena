// backend/models/Match.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  playerA: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  playerB: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  log: [String],
  winner: String,
});

module.exports = mongoose.model('Match', matchSchema);
