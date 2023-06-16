import ResponsiveAppBar from '../components/NavBar';
import Section from '../components/Section';
import { Box} from '@mui/material';
import Banner from '../components/Banner';


const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#FCF8E8",width:"100%",height:"fit-content" }}>
      <ResponsiveAppBar />
 <Banner/>
      <Section title="beVibrant Philosophy" />
    </Box>
  );
}

export default Home
