// import Section from '../components/Section';
import { Box} from '@mui/material';
import Banner from '../components/Banner';
import DrawerAppBar from '../components/Navigation';


const Home = () => {
  return (
    <Box
      sx={{ backgroundColor: "#FCF8E8", width: "100%", height: "100vh" }}
    >
      <DrawerAppBar/>
      <Banner />
      {/* <Section title="beVibrant Philosophy" /> */}
    </Box>
  );
}

export default Home
