export const defaultLanguage = navigator.language;
const dateFormatter = new Intl.DateTimeFormat(defaultLanguage);

export default function useDateFormatter(): Intl.DateTimeFormat {
  return dateFormatter;
}

export function formatUnixTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return dateFormatter.format(date);
}
