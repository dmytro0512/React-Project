import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import chooseClassBanner from '@/assets/borders/chooseClassBanner.svg';
import { Grid } from '@mui/material';
import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import item1 from '@/assets/classitems/item1.svg';
import item2 from '@/assets/classitems/item2.svg';
import item3 from '@/assets/classitems/item3.svg';
import item4 from '@/assets/classitems/item4.svg';
import item5 from '@/assets/classitems/item5.svg';
import item6 from '@/assets/classitems/item6.svg';
import item7 from '@/assets/classitems/item7.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Vibrant primary color 
    },
    secondary: {
      main: '#03dac6', // Secondary color
    },
  },
});

const ComponentContainer = styled('div')(() => ({
  backgroundImage: `url(${chooseClassBanner})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '632px',
  width: '100%',
  // paddingTop: '30.38px',
  marginTop: '-5px'
}));

const ClassImage = styled('img')(() => ({
  height: '114.11px',
  width: '114.11px',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  marginBottom: '14.53px'
}));

const GridContainer = styled('div')(() => ({
  marginTop: '40.18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export function ClassList() {
  return (
    <ThemeProvider theme={theme}>
      <ChampzTabs value={0} style={{width:"100%"}}>
        <ChampzTab label="Choose your class"></ChampzTab>
      </ChampzTabs>
      <ComponentContainer>
        <GridContainer>
          <Grid container spacing={2} columns={2} alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={1} md={1} display={'center'} justifyContent={'center'} >
              <ClassImage className="class-item" src={item1} />
            </Grid>
            <Grid item xs={1} md={1} display={'center'} justifyContent={'center'} >
              <ClassImage className="class-item" src={item2} />
            </Grid>
            <Grid item xs={1} md={1} display={'center'} justifyContent={'center'} >
              <ClassImage className="class-item" src={item3} />
            </Grid>
            <Grid item xs={1} md={1} display={'center'} justifyContent={'center'} >
              <ClassImage className="class-item" src={item4} />
            </Grid>
            <Grid item xs={1} md={1} display={'center'} justifyContent={'center'} >
              <ClassImage className="class-item" src={item5} />
            </Grid>
            <Grid item xs={1} md={1} display={'center'} justifyContent={'center'} >
              <ClassImage className="class-item" src={item6} />
            </Grid>
            <Grid item xs={1} md={1} display={'center'} justifyContent={'center'} >
              <ClassImage className="class-item" src={item7} />
            </Grid>
          </Grid>
        </GridContainer>
      </ComponentContainer>
    </ThemeProvider>
  );
}