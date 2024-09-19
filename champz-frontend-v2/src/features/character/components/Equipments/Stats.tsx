import { Box, Stack, styled } from "@mui/material";
import buttonV1 from "@/assets/backgrounds/stats/v1.svg";
import buttonV2 from "@/assets/backgrounds/stats/v2.svg";
import buttonV3 from "@/assets/backgrounds/stats/v3.svg";
import buttonV4 from "@/assets/backgrounds/stats/v4.svg";
import hpIcon from "@/assets/icons/stats/hp.svg";
import attackIcon from "@/assets/icons/stats/attack.svg";
import defenseIcon from "@/assets/icons/stats/defense.svg";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";
import { Title } from "@/components/Title";
import { RegularText } from "@/components/Text";
import { getImageHost } from "@/utils/getImageHost";
import { ImagePath } from "@/consts/imagePaths";

const StatsBox = styled(Box)(({ theme }) => ({
  backgroundSize: "contain",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  color: TextColor.dark,
  fontWeight: FontWeight.XL,
  fontSize: FontSize.XS,
  width: "100%",
  padding: `${theme.spacing(2)} 0`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const StatsStack = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
}));

const StatsV1 = styled(StatsBox)(() => ({
  backgroundImage: `url(${buttonV1})`,
}));

const StatsV2 = styled(StatsBox)(() => ({
  backgroundImage: `url(${buttonV2})`,
}));

const StatsV3 = styled(StatsBox)(() => ({
  backgroundImage: `url(${buttonV3})`,
}));

const StatsV4 = styled(StatsBox)(() => ({
  backgroundImage: `url(${buttonV4})`,
}));

export function Stats(props: StatsProps) {
  return (
    <Stack direction="row">
      <StatsV1>
        <StatsStack>
          <Title>AP</Title>
          <RegularText>{props.ap}</RegularText>
        </StatsStack>
      </StatsV1>
      <StatsV2>
        <StatsStack>
          <img src={hpIcon} style={{ width: "24px" }} />
          <RegularText>
            {props.hp}/{props.hpBase}
          </RegularText>
        </StatsStack>
      </StatsV2>
      <StatsV3>
        <StatsStack>
          <img
            src={`${getImageHost()}${ImagePath.ICONS}Icon_Item_Offensive.svg`}
            style={{ width: "22px" }}
          />
          <RegularText>
            {props.attackMin}-{props.attackMax}
          </RegularText>
        </StatsStack>
      </StatsV3>
      <StatsV4>
        <StatsStack>
          <img
            src={`${getImageHost()}${ImagePath.ICONS}Icon_Item_Defensive.svg`}
            style={{ width: "22px" }}
          />
          <RegularText>{props.defense}</RegularText>
        </StatsStack>
      </StatsV4>
    </Stack>
  );
}

interface StatsProps {
  ap: number;
  hp: number;
  hpBase: number;
  defense: number;
  attackMax: number;
  attackMin: number;
}
