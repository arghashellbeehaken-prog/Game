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

    const newTotal = totalScore + diceScore;

    if (newTotal === goal) {
      setTotalScore(newTotal);
      setIsGameOver(true);
      setWon(prev => prev + 1);
      console.log("You Won!");
      return; 
    }
    if (newTotal < goal) {
      setTotalScore(newTotal);
    } 
    if (attempts <= 0) {
      setIsGameOver(true);
      setLost(prev => prev + 1);
      console.log("You Lost!");
    }

  // We only want this effect to run when `attempts` changes (a roll completed).
  // Disabling exhaustive-deps here prevents re-running when we call setTotalScore.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempts]);

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
