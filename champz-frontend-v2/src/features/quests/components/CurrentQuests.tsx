// MUI Components
import { Box, styled } from "@mui/material";
import { HeaderSpan } from "./QuestTabs";
import { QuestItem } from "./QuestItem";
import QuestBlog from "./QuestBlog";
import { FontSize } from "@/consts/fontSize";
import { getRouteApi } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/consts/queryKeys";
import { QuestService } from "../services/questService";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { ChampzLoading } from "@/components/ChampzLoading";

const route = getRouteApi("/_auth/quests");

export function CurrentQuests() {
  const routeContext = route.useRouteContext();

  const TabHeader = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const QuestItemsWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "start",
    gap: 16,
    overflow: "auto",
    marginTop: "16px",
  }));

  const currentQuestsQueryResult = useQuery({
    queryKey: [QueryKeys.quests],
    queryFn: () => new QuestService(routeContext.api).getCurrentQuests(),
  });

  useApiErrorHandler(currentQuestsQueryResult);
  console.log(currentQuestsQueryResult);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
        <QuestItemsWrapper>
          {currentQuestsQueryResult.isLoading && <ChampzLoading />}
          {currentQuestsQueryResult.isSuccess &&
            currentQuestsQueryResult.data.map((quest) => {
              return <QuestItem quest={quest} key={quest.id} />;
            })}
        </QuestItemsWrapper>
      </Box>
      <QuestBlog />
    </>
  );
}
