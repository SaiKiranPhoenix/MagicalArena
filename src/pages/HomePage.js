// frontend/src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import PlayerList from '../components/PlayerList';
import AddPlayerForm from '../components/AddPlayerForm';
import { fetchPlayers } from '../api';

const HomePage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
    };
    loadPlayers();
  }, []);

  const handlePlayerAdded = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  return (
    <div>
      <h1>Magical Arena</h1>
      <AddPlayerForm onPlayerAdded={handlePlayerAdded} />
      <PlayerList players={players} />
    </div>
  );
};

export default HomePage;
