// frontend/src/pages/MatchPage.js
import React, { useEffect, useState } from 'react';
import MatchForm from '../components/MatchForm';
import { fetchPlayers } from '../api';

const MatchPage = () => {
  const [players, setPlayers] = useState([]);
  const [matchResult, setMatchResult] = useState(null);

  useEffect(() => {
    const loadPlayers = async () => {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
    };
    loadPlayers();
  }, []);

  const handleMatchResult = (result) => {
    setMatchResult(result);
  };

  return (
    <div>
      <h1>Start a Match</h1>
      <MatchForm players={players} onMatchResult={handleMatchResult} />
      {matchResult && (
        <div>
          <h2>Match Result</h2>
          <p>{matchResult.message}</p>
        </div>
      )}
    </div>
  );
};

export default MatchPage;
