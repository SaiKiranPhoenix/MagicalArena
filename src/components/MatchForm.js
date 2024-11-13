// frontend/components/PlayerForm.js
import React, { useState } from 'react';
import { createPlayer } from '../api';  // Import the createPlayer function

const PlayerForm = () => {
  const [name, setName] = useState('');
  const [health, setHealth] = useState('');
  const [strength, setStrength] = useState('');
  const [attack, setAttack] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create the player data object from the form fields
    const playerData = {
      name,
      health,
      strength,
      attack,
    };

    try {
      const newPlayer = await createPlayer(playerData);
      console.log('Player created:', newPlayer);
      alert('Player created successfully!');
      setName('');
      setHealth('');
      setStrength('');
      setAttack('');
    } catch (error) {
      setError('Failed to create player. Please try again.');
      console.error('Error while creating player:', error);
    }
  };

  return (
    <div>
      <h2>Create Player</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Health:</label>
          <input
            type="number"
            value={health}
            onChange={(e) => setHealth(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Strength:</label>
          <input
            type="number"
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Attack:</label>
          <input
            type="number"
            value={attack}
            onChange={(e) => setAttack(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;
