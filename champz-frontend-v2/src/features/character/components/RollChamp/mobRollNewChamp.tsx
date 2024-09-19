import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import character from "@/assets/character1.svg";
import rollBannerBackground from '@/assets/backgrounds/mobRollBannerBg.svg';
import { ClassList } from '@/features/character/components/mobClassList';
import { PillButton } from "@/components/PillButton";
import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";

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

let ww = window.innerWidth

// Styled components with responsive adjustments
const ParentComponent = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '-22px',
    justifyContent:'center',
}));

const ComponentContainer = styled('div')(() => ({
    marginTop: '15px',
    paddingTop: '10px',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    minHeight: '660px',
    height: 'auto',
    backgroundImage: `url(${rollBannerBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    boxSizing: 'border-box'
}));

const CenteredImage = styled('div')(() => ({
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
}));

const CenteredImageInner = styled('img')({
    width: '195px',
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
    // marginTop: '20px',
    marginBottom: '20px',
    // fontFamily: 'Roboto Flex',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '120%',
    textAlign: 'left',
    color: '#CCDA8E',
    marginTop: '23px'
}));

const CaptionAndSummary = styled('div')(() => ({
    display: 'block',
    padding: '0 18px',
}));

export function MobRollNewChamp() {

    return (
        <ThemeProvider theme={theme}>
            <ChampzTabs value={0} style={{ width: "100%" }}>
                <ChampzTab label="Choose your class" style={{padding:20}}></ChampzTab>
            </ChampzTabs>
            <ParentComponent>
                <Grid container  justifyContent="center">
                    <Grid>
                        <ComponentContainer>
                            <Grid item xs={3}>
                                <ClassList/>
                            </Grid>
                            <Grid item xs={9}>
                                <CenteredImage>
                                    <CenteredImageInner src={character} alt="Vector Image" />
                                </CenteredImage>
                                <CaptionAndSummary>
                                    <Caption>Priest</Caption>
                                    <Summary>
                                        Without question, Morels are the smartest mushrooms around Arborethia. The secret of their wisdom lies in their perforated brains. The natural ventilation cools their brain cells and enables them to run their data processing center at maximum power at all times. But with great power comes great responsibility. And so they have decided to use their given talents and their exhaustive understanding of the inner workings of vitality for the greater good of Arborethia and became extraordinary healers.
                                    </Summary>
                                </CaptionAndSummary>
                            </Grid>
                        </ComponentContainer>
                    </Grid>
                    <Grid>
                        <PillButton sx={{ display: "block", width: "max-content", margin: "23px 0", paddingTop: "20px", paddingBottom: "20px" }}>
                            Create Priest
                        </PillButton>
                    </Grid>
                </Grid>
            </ParentComponent>
        </ThemeProvider>
    );
}
