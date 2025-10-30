import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [goal, setGoal] = useState(() => Math.floor(Math.random() * 40) + 10);
    const [totalScore, setTotalScore] = useState(0);
    const [attempts, setAttempts] = useState(() => Math.floor(Math.random() * 10) + 5);
    const [isGameOver, setIsGameOver] = useState(false);

    

    let gameInfo = {
        goal,
        setGoal,
        totalScore,
        setTotalScore,
        attempts,
        setAttempts,
        isGameOver,
        setIsGameOver
    };

    useEffect(() => {
        if (isGameOver) return; 
        if (totalScore >= goal && totalScore > 0) {
            alert("You won!");
            setIsGameOver(true);
        } else if (attempts <= 0) {
            alert("Game Over!");
            setIsGameOver(true);
        }
    }, [attempts, totalScore, goal, isGameOver]);

    return (
        <GameContext.Provider value={gameInfo}>
            {children}
        </GameContext.Provider>
    );
};
