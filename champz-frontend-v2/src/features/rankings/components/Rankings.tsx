import { GuildsLeaderboard } from "@/features/rankings/components/GuildsLeaderboard";
import { Box } from "@mui/material";
import { useState } from "react";
import { PvPTotal } from "./PvPTotal";
import { LoginStreak } from "./LoginStreak";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { BurnLeaderboard } from "./BurnLeaderboard";
import { DonationsLeaderboard } from "./DonationsLeaderboard";

export function Rankings() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Box>
        <ChampzTabs centered value={activeTab} onChange={handleChange}>
          <ChampzTab label="Guilds"></ChampzTab>
          <ChampzTab label="Burns"></ChampzTab>
          <ChampzTab label="Donations"></ChampzTab>
          <ChampzTab label="Pvp"></ChampzTab>
          <ChampzTab label="Login Streak"></ChampzTab>
        </ChampzTabs>
      </Box>
      <ChampzTabPanel value={0} index={activeTab}>
        <GuildsLeaderboard />
      </ChampzTabPanel>
      <ChampzTabPanel value={1} index={activeTab}>
        <BurnLeaderboard />
      </ChampzTabPanel>
      <ChampzTabPanel value={2} index={activeTab}>
        <DonationsLeaderboard />
      </ChampzTabPanel>
      <ChampzTabPanel value={3} index={activeTab}>
        <PvPTotal />
      </ChampzTabPanel>
      <ChampzTabPanel value={4} index={activeTab}>
        <LoginStreak />
      </ChampzTabPanel>
    </>
  );
}
