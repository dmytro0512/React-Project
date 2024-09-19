import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import { Heading } from "@/components/Heading";
import useAuthContext from "@/features/auth/contexts/authContext";
import { Barracks } from "@/features/charlist/components/Barracks/Barracks";
import { RollChampz } from "@/features/charlist/components/RollChampz/RollChampz";
import { Box } from "@mui/material";
import { useState } from "react";

export function CharList() {
  const [activeTab, setActiveTab] = useState(0);
  const authContext = useAuthContext();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <ChampzTabs variant="fullWidth" value={activeTab} onChange={handleChange}>
        <ChampzTab label="Characters"></ChampzTab>
      </ChampzTabs>
      <ChampzTabPanel value={0} index={activeTab}>
        <Heading>Roll Champz</Heading>
        <RollChampz></RollChampz>
        <Heading>Barracks</Heading>
        <Barracks
          charList={authContext.charList}
          selectedChar={authContext.selectedChar}
        ></Barracks>
      </ChampzTabPanel>
    </Box>
  );
}
