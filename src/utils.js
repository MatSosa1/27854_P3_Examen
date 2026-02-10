// items: {
//   score: Number,
//   weight: Number
// }

function calcWeightedGrade(items) {
  // Mateo Sosa
  let totalWeight = 0;
  let sum = 0;

  
  for (let i of items) {
    totalWeight += i.weight;
  }

  for (let i of items) {
    sum += i.score * (i.weight / totalWeight);
  }

  return sum;
}

function percentile(p, values) {
  // Mateo Sosa
  const percentage = 1 / values.length;
  const i = Math.ceil(p * percentage / 100);

  console.log(i);

  return values[i];
}

module.exports = {
  calcWeightedGrade,
  percentile
}
