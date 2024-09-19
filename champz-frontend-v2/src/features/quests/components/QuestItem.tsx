// Assets
import RewardIcon from "@/assets/img/quest/reward.png";
import Quest from "@/assets/img/quest/quest.png";

// Custom Components
import QuestProgress from "./QuestProgress";
import { Image } from "./Overlay";

// MUI Components
import { Box, styled } from "@mui/material";

// Constants
import { TextColor } from "@/consts/textColor";
import { TextShadow } from "@/consts/textShadow";
import { FontSize } from "@/consts/fontSize";
import { FontWeight } from "@/consts/fontWeight";
import { FontFamily } from "@/consts/fontFamily";
import { QuestType } from "../types/quests";
import { ImagePath } from "@/consts/imagePaths";

interface QuestItemProps {
  quest: QuestType;
}

export function QuestItem(props: QuestItemProps) {
  const QuestItemWrapper = styled(Box)(() => ({
    backgroundImage: `url(${Quest})`,
    backgroundSize: "100% 100%",
    minHeight: "350px",
    minWidth: "300px",
    maxWidth: "310px",
    padding: "24px",
    display: "flex",
    flexDirection: "column-reverse",
  }));

  const Title = styled(Box)(() => ({
    color: TextColor.lightGreen,
    textShadow: TextShadow.ligh2,
    fontSize: FontSize.M,
    fontFamily: FontFamily.aladin,
  }));

  const RewardTitle = styled(Box)(() => ({
    fontSize: FontSize.XS,
    fontWeight: FontWeight.M,
    color: TextColor.progress,
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
    textShadow: TextShadow.progress,
  }));

  const Description = styled(Box)(() => ({
    margin: 0,
    fontWeight: FontWeight.S,
    fontSize: FontSize.XS2,
    lineHeight: `${FontSize.XS}px`,
    color: TextColor.white,
  }));

  console.log(props.quest);

  return (
    <QuestItemWrapper
      sx={{
        backgroundImage: `url(${ImagePath.QUESTS}Event_Zero2.jpg)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title>{props.quest.name}</Title>
          <RewardTitle>
            {props.quest.fixed_quantity.toLocaleString()}
            <Image url={RewardIcon} alt="Reward icon" width={24} height={24} />
          </RewardTitle>
        </Box>
        <Description>{props.quest.description}</Description>
        <QuestProgress
          total={props.quest.required_amount}
          progress={props.quest.current_amount}
        />
      </Box>
    </QuestItemWrapper>
  );
}
