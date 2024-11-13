// frontend/src/components/PlayerList.js
import React from 'react';
import { Link } from 'react-router-dom';

const PlayerList = ({ players }) => (
  <div>
    <h2>Players</h2>
    <ul>
      {players.map(player => (
        <li key={player._id}>
          <Link to={`/player/${player._id}`}>{player.name}</Link> - Health: {player.health}, Strength: {player.strength}, Attack: {player.attack}
        </li>
      ))}
    </ul>
  </div>
);

export default PlayerList;
