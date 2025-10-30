
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';
import { GameProvider } from './components/GameContext';
import PlayerLogin from './components/Auth/PlayerLogin';

function App() {
  return (
    <div className="App">
      {/* <PlayerLogin /> */}
      <Navbar />
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
