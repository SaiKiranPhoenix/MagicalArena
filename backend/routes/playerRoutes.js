const express = require('express');
const router = express.Router();
const { createPlayer, getPlayers, getPlayerById, updatePlayer, deletePlayer } = require('../controllers/playerController');

// POST route for creating a player
router.post('/', createPlayer);

// GET routes for fetching players
router.get('/', getPlayers);
router.get('/:id', getPlayerById);

// PUT route for updating a player
router.put('/:id', updatePlayer);

// DELETE route for deleting a player
router.delete('/:id', deletePlayer);

module.exports = router;
