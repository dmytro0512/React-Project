import { QuestPage } from "@/features/quests/components/Quest";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/quests")({
  component: QuestPage,
});
