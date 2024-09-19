import { createFileRoute } from "@tanstack/react-router";
import { NavigationWheel } from "@/components/NavigationWheel";

export const Route = createFileRoute("/navigation")({
  component: NavigationWheel,
});
