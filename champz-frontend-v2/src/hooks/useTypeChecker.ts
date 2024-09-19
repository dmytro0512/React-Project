export function useTypeChecker() {
  const isNumber = (value: string | number | undefined): value is number => {
    return typeof value === "number";
  };

  return {
    isNumber,
  };
}
