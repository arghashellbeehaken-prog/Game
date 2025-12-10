import { useState } from "react";

import {
  MAX_ATTEMPTS,
  MIN_ATTEMPTS,
  MIN_GOAL,
  MAX_GOAL,
} from "../utils/constants/commonConstants.js";
import { randomGenerator } from "../utils/functions/commonFunctions.js";

import Navbar from "../components/navbar/Navbar.js";
import GameArena from "../sections/game-arena/GameArena.js";
import Landing from "../components/landing/Landing.js";
import GameOver from "../components/game-over/GameOver.js";

const HomePage = () => {
  const [goal, setGoal] = useState(randomGenerator(MIN_GOAL, MAX_GOAL));
  const [attempts, setAttempts] = useState(randomGenerator(MIN_ATTEMPTS, MAX_ATTEMPTS));
  const [totalScore, setTotalScore] = useState(0);
  const [won, setWon] = useState(0);
  const [lost, setLost] = useState(0);
  const [isGameOver, setIsGameOver] = useState(true);
  const [diceScore, setDiceScore] = useState(0);
  const [isAtLanding, setIsAtLanding] = useState(true);

  const handleReset = () => {
    setGoal(randomGenerator(MIN_GOAL, MAX_GOAL));
    setAttempts(randomGenerator(MIN_ATTEMPTS, MAX_ATTEMPTS));
    setIsGameOver(false);
    setTotalScore(0);
    setDiceScore(0);
    setIsAtLanding(false);
  };

  return (
    <>
      <Navbar won={won} lost={lost} setIsAtLanding={setIsAtLanding} />

      {isAtLanding ? (
        <Landing handleReset={handleReset} />
      ) : isGameOver ? (
        <GameOver
          totalScore={totalScore}
          goal={goal}
          attemptsLeft={attempts}
          handleReset={handleReset}
        />
      ) : (
        <GameArena
          props={{
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
          }}
        />
      )}
    </>
  );
};

export default HomePage;
