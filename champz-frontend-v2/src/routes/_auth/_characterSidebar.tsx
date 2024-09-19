import { defaultGridSpacing } from "@/consts/spacings";
import { CharList } from "@/features/charlist/components/CharList";
import { Grid } from "@mui/material";
import { Outlet, createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_auth/_characterSidebar")({
  component: CharacterSidebar,
});

function CharacterSidebar() {
  return (
    <Grid container columnSpacing={defaultGridSpacing}>
      <Grid item lg={4} xs={12}>
        <CharList />
      </Grid>
      <Grid item lg={8} xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
