export function getDifferenceFromFloat(
  numberA: number,
  numberB: number,
  decimalPlaces: number,
) {
  const decimalCalculator = decimalPlaces * 10;
  return (
    (numberA * decimalCalculator - numberB * decimalCalculator) /
    decimalCalculator
  );
}
