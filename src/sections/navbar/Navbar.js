import './Navbar.css';

const Navbar = ({won, lost, setIsAtLanding}) => {

    const playerImage = './wk.png';
    const playerName = 'Divyo';
    return (
        <div className='navbar'>
            <div className='logo' onClick={() => setIsAtLanding(true)}>
                <img src="wn.png" alt="game logo" className='logo-image' />
                <div className='logo-text'>BrainGame</div>
            </div>
            <div className='menu'>
                <div className='stats'>
                    <div className='game-stat'>Game Stats</div>
                    <div className='stat-numbers'>
                        <div>Won: <span>{won}</span></div>
                        <div>Lost: <span>{lost}</span></div>
                    </div>
                </div>
            </div>
            <div className='player-info'>
                <div className='profile'>
                    <img src={playerImage} alt="" className='dp' />
                    <div className="player-name">{playerName}</div>
                </div>
                <div className='login-out'>
                    LogOut
                </div>
            </div>
        </div>
    )
}

export default Navbar;