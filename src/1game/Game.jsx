import './game.css';
import DiceRoller from './DiceRoller';
import { useContext, useState, useEffect } from 'react';
import { GameContext } from '../GameContext';
import GameOver from './GameOver';

const Game = () => {
  const [diceScore, setDiceScore] = useState(0);
  const {
    goal,
    totalScore,
    setTotalScore,
    attempts,
    setAttempts,
    setGoal,
    isGameOver,
    setIsGameOver,
  } = useContext(GameContext);

  useEffect(() => {
    if (diceScore === 0) return;
    if(totalScore + diceScore <= goal)
        setTotalScore((prev) => prev + diceScore);
  }, [attempts]);

  const handleReset = () => {
    setGoal(Math.floor(Math.random() * 40) + 10);
    setDiceScore(0);
    setTotalScore(0);
    setAttempts(Math.floor(Math.random() * 10) + 5);
    setIsGameOver(false);
  };

  if (isGameOver) {
    return <GameOver totalScore={totalScore} goal={goal} onReset={handleReset} />;
  }

  return (
    <div className="game-div">
      <div className="goal">
        <div className="div-text">Goal</div>
        <div className="number-div">{goal}</div>
      </div>
      <div className="totalScores">
        <div className="div-text">Total Scores</div>
        <div className="number-div">{totalScore}</div>
      </div>
      <div className="attempts">
        <div className="div-text">Attempts Left</div>
        <div className="number-div">{attempts}</div>
      </div>
      <div className="dice-roll">
        <DiceRoller diceScore={diceScore} setDiceScore={setDiceScore} />
      </div>
    </div>
  );
};

export default Game;
