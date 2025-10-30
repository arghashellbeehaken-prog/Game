import { useState, useEffect } from "react";
import { getPlayers, addPlayer } from "../../backend/api"

const PlayerLogin = ({ onSelectPlayer }) => {
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await getPlayers();
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  const handleSelect = (player) => {
    onSelectPlayer(player); // pass selected player to parent
  };

  const handleCreate = async () => {
    if (!username) return;
    const newPlayer = await addPlayer({ username, wins: 0, losses: 0 });
    setPlayers([...players, newPlayer]);
    onSelectPlayer(newPlayer);
  };

  return (
    <div>
      <h2>Select Player</h2>
      <ul>
        {players.map((p) => (
          <li key={p.id}>
            {p.username}{" "}
            <button onClick={() => handleSelect(p)}>Play</button>
          </li>
        ))}
      </ul>

      <h3>Or create new player</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="New player name"
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default PlayerLogin;
