import { ChampzLoading } from "@/components/ChampzLoading";
import { TeamFightContextProvider } from "@/features/teamfight/contexts/TeamFightContext";
import { useFightAPI } from "@/features/teamfight/hooks/useFightAPI";
import { Teamfight } from "@/features/teamfight/Teamfight";

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_auth/teamfight/$id")({
  component: FightDetailsRouteComponent,
});

function FightDetailsRouteComponent() {
  const { id } = Route.useParams();
  const { fight, getFightById } = useFightAPI();
  useEffect(() => {
    getFightById(~~id);
  }, []);

  console.log("FightId", ~~id);
  console.log(fight);

  if (fight === undefined || fight.id === 0) {
    return <ChampzLoading />;
  }

  return (
    <TeamFightContextProvider>
      <Teamfight fight={fight} />
    </TeamFightContextProvider>
  );
}
