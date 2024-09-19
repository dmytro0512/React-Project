import { ChampzLoading } from "@/components/ChampzLoading";
import useAuthContext from "@/features/auth/contexts/authContext";
import { CharacterDetails } from "@/features/character/components/CharacterDetails";
import { RollNewChamp } from "@/features/character/components/RollChamp/RollNewChamp";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";

export const Route = createFileRoute("/_auth/_characterSidebar/character/$id")({
  component: CharacterDetailsRouteComponent,
});

function CharacterDetailsRouteComponent() {
  const { id } = Route.useParams();
  const { charList, setSelectedChar } = useAuthContext();
  const navigate = useNavigate();

  const handleFallBackNavigation = () => {
    if (charList && charList.length > 0) {
      // Navigate to first Char in the List if there are chars and no char was provided
      navigate({
        to: "/character/" + charList[0].id,
      });
    }
  };

  const char = useMemo(() => {
    if (!(~~id > 0) && charList) {
      handleFallBackNavigation();
    }

    const selectedChar = charList?.find((char) => char.id === ~~id);
    if (selectedChar === undefined) {
      handleFallBackNavigation();
    }

    return selectedChar;
  }, [charList, id]);

  useEffect(() => {
    if (char) {
      setSelectedChar(char);
    }
  }, [char, setSelectedChar]);

  if (!char) {
    return <ChampzLoading />;
  }

  return <CharacterDetails char={char}></CharacterDetails>;
}
