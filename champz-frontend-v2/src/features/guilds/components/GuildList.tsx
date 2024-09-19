import { useRouteContext } from "@tanstack/react-router";
import { useGuilds } from "../hooks/useGuilds";
import { AxiosInstance } from "axios";
import { Box, TextField } from "@mui/material";

export function GuildList() {
  const routeContext = useRouteContext({ strict: false });

  const {
    guildsQueryResult: { data: guilds },
    setFilter,
  } = useGuilds({ api: routeContext.api as AxiosInstance });

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
