import { useGuilds } from "@/features/guilds/hooks/useGuilds";
import { Box, TextField } from "@mui/material";
import { getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/_auth/rankings");

export function GuildsLeaderboard() {
  const routeContext = route.useRouteContext();
  const {
    guildsQueryResult: { data: guilds },
    setFilter,
  } = useGuilds({ api: routeContext.api });

  return (
    <>
      <TextField onChange={(event) => setFilter(event.target.value)} />
      {guilds?.map((guild) => {
        return (
          <Box key={guild.id}>
            {guild.abbreviation} {guild.name}
          </Box>
        );
      })}
    </>
  );
}
