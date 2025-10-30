import { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState(null);

  return (
    <PlayerContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
