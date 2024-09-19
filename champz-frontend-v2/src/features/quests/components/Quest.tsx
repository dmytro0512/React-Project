// MUI Components
import { Box, styled } from "@mui/material";

// SubComponents
import QuestTabs from "./QuestTabs";

export function QuestPage() {
  const QuestPage = styled(Box)(() => ({
    width: "100%",
    padding: "14px 20px",
    display: "flex",
    flexDirection: "column",
    rowGap: 30,
  }));

  return (
    <QuestPage>
      <QuestTabs />
    </QuestPage>
  );
}
