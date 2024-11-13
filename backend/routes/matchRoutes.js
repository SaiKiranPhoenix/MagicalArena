// backend/routes/matchRoutes.js
const express = require('express');
const router = express.Router();
const { startMatch } = require('../controllers/matchController');

// Route to start a match between two players
router.post('/', startMatch);

module.exports = router;
