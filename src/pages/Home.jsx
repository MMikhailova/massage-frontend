import Section from '../components/Section';
import { Box, Container, Typography } from '@mui/material';
import Banner from '../components/Banner';
import DrawerAppBar from '../components/Navigation';
import TreatmentItem from "../components/Servises";
import TestimonialCarousel from '../components/Testimonials';
import MyComponent from '../components/Natalie';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';

const Home = ({booking}) => {

   useEffect(() => {
     window.scrollTo({ top: 0, behavior: "instant" });
   }, []);
  return (
    <>
      <Helmet>
        <title>Massage and Yoga in Brussels, Ixelles | beVibrant</title>
        <meta
          name="description"
          content="At beVibrant in Brussels, Ixelles, Natalya Werthaim offers holistic wellness services in English, French, Greek, Russian, and Hebrew, combining Massage, Yoga, Ayurveda, and Health Coaching to promote physical, mental, and emotional well-being. Personalized plans address stress, pain, and flexibility."
        />
        <link rel="canonical" href="https://bevibrant.be/"></link>
        <link
          rel="preload"
          href={"../assets/massage-therapist.webp"}
          as="image"
          imagesrcset={"../assets/massage-therapist.webp"}
        />
      </Helmet>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FCF8E8",
          textAlign: "center",
          height: "fit-content",
          px: { xs: 0, md: 5 },
          py: { xs: 0, md: 6 },
          pb: 15,
        }}
      >
        <DrawerAppBar />
        <Banner booking={booking} />

        <Section />
        <Box
          align="justify"
          sx={{
            width: { xs: "90vw", md: "65vw" },
            margin: "auto",
            py: { md: 4 },
            mt: { md: 2 },
          }}
        >
          <Typography variant="subtitle1" component="h3">
            At beVibrant, I welcome clients in{" "}
            <Box component="span" fontWeight="bold">
              English, French, Greek, Russian, and Hebrew
            </Box>
            , offering a holistic approach to health and wellness, which
            combines the benefits of{" "}
            <Box component="span" fontWeight="bold">
              Massage, Yoga, Ayurveda, and Health coaching
            </Box>{" "}
            to promote physical, mental, and emotional well-being. By addressing
            the whole person, rather than just one aspect of their health,
            beVibrant delivers a sense of energy, liveliness, and vitality.
          </Typography>
          <Typography
            mt={2}
            variant="subtitle1"
            component="h3"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            BeVibrant provides personalized services tailored to your specific
            goals and conditions. Whether you want{" "}
            <Box component="span" fontWeight="bold">
              to reduce stress, relieve pain, improve flexibility or receive
              health advice,
            </Box>{" "}
            beVibrant can create a customized plan to meet your individual
            needs. Natalya Werthaim, an experienced and qualified professional
            who is passionate and dedicated to her practice, ensures that her
            clients receive safe, effective, and high-quality services.
          </Typography>
          <Typography
            align="center"
            m={2}
            variant="h5"
            component="h4"
            color="#94B49F"
            fontWeight="bold"
          
            > The welcoming and positive ambiance of beVibrant will make you
            feel at ease and promotes a sense of well-being, making it an
            enjoyable and rejuvenating experience.
          </Typography>
        </Box>
        <Section title={"Well-being services"} />
        <TreatmentItem booking={booking} />
        <Section title={"Clients testimonials"} />
        <TestimonialCarousel />
        <Section title={"About Natalya Werthaim"} />
        <MyComponent />
      </Container>
      <Footer />
    </>
  );
}

export default Home
