import { Currencies } from "@/consts/currencies";
import { Avatar, Box, Stack, styled } from "@mui/material";
import truffelsImg from "@/assets/icons/economy/truffles.svg";
import sporesImg from "@/assets/icons/economy/spores.svg";
import { aladin } from "@/fonts/aladin";
import { FontSize } from "@/consts/fontSize";
import { FontWeight } from "@/consts/fontWeight";
import { TextColor } from "@/consts/textColor";
import { ChampzOutputFormatNumber } from "./ChampzFormatting/ChampzOutputFormatNumber";
import { RegularText } from "./Text";
import { TextShadow } from "@/consts/textShadow";

export function PriceTag(props: PriceTagProps) {
  const { type, value, ...other } = props;

  const PriceTag = styled(Stack)(() => ({
    alignItems: "center",
    "& img": {
      maxHeight: "100%",
      Selection: "none",
    },
  }));

  const PriceTagValue = styled(RegularText)(() => ({
    //fontFamily: aladin.fontFamily,
    fontSize: FontSize.XS,
    textShadow: TextShadow.dark,
  }));

  const getCurrencyImage = (currency: Currencies) => {
    switch (currency) {
      case Currencies.SPORES:
        return sporesImg;
      case Currencies.TRUFFLES:
        return truffelsImg;
      default:
        return undefined;
    }
  };
  return (
    <PriceTag direction={"row"} spacing={1} {...other}>
      <Avatar src={getCurrencyImage(type)} />
      <PriceTagValue>
        <ChampzOutputFormatNumber value={value} showBackground={false} />
      </PriceTagValue>
    </PriceTag>
  );
}

interface PriceTagProps {
  type: Currencies;
  value: number;
}
