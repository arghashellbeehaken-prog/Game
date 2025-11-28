import { useState } from "react";

import {
  MAX_ATTEMPTS,
  MIN_ATTEMPTS,
  MIN_GOAL,
  MAX_GOAL,
} from "../utils/constants/commonConstants.js";
import { randomGenerator } from "../utils/functions/commonFunctions.js";
import Navbar from "../sections/navbar/Navbar.js";
import GameArena from "../sections/game-arena/GameArena.js";
import Landing from "../sections/landing/Landing.js";
import GameOver from "../sections/game-over/GameOver.js";

const Home = () => {
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
    console.log("handleReset clicked");
  };

  return (
    <>
      <Navbar won={won} lost={lost} setIsAtLanding={setIsAtLanding} />
      {isAtLanding ? (
        <Landing setIsAtLanding={setIsAtLanding} handleReset={handleReset} />
      ) : (
        <>
          {isGameOver ? (
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
                setGoal,
                isGameOver,
                setIsGameOver,
                diceScore,
                setDiceScore,
                setWon,
                setLost,
                handleReset,
                setIsAtLanding,
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
