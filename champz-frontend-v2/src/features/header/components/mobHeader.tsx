import { Box, Button, Grid, Stack, styled, Tooltip } from "@mui/material";
import { useRouter } from "@tanstack/react-router";
import { HeaderButton } from "@/components/HeaderButton";
import { HeaderIcons } from "@/consts/headerIcons";

export function MobHeader() {
  const Header = styled(Grid)(() => ({
    position: "relative",
    zIndex: 50,
  }));

  const router = useRouter();

  return (
    <>
      <Header container>
        <Grid
          item
          xs={6}
          {...{ [breakpoint]: 4 }}
          sx={{ alignItems: "center" }}
        >
          <Stack direction={"row"}>
            <HeaderButton
              icon={HeaderIcons.BACK}
              onClick={() => router.history.back()}
            />
          </Stack>
        </Grid>
        <Grid item xs={6} {...{ [breakpoint]: 4 }} sx={{ textAlign: "right" }}>

          <HeaderButton
            icon={HeaderIcons.MOBITEMLIST}
          />
        </Grid>
      </Header>
    </>
  );
}

const breakpoint = "md";
