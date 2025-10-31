import { useContext, useState } from 'react';
import './diceRoller.css';
import { GameContext } from '../GameContext';

const DiceRoller = ({ diceScore, setDiceScore }) => {
  const { setAttempts } = useContext(GameContext);
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);

    setTimeout(() => {
      const newDie1 = Math.floor(Math.random() * 6) + 1;
       setDie1(newDie1);
      const newDie2 = Math.floor(Math.random() * 6) + 1;
      setDie2(newDie2);
      setDiceScore(newDie1 + newDie2);
      setRolling(false);
      setAttempts((prev) => prev - 1);
    }, 1000);
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
        <div className="die dice-score">{diceScore}</div>
        <button onClick={rollDice} disabled={rolling}>
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    </div>
  );
};

export default DiceRoller;
