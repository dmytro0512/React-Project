import { QueryKeys } from "@/consts/queryKeys";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { GuildService } from "@/services/guildService";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useCallback, useState } from "react";
import { Guild } from "../types/guilds";

export function useGuilds({ api }: UseGuildsProps) {
  const [filter, setFilter] = useState("");

  const filterGuilds = useCallback(
    (guilds: Guild[]) => {
      return guilds.filter((guild) => {
        const regexp = new RegExp(filter, "i");
        return regexp.test(guild.abbreviation) || regexp.test(guild.name);
      });
    },
    [filter],
  );

  const guildsQueryResult = useQuery({
    queryKey: [QueryKeys.guildList],
    queryFn: () => new GuildService(api).getAllGuilds(),
    select: filterGuilds,
  });

  useApiErrorHandler(guildsQueryResult);

  return { guildsQueryResult, filter, setFilter };
}

interface UseGuildsProps {
  api: AxiosInstance;
}
