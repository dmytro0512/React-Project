import { RollNewChamp } from "@/features/character/components/RollChamp/RollNewChamp";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/_characterSidebar/character/roll")(
  {
    component: RollNewChamp,
  },
);
