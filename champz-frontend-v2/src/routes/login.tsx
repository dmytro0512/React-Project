import { Login } from "@/features/login/components/Login";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.token) {
      throw redirect({
        to: search.redirect ?? "/home",
      });
    }
  },
  component: Login,
});
