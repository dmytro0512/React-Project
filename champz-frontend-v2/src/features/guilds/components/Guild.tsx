import type { Guild, GuildAssignment } from "../types/guilds";

export function Guild(props: GuildAssignment) {
  return <>{props.name}</>;
}
