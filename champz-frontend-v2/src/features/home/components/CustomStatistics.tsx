import { Box } from "@mui/material";
import { CustomStatistic } from "./CustomStatistic";
import { ContentHeading } from "@/components/Heading";
import { HeaderButton } from "@/components/HeaderButton";
import { HeaderIcons } from "@/consts/headerIcons";
import { useState } from "react";

export function CustomStatistics() {
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => {
    setIsEditMode((isEditMode) => !isEditMode);
  };

  return (
    <>
      <ContentHeading textAlign={"center"} position={"relative"}>
        Statistics
        <HeaderButton
          onClick={() => toggleEditMode()}
          sx={{ position: "absolute", right: "0" }}
          icon={HeaderIcons.COG}
          pixelSize={40}
        ></HeaderButton>
      </ContentHeading>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        <CustomStatistic isEditMode={isEditMode} slot={1} />
        <CustomStatistic isEditMode={isEditMode} slot={2} />
        <CustomStatistic isEditMode={isEditMode} slot={3} />
        <CustomStatistic isEditMode={isEditMode} slot={4} />
      </Box>
    </>
  );
}
