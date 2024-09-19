import { useTypeChecker } from "@/hooks/useTypeChecker";
import {
  EmphasizedText,
  HighlightText,
  NegativeText,
  PositiveText,
} from "../Text";
import {
  formatNumberOutput,
  formatShortNumberOutput,
} from "@/hooks/useNumberFormatter";

export function ChampzOutputFormatNumber(props: {
  value: number;
  showBackground: boolean;
  showNegative?: boolean;
  highLightText?: boolean;
  shortNumberFormat?: boolean;
}) {
  const typeChecker = useTypeChecker();

  const getFormattedNumber = (value: number) => {
    if (props.shortNumberFormat) return formatShortNumberOutput(value);
    else return formatNumberOutput(value);
  };

  if (!props.showBackground) {
    return props.highLightText ? (
      <EmphasizedText>{getFormattedNumber(props.value)}</EmphasizedText>
    ) : (
      getFormattedNumber(props.value)
    );
  }

  if (props.highLightText) {
    return <HighlightText>{getFormattedNumber(props.value)}</HighlightText>;
  }

  if (props.showNegative) {
    return <NegativeText>{getFormattedNumber(props.value)}</NegativeText>;
  }

  return (
    <>
      {typeChecker.isNumber(props.value) ? (
        props.value >= 0 ? (
          <PositiveText>{getFormattedNumber(props.value)}</PositiveText>
        ) : (
          <NegativeText>{getFormattedNumber(props.value)}</NegativeText>
        )
      ) : (
        <>{props.value}</>
      )}
    </>
  );
}
