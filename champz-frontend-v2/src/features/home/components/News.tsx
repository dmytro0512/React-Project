import { QueryKeys } from "@/consts/queryKeys";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { Box, styled } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { NewsBanner } from "@/components/NewsBanner";
import { GameService } from "@/services/gameService";
import { getImageHost } from "@/utils/getImageHost";
import { ImagePath } from "@/consts/imagePaths";
import { ChampzLoading } from "@/components/ChampzLoading";
import { ContentHeading } from "@/components/Heading";
import { NewsModal } from "./NewsModal";
import { useState } from "react";

const route = getRouteApi("/_auth/home");

export function News() {
  const routeContext = route.useRouteContext();
  const [showNewsModal, setShowNewsModal] = useState<boolean>(false);

  const NewsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const latestNewsQueryResult = useQuery({
    queryKey: [QueryKeys.latestNews],
    queryFn: () => new GameService(routeContext.api).getLatestNews(),
  });

  useApiErrorHandler(latestNewsQueryResult);

  if (latestNewsQueryResult.isLoading) {
    return <ChampzLoading />;
  }

  return (
    <>
      <ContentHeading textAlign={"center"}>Latest Updates</ContentHeading>
      <NewsModal open={showNewsModal} onClose={() => setShowNewsModal(false)} />
      <NewsContainer>
        {latestNewsQueryResult.data?.news.map((news_record) => {
          return (
            <NewsBanner
              onClick={() => setShowNewsModal(true)}
              key={news_record.id}
              headline={news_record.floating_text}
              imgSrc={`${getImageHost()}${ImagePath.NEWS}${news_record.src}`}
            />
          );
        })}
      </NewsContainer>
    </>
  );
}
