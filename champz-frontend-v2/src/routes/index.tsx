import { createFileRoute, redirect } from "@tanstack/react-router";

export type RefProps = {
  r?: string;
};

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): RefProps => {
    if (search.r !== undefined) {
      document.cookie = `refCode=${search.r}`;
    }

    return {
      r: (search.r as string) || undefined,
    };
  },
  beforeLoad: () => {
    throw redirect({
      to: "/home",
    });
  },
});
