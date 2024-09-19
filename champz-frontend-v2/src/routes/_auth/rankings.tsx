import { Rankings } from "@/features/rankings/components/Rankings";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/rankings")({
  component: Rankings,
});
