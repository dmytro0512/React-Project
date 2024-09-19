import useAuthContext from "@/features/auth/contexts/authContext";
import { Explore } from "@/features/explore/components/Explore";

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";

export const Route = createFileRoute("/_auth/explore/character/$id")({
  component: ExploreDetailsRouteComponent,
});

function ExploreDetailsRouteComponent() {
  const { id } = Route.useParams();
  const { charList, setSelectedChar } = useAuthContext();
  const navigate = useNavigate();

  const char = useMemo(
    () => charList?.find((char) => char.id === ~~id),
    [charList, id],
  );

  useEffect(() => {
    if (char) {
      setSelectedChar(char);
    }
  }, [char, setSelectedChar]);

  if (!char) {
    navigate({ to: "/" });
  } else {
    return <Explore char={char} />;
  }
}
