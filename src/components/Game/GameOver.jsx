
import { useContext, useEffect } from 'react';
import './gameOver.css';
import { GameContext } from '../GameContext';
import { addGameHistory } from '../../backend/api';

const GameOver = ({ totalScore, goal, onReset }) => {
    const isWin = (totalScore === goal) ? true : false;
    const {attemptsLeft} = useContext(GameContext);


//     useEffect(() => {
//         const recordGame = async () => {
//         // Save game history
//         await addGameHistory({
//             playerId: player.id,
//             finalScore: totalScore,
//             goal,
//             attemptsLeft,
//             result,
//             date: new Date().toISOString()
//         });

//         // Update player stats
//         const newStats = {
//             wins: player.wins + (result === "win" ? 1 : 0),
//             losses: player.losses + (result === "lose" ? 1 : 0)
//         };
//         await updatePlayerStats(player.id, newStats);
//         };

//         recordGame();
//   }, [totalScore, goal, attemptsLeft, player, result]);


    let gameOverMessage = "";
    let divClassname = "";
    if(isWin){ 
        gameOverMessage = "Congratulations! You Won...";
        divClassname = "win-div";
    } else {
        gameOverMessage = "Sorry, you Lose...";
        divClassname = "lose-div";
    }



    

    return (
        <div className={divClassname}>
            <h2>{gameOverMessage}</h2>
            <p>Your score: {totalScore} | Goal: {goal}</p>
            <button onClick={onReset}>Play Again</button>
        </div>
    );
};

export default GameOver;
