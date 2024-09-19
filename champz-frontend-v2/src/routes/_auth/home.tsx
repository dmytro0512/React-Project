import { HomeScreen } from "@/features/home/components/HomeScreen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/home")({
  component: HomeScreen,
});
