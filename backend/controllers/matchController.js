// backend/controllers/matchController.js
const Player = require('../models/Player');
const Match = require('../models/Match');
const rollDice = require('../utils/diceRoll');

const startMatch = async (req, res) => {
  try {
    const { playerAId, playerBId } = req.body;

    // Log the request body for debugging purposes
    console.log('Received match request with player IDs:', playerAId, playerBId);

    // Validate if player IDs are provided
    if (!playerAId || !playerBId) {
      return res.status(400).json({ error: 'Player IDs are required' });
    }

    // Fetch players from the database
    const playerA = await Player.findById(playerAId);
    const playerB = await Player.findById(playerBId);

    // Check if both players exist
    if (!playerA || !playerB) {
      return res.status(404).json({ error: 'One or both players not found' });
    }

    // Initialize match log and winner variable
    let log = [];
    let winner = null;

    // Simulate the match until one player's health reaches zero
    while (playerA.health > 0 && playerB.health > 0) {
      // Determine attacker and defender based on health
      const attacker = playerA.health < playerB.health ? playerA : playerB;
      const defender = attacker === playerA ? playerB : playerA;

      // Roll the dice for attack and defense
      const attackRoll = rollDice();
      const defenseRoll = rollDice();

      // Calculate attack damage and defense strength
      const attackDamage = attacker.attack * attackRoll;
      const defenseStrength = defender.strength * defenseRoll;
      const damage = Math.max(0, attackDamage - defenseStrength);  // Prevent negative damage

      // Update the defender's health and log the action
      defender.health = Math.max(0, defender.health - damage);  // Prevent health going below 0
      log.push(`${attacker.name} attacks ${defender.name} for ${damage} damage`);

      // Check if the defender is out of health and assign the winner
      if (defender.health === 0) {
        winner = attacker.name;
        log.push(`${attacker.name} wins the match!`);
        break;
      }
    }

    // Create a match record in the database
    const match = await Match.create({ playerA, playerB, log, winner });

    // Send the match result as a response
    res.status(200).json(match);
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Match failed to start due to internal server error' });
  }
};

module.exports = { startMatch };
