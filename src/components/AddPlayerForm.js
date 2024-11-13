// frontend/src/components/AddPlayerForm.js
import React, { useState } from 'react';
import { createPlayer } from '../api';

const AddPlayerForm = ({ onPlayerAdded }) => {
  const [name, setName] = useState('');
  const [health, setHealth] = useState(100);
  const [strength, setStrength] = useState(10);
  const [attack, setAttack] = useState(10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const player = { name, health, strength, attack };
    const newPlayer = await createPlayer(player);
    onPlayerAdded(newPlayer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Player</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={health} onChange={(e) => setHealth(e.target.value)} placeholder="Health" required />
      <input type="number" value={strength} onChange={(e) => setStrength(e.target.value)} placeholder="Strength" required />
      <input type="number" value={attack} onChange={(e) => setAttack(e.target.value)} placeholder="Attack" required />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;
