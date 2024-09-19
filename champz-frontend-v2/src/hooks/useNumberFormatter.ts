export const defaultLanguage = navigator.language;
const numberFormatter = new Intl.NumberFormat(defaultLanguage);

export default function useNumberFormatter(): Intl.NumberFormat {
  return numberFormatter;
}

export function formatShortNumberOutput(numberToFormat: number) {
  const suffixes = ["", "K", "M", "B", "T"];
  let absNumb = Math.abs(numberToFormat);

  let suffixIndex = 0;
  if (absNumb < 1000000) return numberFormatter.format(numberToFormat);

  while (absNumb >= 1000 && suffixIndex < suffixes.length - 1) {
    absNumb /= 1000;
    suffixIndex++;
  }

  const formattedNum = absNumb.toFixed(2) + suffixes[suffixIndex];
  return numberToFormat < 0 ? `-${formattedNum}` : formattedNum;
}

export function formatNumberOutput(numberToFormat: number) {
  return numberFormatter.format(numberToFormat);
}
