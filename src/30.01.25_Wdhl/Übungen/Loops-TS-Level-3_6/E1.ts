console.warn("Loops-TS-Level-3_6");

const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];

function calculateGrade(points: number[]) {
  const amountPoints = points.length;
  console.log(`amount = ${amountPoints}`);

  let total = 0;
  for (let i = 0; i < amountPoints; i++) {
    let currentSum = points[i];
    total += currentSum;
  }
  console.log(`sum = ${total}`);
  const average = total / amountPoints;
  return average.toFixed(0);
}
console.log(`the average is ${calculateGrade(results)}`);
