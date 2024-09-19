export function roundToMinStep(minStep: number, numberToRound: number) {
  if (numberToRound < 0) {
    return -Math.ceil(-numberToRound / minStep) * minStep;
  } else {
    return Math.floor(numberToRound / minStep) * minStep;
  }
}
