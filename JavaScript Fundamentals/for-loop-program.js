const populations = [243, 66, 134, 7];
const percentages = [];

const percentageCalculation = (percentage) => (percentage / 7900) * 100;

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageCalculation(populations[i]));
}

console.log(percentages);
