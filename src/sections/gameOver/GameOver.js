
import './gameOver.css';

const GameOver = ({ isWin, handleReset, totalScore, goal, attemptsLeft }) => {

    const gameOverImage = isWin ? '/winImage.jpg' : '/lostImage.jpg';

    const title = isWin ? "Congratulations! You won." : "Sorry. You Lost.";
    const desc = isWin? "Big brain moment 🧠" : "Better Luck Next Time 🙂";
    // const result = isWin? "won-div" : "lost-div";

    return (
        <div className="gameOver">
            <div className='title'>{title}</div>
            <div className='points'>
                <div>Your Score: {totalScore}</div>
                <div>Your Goal: {goal}</div>
                {isWin && <div>Attempts left: {attemptsLeft}</div>}
            </div>
            {/* <img src='winImage.jpg' alt='gameover'></img> */}
            <img src={gameOverImage} alt='gameOver'></img>
            <div className='description'>{desc}</div>
            <button onClick={handleReset}>Play Again</button>
        </div>
    );
};

export default GameOver;
