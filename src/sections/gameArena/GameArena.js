import './gameArena.css'
import { useEffect } from 'react';

import Scores from '../../components/scores/Scores';
import DiceRoller from '../dice/DiceRoller';
import Visual from '../visual/Visual';



const GameArena = (props) => {

  const {
    goal,
    totalScore,
    setTotalScore,
    attempts,
    setAttempts,
    isGameOver,
    setIsGameOver,
    diceScore,
    setDiceScore,
    setWon,
    setLost
  } = props.props;
  
  useEffect(() => {
  console.log("useEffect ran");
  console.log("attempts:", attempts);
  console.log("diceScore:", diceScore);
  console.log("totalScore:", totalScore);
  console.log("isGameOver:", isGameOver);
  console.log("...............");

  if (isGameOver || diceScore === 0) return;

  // Update total score
  if (totalScore + diceScore <= goal) {
    setTotalScore(totalScore + diceScore);
  }

  // Check for win or loss
  if (totalScore === goal || attempts <= 0) {
    const playerWon = totalScore + diceScore === goal;
    setIsGameOver(true);
    playerWon ? setWon(prev => prev + 1) : setLost(prev => prev + 1);
    console.log(playerWon ? "You Won!" : "You Lost!");
  }

}, [attempts]);



  // if (isGameOver) {
  //   return <GameOver totalScore={totalScore} goal={goal} onReset={handleReset} />;
  // }

  return (
    <div className='gameArena'>
      <div className='game-div'>
        <Scores componentName={"goal"} value={goal} title={"Goal"} />
        <Scores componentName={"totalScore"} value={totalScore} title={"Total Score"} />
        <Scores componentName={"attempts"} value={attempts} title={"Attempts Left"} />
        <div className='dice-roll'>
          <DiceRoller 
            attempts={attempts} 
            setDiceScore={setDiceScore}
            setAttempts={setAttempts}
          />
        </div>
      </div>
      <Visual goal={goal} totalScore={totalScore} attempts={attempts} />
    </div>
  );
};

export default GameArena;
