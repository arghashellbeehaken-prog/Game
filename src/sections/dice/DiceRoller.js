import { useState } from 'react';
import './diceRoller.css';
import { MAX_DICE_SCORE, MIN_DICE_SCORE, randomGenerator } from '../../utils/Utils';

const DiceRoller = ({ attempts, setDiceScore, setAttempts }) => {
  
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    
    setTimeout(() => {
      const die1Score = randomGenerator(MIN_DICE_SCORE, MAX_DICE_SCORE);
      const die2Score = randomGenerator(MAX_DICE_SCORE, MAX_DICE_SCORE);
      setDie1(die1Score);
      setDie2(die2Score);
      setDiceScore(die1Score + die2Score);
      setRolling(false);
      setAttempts((prev) => prev - 1);
    }, 500);
  };

  


  return (
    <div className="dice-component">
      <div className="dice-roller">
        <div className="dice-text">Dice</div>
        <div className={`die ${rolling ? 'rolling' : ''}`}>{die1}</div>
        <div className={`die ${rolling ? 'rolling' : ''}`}>{die2}</div>
      </div>

      <div className="dice-score-div">
        <div className="dice-score-text">Dice Score</div>
        <div className="die dice-score">{die1 + die2}</div>
        <button onClick={rollDice} disabled={rolling}>
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    </div>
  );
};

export default DiceRoller;
