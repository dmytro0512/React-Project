import { Box, Button, Grid, Stack, styled, Tooltip } from "@mui/material";
import timeSection from "@/assets/backgrounds/mobStateLine/time.svg"
import blackboard from "@/assets/backgrounds/mobStateLine/blackboard.svg"
import statePWT from "@/assets/backgrounds/mobStateLine/statePWT.svg"

const TimeSectionCompo = styled('div')(() => ({
    width: '100%',
    height: 60,
    backgroundImage: `url(${timeSection})`
}));
const BlackboardCompo = styled('div')(() => ({
    width: '100%',
    height: 60,
    backgroundImage: `url(${blackboard})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}));
const StatePWTCompo = styled('div')(() => ({
    width: '100%',
    height: 60,
    backgroundImage: `url(${statePWT})`
}));

export function MobStateList() {
  const Header = styled(Grid)(() => ({
    position: "relative",
    zIndex: 50,
    minHeight: 60
  }));

  return (
    <>
      <Header container>
        <Grid
          item
          xs={4}
          {...{ [breakpoint]: 4 }}
          sx={{ alignItems: "center" }}
        >
            <TimeSectionCompo></TimeSectionCompo>
        </Grid>
        <Grid item xs={4}><BlackboardCompo></BlackboardCompo></Grid>
        <Grid item xs={4}>
        <StatePWTCompo></StatePWTCompo>
        </Grid>
      </Header>
    </>
  );
}

const breakpoint = "md";
