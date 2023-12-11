// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution
const findAverage = array => array.length === 0 ? 0 : array.reduce((a,c) => a + c, 0)/array.length