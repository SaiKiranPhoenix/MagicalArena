// backend/controllers/playerController.js
const Player = require('../models/Player');

// Create a new player
const createPlayer = async (req, res) => {
  try {
    console.log('Received player data:', req.body); // Log the received data for debugging
    const { name, health, strength, attack } = req.body;

    if (!name || !health || !strength || !attack) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const player = await Player.create({ name, health, strength, attack });
    res.status(201).json(player);
  } catch (error) {
    console.error('Error creating player:', error); // Log any error that occurs
    res.status(500).json({ error: 'Failed to create player' });
  }
};

// Get all players
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch players' });
  }
};

// Get a specific player by ID
const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch player' });
  }
};

// Update a player
const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update player' });
  }
};

// Delete a player
const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete player' });
  }
};

module.exports = {
  createPlayer,
  getPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
};
