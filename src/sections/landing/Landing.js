import './landing.css';

const Landing = ({handleReset}) => {

    return (
        <div className="landing">
            <h1 className='welcome'>Welcome to BrainGame</h1>
            <img src='brain.jpg' alt='brain-image' />
            <h4 className='desc'>You dont need to have a brain to play this game though. 😅</h4>
            <button onClick={handleReset}>Start The Game</button>
        </div>
    )
}

export default Landing;