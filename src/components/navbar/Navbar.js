import "./Navbar.css";

const Navbar = ({ won, lost, setIsAtLanding }) => {
  return (
    <div className="navbar">
      <div className="logo" onClick={() => setIsAtLanding(true)}>
        <img src="/assets/images/game-logo.png" alt="game logo" className="logo-image" />
        <div className="logo-text">BrainGame</div>
      </div>
      <div className="menu">
        <div className="stats">
          <div className="game-stat">Game Stats</div>
          <div className="stat-numbers">
            <div>
              Won: <span>{won}</span>
            </div>
            <div>
              Lost: <span>{lost}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
