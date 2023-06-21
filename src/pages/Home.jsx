import Section from '../components/Section';
import { Box, Container, Typography } from '@mui/material';
import Banner from '../components/Banner';
import DrawerAppBar from '../components/Navigation';
import TreatmentItem from "../components/Servises";

import TestimonialCarousel from '../components/Testimonials';


    
const Home = () => {
  return (
    <Container
      maxWidth="xlg"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FCF8E8",
        // width: "99vw",
        // my:2,
        height: "fit-content",
        px: { xs: 0, md: 5 },
        py: { xs: 0, md: 8 },
      }}
    >
      <DrawerAppBar />
      <Banner />
      <Section />
      <Box
        align="justify"
        sx={{
          width: { xs: "90vw", md: "65vw" },
          margin: "auto",
          fontStyle: "italic",
          py: 3,
        }}
      >
        <Typography variant="subtitle1">
          BeVibrant offers a holistic approach to health and wellness, which
          combines the benefits of massage, yoga, Ayurveda, and health coaching
          to promote physical, mental, and emotional well-being. By addressing
          the whole person, rather than just one aspect of their health,
          beVibrant delivers a sense of energy, liveliness, and vitality.
        </Typography>
        <Typography mt={2} variant="subtitle1">
          BeVibrant provides personalized services tailored to your specific
          goals and conditions. Whether you want to reduce stress, relieve pain,
          improve flexibility or receive health advice, beVibrant can create a
          customized plan to meet your individual needs. Natalya Werthaim, an
          experienced and qualified professional who is passionate and dedicated
          to her practice, ensures that her clients receive safe, effective, and
          high-quality services.
        </Typography>
        <Typography align="center" m={2} variant="h5" color="#DF7861">
          The welcoming and positive ambiance of beVibrant will make you feel at
          ease and promotes a sense of well-being, making it an enjoyable and
          rejuvenating experience.
        </Typography>
      </Box>
      <Section title={"Well-being services"} />
      <TreatmentItem />
      <Section title={"Clients testimonials"} />
      <TestimonialCarousel
        ref={(el) => (this.Carousel = el)}
        additionalTransfrom={-20 * 5}
      />
    </Container>
  );
}

export default Home
