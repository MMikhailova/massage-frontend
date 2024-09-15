import { Container,Grid,Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DrawerAppBar from "../components/Navigation";
import Footer from "../components/Footer";
import ImagesCarousel from "../components/Carousel";
import {Helmet} from 'react-helmet-async'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const mediaStyle = {
    width: "100%",
height:"100%",
  objectFit:"cover"
  
  };
  return (
    <>
      <Helmet>
        <title>
          Natalya Werthaim - Ayurvedic Massage Therapist at beVibrant, Brussels
        </title>
        <meta
          name="description"
          content="Natalya Werthaim, a certified Ayurvedic Massage Therapist, Therapeutic Yoga & Health Coach, and Reiki practitioner, welcomes clients in English, French, Greek, Russian, and Hebrew at beVibrant, Brussels, offering holistic well-being services"
        />
        <link rel="canonical" href="https://bevibrant.be/about"></link>
      </Helmet>
      <Container
        maxWidth="xlg"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          height: "fit-content",
          alignItems: "center",
          pb: 15,
        }}
      >
        <DrawerAppBar />
        <Grid
          container
          sx={{ display: { xs: "none", md: "flex" } }}
          justifyContent="center"
          spacing={{ xs: 0, md: 1 }}
        >
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              height: "45vh",
            }}
          >
            <img
              src="../assets/yoga-pose.jpg"
              alt="yoga pose"
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            />
          </Grid>
          <Grid item md={4} xs={12} height="45vh">
            <img
              src="../assets/yoga-position.jpg"
              alt="yoga seating position"
              style={mediaStyle}
            />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              height: "45vh",
            }}
          >
            <img
              src="../assets/yoga-open-air.jpg"
              alt="yoga at open air"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
        <Typography py="3rem" variant="h2">
          About Natalya Werthaim
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: "center",
            m: "auto",
            width: { xs: "95%", md: "80%" },
            height: "fit-content",
            pb: 15,
          }}
          textAlign="justify"
          gap={2}
        >
          <Grid xs={12} md={5} textAlign="center" item>
            <img
              src="../assets/natalya-werthaim-photo.webp"
              alt="natalya werthaim"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid xs={12} md={5} item>
            <Typography variant="subtitle1">
              Originally from Ukraine, I have spent most of my life in Tel Aviv,
              Israel. I am fluent in{" "}
              <Box component="span" fontStyle="Italic">
                English, French, Greek, Russian, and Hebrew
              </Box>
              , welcoming my clients in these languages to ensure a smooth and
              inclusive experience for individuals seeking holistic well-being.
              <br />
              I embarked on a spiritual journey in my late 20s. This quest for
              deeper meaning led me to live in seven different countries,
              explore various spiritual techniques, and learn different bodywork
              disciplines to enhance well-being. My journey began in Prague,
              where I ran my own events company. However, I felt unfulfilled by
              the corporate world and sought something more meaningful in my
              life. After a long period of traveling, this search eventually led
              me to India, where I spent almost a year living in an Ashram in
              Puna. Here, I delved deep into Yoga and meditation, studying at
              the Iyengar Institute and completing various transformation
              courses under the tutelage of spiritual leaders. <br />
              During my time in India, I was lucky to meet the great Master
              Kusum Modak and study Ayurvedic Yoga massage methods at her
              institute and to become a certified therapist. I have been
              passionately dedicated to this practice ever since, using it to
              help people reconnect with their inner selves and to solve
              physical and mental issues.From India, my spiritual journey led me
              to Greece, where I met the famous Reiki master Arjava, and
              obtained my II degree in Reiki.
            </Typography>
          </Grid>

          <Grid xs={12} md={10} item>
            <Typography variant="subtitle1">
              I also became a certified Yoga teacher studying at the Canadian
              Sempreviva Yoga School, before opening my first Yoga studio in
              Kythira, a magical Greek island. Eventually, I moved and settled
              in Belgium, where I have been sharing my wisdom and knowledge with
              dedicated students and clients in my studio in Brussels for the
              past 15 years. Through my work as a therapist and Yoga teacher, I
              strive to help people achieve greater well-being, inner peace, and
              physical health.
            </Typography>
          </Grid>
          <Grid xs={12} md={10} textAlign="center" item>
            <Typography
              align="center"
              sx={{ xs: 0, md: 2 }}
              variant="h5"
              color="#DF7861"
              fontStyle="italic"
            >
              “Join me on a transformative journey towards Vibrant well-being,
              where the power of Yoga, the healing touch of massage and the
              guidance of a dedicated health coach converge to ignite your inner
              radiance...”
            </Typography>
            <Typography
              align="right"
              variant="h5"
              color="#DF7861"
              fontStyle="italic"
            >
              Natalya W.
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "99vw",
            height: { xs: "auto", md: "fit-content" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            backgroundColor: "#8B9E95",
            py: 2,
          }}
        >
          <ImagesCarousel />
        </Box>
      </Container>
      <Footer />
    </>
  );}

export default About;
