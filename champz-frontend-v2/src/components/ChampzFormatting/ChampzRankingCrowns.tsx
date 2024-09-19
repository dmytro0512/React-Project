import { useTypeChecker } from "@/hooks/useTypeChecker";
import { CrownIcon } from "../ChampzIcon/CrownIcon";

export function ChampzRankingCrowns(props: { rank: number }) {
  const typeChecker = useTypeChecker();

  return (
    <>
      {typeChecker.isNumber(props.rank) ? (
        props.rank <= 3 ? (
          <>
            <CrownIcon />#{props.rank}
          </>
        ) : (
          <>#{props.rank}</>
        )
      ) : (
        <>#{props.rank}</>
      )}
    </>
  );
}
