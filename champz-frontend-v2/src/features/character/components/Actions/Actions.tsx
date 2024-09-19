import {
  ActionButtonV1,
  ActionButtonV2,
  ActionButtonV3,
} from "@/features/character/components/Actions/ActionButton";
import { Grid } from "@mui/material";
import fightIcon from "@/assets/icons/fight.svg";
import exploreIcon from "@/assets/icons/explore.svg";
import forageIcon from "@/assets/icons/forage.svg";

export function Actions() {
  return (
    <Grid container spacing={1} justifyContent={"center"}>
      <Grid item xs={12} md={6}>
        <ActionButtonV1 startIcon={<Icon url={fightIcon} />}>
          Fight
        </ActionButtonV1>
      </Grid>
      <Grid item xs={12} md={6}>
        <ActionButtonV2 startIcon={<Icon url={exploreIcon} />}>
          Explore
        </ActionButtonV2>
      </Grid>
      <Grid item xs={12} md={6}>
        <ActionButtonV3 startIcon={<Icon url={forageIcon} />}>
          Forage
        </ActionButtonV3>
      </Grid>
    </Grid>
  );
}

function Icon({ url }: { url: string }) {
  return <img src={url} />;
}
