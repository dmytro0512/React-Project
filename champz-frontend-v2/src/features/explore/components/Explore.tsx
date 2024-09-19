import { ImagePath } from "@/consts/imagePaths";
import { Char } from "@/types/responses/charList";
import { GetExploreResponse } from "@/types/responses/explore";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { ExploreText } from "./ExploreText";
import { ExploreActionList } from "./ExploreActionList";
import { ChampzLoading } from "@/components/ChampzLoading";
import { QueryKeys } from "@/consts/queryKeys";
import { getImageHost } from "@/utils/getImageHost";

export function Explore(props: ExploreProps) {
  const queryClient = useQueryClient();
  const exploreStory = queryClient.getQueryData<GetExploreResponse>([
    QueryKeys.explore,
  ]);

  console.log(exploreStory);

  const explorePart = useMemo(() => {
    return exploreStory?.explore.explore_parts?.find(
      (part) => part.id === exploreStory.explore.active_explore_part,
    );
  }, [exploreStory, props.char]);

  return (
    <>
      {exploreStory && explorePart ? (
        <>
          <img
            src={`${getImageHost()}${ImagePath.EVENTS}${explorePart?.src}`}
            height={"400px"}
          />
          <ExploreText text={explorePart.text as string} />
          <ExploreActionList
            key={exploreStory.explore.journal_explore_id}
            journal_explore_id={exploreStory.explore.journal_explore_id}
            explore_part={explorePart}
          />
        </>
      ) : (
        <ChampzLoading />
      )}
    </>
  );
}

interface ExploreProps {
  char: Char;
}
