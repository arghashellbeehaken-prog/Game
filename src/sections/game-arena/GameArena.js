import "./GameArena.css";
import { useEffect } from "react";

import Scores from "../../components/scores/Scores";
import DiceRoller from "../../components/dice/DiceRoller";
import Visual from "../../components/visual/Visual";

const GameArena = ({ props }) => {
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
    setLost,
  } = props;

  useEffect(() => {
    if (isGameOver || diceScore === 0) return;
    const newTotal = totalScore + diceScore;

    if (newTotal === goal) {
      setTotalScore(newTotal);
      setIsGameOver(true);
      setWon((prev) => prev + 1);
      return;
    }
    if (newTotal < goal) {
      setTotalScore(newTotal);
    }
    if (attempts <= 0) {
      setIsGameOver(true);
      setLost((prev) => prev + 1);
    }
  }, [attempts]);

  return (
    <div className="gameArena">
      <div className="game-div">
        <Scores customClassName={"goal"} value={goal} title={"Goal"} />
        <Scores customClassName={"totalScore"} value={totalScore} title={"Total Score"} />
        <Scores customClassName={"attempts"} value={attempts} title={"Attempts Left"} />
        <div className="dice-roll">
          <DiceRoller attempts={attempts} setDiceScore={setDiceScore} setAttempts={setAttempts} />
        </div>
      </div>
      <Visual goal={goal} totalScore={totalScore} attempts={attempts} />
    </div>
  );
};

export default GameArena;
