
export const MIN_GOAL = 10;
export const MAX_GOAL = 50;
export const MIN_DICE_SCORE = 1;
export const MAX_DICE_SCORE = 6;
export const MIN_ATTEMPTS = 5;
export const MAX_ATTEMPTS = 12;
export const randomGenerator = (minValue, maxValue) => 
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;