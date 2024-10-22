const populations = [243, 66, 134, 7];

console.log(populations.length === 4);

const percentageCalculation = (percentage) => (percentage / 7900) * 100;

const percentages = [
  percentageCalculation(populations[0]),
  percentageCalculation(populations[1]),
  percentageCalculation(populations[2]),
  percentageCalculation(populations[3]),
];

console.log(percentages);
