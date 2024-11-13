// frontend/src/pages/PlayerDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayer } from '../api';

const PlayerDetailsPage = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const loadPlayer = async () => {
      const playerData = await fetchPlayer(id);
      setPlayer(playerData);
    };
    loadPlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Health: {player.health}</p>
      <p>Strength: {player.strength}</p>
      <p>Attack: {player.attack}</p>
    </div>
  );
};

export default PlayerDetailsPage;
