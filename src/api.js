// api.js

// frontend/api.js
export const createPlayer = async (playerData) => {
    try {
      const response = await fetch('/api/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),  // Send the data in JSON format
      });
  
      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.error || 'Failed to create player');
      }
  
      return await response.json();  // Return the created player
    } catch (error) {
      console.error('Error in createPlayer:', error.message);  // Log the error
      throw error;  // Re-throw the error to be handled by the caller
    }
  };
  
  // Function to fetch all players
  export const fetchPlayers = async () => {
    const response = await fetch('/api/players');
    
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
    
    return await response.json();
  };
  
  // Function to fetch a single player by ID
  export const fetchPlayer = async (playerId) => {
    const response = await fetch(`/api/players/${playerId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch player');
    }
    
    return await response.json();
  };
  
  // Function to start a match between two players
  export const startMatch = async (matchData) => {
    const response = await fetch('/api/matches', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(matchData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to start match');
    }
    
    return await response.json();
  };
  