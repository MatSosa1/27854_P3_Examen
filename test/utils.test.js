const { calcWeightedGrade, percentile } = require('../src/utils');

test('Calcular Nota por Peso', () => {
  // Mateo Sosa
  const items = [
    {
      score: 80,
      weight: 0.4
    },
    {
      score: 90,
      weight: 0.6
    }
  ];
  
  expect(calcWeightedGrade(items)).toBe(86);
});

test('Calcular Percentiles Lista 3 Elementos', () => {
  // Mateo Sosa
  const data = [1, 2, 3];
  const p = 0;
  
  expect(percentile(p, data)).toBe(1);
});

test('Calcular Percentiles Lista 4 Elementos', () => {
  // Mateo Sosa
  const data = [1, 2, 3, 4];
  const p = 50;

  expect(percentile(p, data)).toBe(2);
});
