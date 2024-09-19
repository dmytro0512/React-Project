import { ChampzLoading } from "@/components/ChampzLoading";
import { QueryKeys } from "@/consts/queryKeys";
import { Guild } from "@/features/guilds/components/Guild";
import { GuildList } from "@/features/guilds/components/GuildList";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { GuildService } from "@/services/guildService";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { AxiosInstance } from "axios";

export const Route = createFileRoute("/_auth/guilds")({
  component: GuildsRouteComponent,
});

function GuildsRouteComponent() {
  const routeContext = useRouteContext({ strict: false });
  const guildAssignmentQueryResult = useQuery({
    queryKey: [QueryKeys.guildAssignment],
    queryFn: () =>
      new GuildService(routeContext.api as AxiosInstance).getGuildAssignment(),
  });

  useApiErrorHandler(guildAssignmentQueryResult);

  if (guildAssignmentQueryResult.isLoading) return <ChampzLoading />;

  if (
    guildAssignmentQueryResult.isSuccess &&
    guildAssignmentQueryResult.data.guild.role_id !== 0
  ) {
    return <Guild {...guildAssignmentQueryResult.data.guild} />;
  }

  return <GuildList />;
}
