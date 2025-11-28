export const randomGenerator = (minValue, maxValue) =>
  Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
