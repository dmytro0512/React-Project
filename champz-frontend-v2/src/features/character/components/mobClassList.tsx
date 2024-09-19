import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import chooseClassBanner from '@/assets/backgrounds/items/mob_item.svg';
import chooseClassBanner2 from '@/assets/backgrounds/items/mob_item2.svg';
import { Grid } from '@mui/material';
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
  height: 'auto',
  display: 'inline-block',
}));

const ClassImage = styled('img')(() => ({
  height: '60.2px',
  width: '60.2px',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
  cursor: 'pointer',
//   marginBottom: '14.53px',
  display:'flex',
  justifyContent:'center'
}));

const GridContainer = styled('div')(() => ({
    marginLeft: '13px',
  backgroundImage: `url(${chooseClassBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Center items vertically,
  padding: '20px 0'
}));

const GridContainer2 = styled('div')(() => ({
    marginLeft: '13px',
    marginTop: '10px',
  backgroundImage: `url(${chooseClassBanner2})`,
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Center items vertically,
  padding: '10px 0'
}));

export function ClassList() {
  return (
    <ThemeProvider theme={theme}>
      <ComponentContainer>
        <GridContainer>
          <Grid container spacing={2} alignItems="center" justifyContent="center" columns={1}>
            {[item1, item2, item3, item4, item5, item6].map((src, index) => (
              <Grid item key={index} xs={1} md={1} justifyContent={'center'} display={'flex'}>
                <ClassImage className="class-item" src={src} alt={`item-${index}`} />
              </Grid>
            ))}
          </Grid>
        </GridContainer>
        <GridContainer2>
            <Grid item justifyContent={'center'} alignItems={'center'}>
                <ClassImage className='class-item' src={item7} alt={`item-${7}`} />
            </Grid>
        </GridContainer2>
      </ComponentContainer>
    </ThemeProvider>
  );
}
