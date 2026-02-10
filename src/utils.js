// items: {
//   score: Number,
//   weight: Number
// }

function calcWeightedGrade(items) {
  // Mateo Sosa
  let totalWeight = 0;
  let sum = 0;
  
  try {
    for (let i of items) {
      totalWeight += i.weight;
    }
    
    for (let i of items) {
      sum += i.score * (i.weight / totalWeight);
    }
  } catch {
    throw TypeError('items debe ser un Array');
  }

  return sum;
}

function percentile(p, values) {
  // Mateo Sosa
  if (p > 100 || p < 0) {  // Máximo 100%
    throw RangeError('El porcentaje debe existir entre 0 y 100');
  }

  try {
    const percentage = 1 / values.length;
    const i = Math.ceil(p * percentage / 100);
    
    return values[i];
  } catch {
    throw TypeError('values debe ser un Array');
  }
}

module.exports = {
  calcWeightedGrade,
  percentile,
};
