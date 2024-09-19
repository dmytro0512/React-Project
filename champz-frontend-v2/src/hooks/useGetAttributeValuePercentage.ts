export default function useGetAttributeValuePercentage(
  bonusValue: number,
  bonusValueMin: number,
  bonusValueMax: number,
) {
  return Math.round(
    ((bonusValue - bonusValueMin) / (bonusValueMax - bonusValueMin)) * 100,
  );
}
