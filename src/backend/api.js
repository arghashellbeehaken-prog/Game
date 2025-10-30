import axios from "axios";

const API = "http://localhost:5000";

// Get all players
export const getPlayers = async () => {
  const res = await axios.get(`${API}/players`);
  return res.data;
};

// Add a new player
export const addPlayer = async (player) => {
  const res = await axios.post(`${API}/players`, player);
  return res.data;
};

// Update player stats
export const updatePlayerStats = async (id, newData) => {
  const res = await axios.patch(`${API}/players/${id}`, newData);
  return res.data;
};

// Add a game record
export const addGameHistory = async (history) => {
  const res = await axios.post(`${API}/gameHistory`, history);
  return res.data;
};

// Get game history for a specific player
export const getGameHistoryByPlayer = async (playerId) => {
  const res = await axios.get(`${API}/gameHistory?playerId=${playerId}`);
  return res.data;
};
