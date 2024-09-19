import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import character from "@/assets/character1.svg"; 
import rollBannerBackground from '@/assets/backgrounds/rollBannerBackground.svg';
import { ClassList } from '@/features/character/components/ClassList';
import { PillButton } from "@/components/PillButton";

// Create a theme with a custom palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
  },
});

// Styled components with responsive adjustments
const ParentComponent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
}));

const ComponentContainer = styled('div')(() => ({
  paddingTop: '10px',
  textAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '660px',
  height: 'auto',
  backgroundImage: `url(${rollBannerBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  boxSizing: 'border-box',
}));

const CenteredImage = styled('div')(() => ({
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
}));

const CenteredImageInner = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const Caption = styled('div')(() => ({
  width: 'auto',
  fontFamily: "'Aladin'",
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '3rem',
  lineHeight: '100%',
  letterSpacing: '-0.02em',
  whiteSpace: 'nowrap',
  textAlign: 'left',
  color: '#F8D77E',
  textShadow: '0px 2.09091px 0px #B68336',
  // margin: '10px 0',
}));

const Summary = styled('div')(() => ({
  width: 'auto',
  marginTop: '25px',
  // fontFamily: 'Roboto Flex',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '120%',
  textAlign: 'left',
  color: '#CCDA8E',
}));

const CaptionAndSummary = styled('div')(() => ({
  display: 'block',
  padding: '0 26px',
}));


export function RollNewChamp() {
  
  return (
    <ThemeProvider theme={theme}>
      <ParentComponent>
        <Grid container spacing={2} justifyContent="center">
          {/* First Grid Component */}
          <Grid item xs={12} md={7}>
            <ComponentContainer>
              <CenteredImage>
                <CenteredImageInner src={character} alt="Vector Image" />
              </CenteredImage>
              <CaptionAndSummary>
                <Caption>Priest</Caption>
                <Summary>
                  Without question, Morels are the smartest mushrooms around Arborethia. The secret of their wisdom lies in their perforated brains. The natural ventilation cools their brain cells and enables them to run their data processing center at maximum power at all times. But with great power comes great responsibility. And so they have decided to use their given talents and their exhaustive understanding of the inner workings of vitality for the greater good of Arborethia and became extraordinary healers.
                </Summary>
              </CaptionAndSummary>
              <PillButton sx={{ display: "block", width: "max-content", margin: "23px 0", paddingTop: "20px", paddingBottom: "20px" }}>
                Create Priest
              </PillButton>
            </ComponentContainer>
          </Grid>

          {/* Second Grid Component */}
          <Grid item xs={12} md={5} container justifyContent="center">
            <ClassList />
          </Grid>
        </Grid>
      </ParentComponent>
    </ThemeProvider>
  );
}
