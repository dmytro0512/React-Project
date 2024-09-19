import { useState } from "react";

// MUI Components
import { Box, styled } from "@mui/material";

// Custom Components
import { QuestItem } from "./QuestItem";
import QuestBlog from "./QuestBlog";
import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";

// Constants
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";
import { TextColor } from "@/consts/textColor";
import { TextShadow } from "@/consts/textShadow";
import { FontFamily } from "@/consts/fontFamily";
import { CurrentQuests } from "./CurrentQuests";

const testData = [
  {
    name: "Task long name",
    description:
      "As part of the specification of modern standards, the shareholders of the largest companies are united into entire clusters of their own kind.",
    reward: 150000,
    progress: 12,
  },
  {
    name: "Task long name",
    description:
      "As part of the specification of modern standards, the shareholders of the largest companies are united into entire clusters of their own kind.",
    reward: 150000,
    progress: 12,
  },
  {
    name: "Task long name",
    description:
      "As part of the specification of modern standards, the shareholders of the largest companies are united into entire clusters of their own kind.",
    reward: 150000,
    progress: 12,
  },
  {
    name: "Task long name",
    description:
      "As part of the specification of modern standards, the shareholders of the largest companies are united into entire clusters of their own kind.",
    reward: 150000,
    progress: 12,
  },
];

function QuestTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const QuestTabsWrapper = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.down("lg")]: {
      marginTop: 20,
    },
  }));

  return (
    <QuestTabsWrapper>
      <ChampzTabs value={activeTab} onChange={handleChange}>
        <ChampzTab label="Daily Quests"></ChampzTab>
        <ChampzTab label="Quest Log"></ChampzTab>
      </ChampzTabs>
      <ChampzTabPanel value={0} index={activeTab}>
        <CurrentQuests />
      </ChampzTabPanel>
      <ChampzTabPanel value={1} index={activeTab}></ChampzTabPanel>
    </QuestTabsWrapper>
  );
}

export const HeaderSpan = styled(Box)(({ theme }) => ({
  fontWeight: FontWeight.M,
  fontSize: FontSize.M,
  color: TextColor.light,
  fontFamily: FontFamily.aladin,
  textShadow: TextShadow.header,

  [theme.breakpoints.down("lg")]: {
    fontSize: FontSize.S,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: FontSize.XS,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: FontSize.XS2,
  },
}));

export default QuestTabs;
