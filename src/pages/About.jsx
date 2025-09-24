


import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerAppBar from "../components/Navigation";
import Footer from "../components/Footer";
import ImagesCarousel from "../components/Carousel";
import { Helmet } from "react-helmet-async";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const mediaStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <Helmet>
        <title>
          Natalya Werthaim - Ayurvedic Massage Therapist at beVibrant, Brussels
        </title>
        <meta
          name="description"
          content="Natalya Werthaim, a certified Ayurvedic Massage Therapist, Therapeutic Yoga & Health Coach, and Reiki practitioner, welcomes clients in English, French, Greek, Russian, and Hebrew at beVibrant, Brussels, offering holistic well-being services."
        />
        <link rel="canonical" href="https://bevibrant.be/about" />
        <meta
          property="og:title"
          content="Natalya Werthaim - Ayurvedic Massage Brussels"
        />
        <meta
          property="og:description"
          content="Explore holistic wellness with Natalya Werthaim at beVibrant: Ayurvedic massage, yoga, reiki, and more in Brussels."
        />
        <meta property="og:url" content="https://bevibrant.be/about" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <DrawerAppBar />

      <Container
        maxWidth="xl"
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          pb: 15,
        }}
      >
        <Grid
          container
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          spacing={1}
          component="section"
          aria-label="Yoga image gallery"
        >
          {[
            {
              src: "../assets/yoga-pose.jpg",
              alt: "Yoga pose with balance posture",
            },
            {
              src: "../assets/yoga-position.jpg",
              alt: "Seated yoga meditation posture",
            },
            {
              src: "../assets/yoga-open-air.jpg",
              alt: "Yoga practice in open air nature",
            },
          ].map((img, i) => (
            <Grid item md={4} height="45vh" key={i}>
              <img
                src={img.src}
                alt={img.alt}
                style={mediaStyle}
                loading="lazy"
              />
            </Grid>
          ))}
        </Grid>

        <Typography
          display={{ xs: "flex", md: "block" }}
          pt="3rem"
          variant="h2"
          component="h1"
          sx={{
            fontSize: {
              xs: "2rem",
              md: "2.5rem",
            },
            fontWeight: 600,
            fontStyle: "italic",
            color: "#DF7861",
          }}
        >
          Welcome to BeVibrant
        </Typography>

        <Typography
          display={{ xs: "flex", md: "block" }}
          align="center"
          pb="3rem"
          variant="h4"
          component="h2"
          sx={{
            fontSize: {
              xs: "1.6rem",
              md: "1.8rem",
            },
            fontWeight: 600,
            color: "#94B49F",
          }}
        >
          Your Path to {isMobile && <br />} Holistic Healing and Transformation
        </Typography>

        {/* About Section */}
        <Grid
          container
          component="section"
          aria-labelledby="about-natalya"
          sx={{
            justifyContent: "center",
            width: { xs: "95%", md: "80%" },
            gap: 2,
          }}
          textAlign="justify"
        >
          <Typography
            variant="h3"
            component="h2"
            id="about-natalya"
            sx={{ display: "none" }}
          >
            About Natalya Werthaim
          </Typography>

          <Grid
            item
            xs={12}
            md={5}
            textAlign="center"
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src="../assets/Nataly_Werthaim_bevibrant.webp"
                alt="Natalya Werthaim portrait, Ayurvedic therapist in Brussels"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="subtitle1">
              Originally from Ukraine and raised in Tel Aviv, I’ve lived in
              seven countries before settling in Brussels, where I’ve been
              sharing holistic wisdom with clients and students since 2010. My
              work goes beyond massage – it is a complete
              <Box component="span" fontWeight={500}>
                {" "}
                holistic experience that supports emotional healing, restores
                balance, and helps people rediscover their life’s path.
              </Box>
            </Typography>

            <Typography variant="subtitle1">
              In 2025, I proudly became an official{" "}
              <Box component="span" fontWeight={500}>
                {" "}
                European Massage Champion 🏆.
              </Box>{" "}
              As a member of the
              <Box component="span" fontWeight={500}>
                {" "}
                Belgian National Massage Team representing Ayurveda and a
                Treatwell Top Rated Therapist in Belgium ,{" "}
              </Box>{" "}
              I am now expanding my journey by studying{" "}
              <Box component="span" fontWeight={500}>
                {" "}
                Somatic Experiencing®️{" "}
              </Box>{" "}
              to bring deeper support in trauma healing and body-mind
              integration.
            </Typography>

            <Typography variant="subtitle1">
              My journey began in 2005, when I left a successful career in
              Prague to live in an ashram in India as a monk, where I studied
              <Box component="span" fontWeight={500}>
                {" "}
                Ayurveda, yoga, meditation, and bodywork.
              </Box>{" "}
              This path transformed my life and became my mission:
              <Box component="span" fontWeight={500}>
                {" "}
                bringing the depth of ancient practices into modern, accessible
                healing.
              </Box>
            </Typography>

            <Typography variant="subtitle1">
              Fluent in
              <Box component="span" fontWeight={500}>
                {" "}
                English, French, Greek, Russian, and Hebrew,
              </Box>{" "}
              I warmly welcome clients from diverse backgrounds into a safe,
              inclusive
              <Box component="span" fontWeight={500}>
                {" "}
                space of growth, relaxation, and transformation.
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="subtitle1">
              With this vision in mind, I created the brand
              <Box component="span" fontWeight={500}>
                {" "}
                Be Vibrant,
              </Box>{" "}
              combining traditional healing techniques with modern practices. I
              integrate different
              <Box component="span" fontWeight={500}>
                {" "}
                Ayurvedic massage techniques, Yoga discipline, Reiki, Pranayama
                (breathwork), Sound healing, somatic tools, active meditations
                for emotional release
              </Box>{" "}
              to offer a comprehensive approach to holistic wellness.
            </Typography>

            <Typography variant="subtitle1">
              At
              <Box component="span" fontWeight={500}>
                {" "}
                Be Vibrant,
              </Box>{" "}
              I offer a safe, nurturing space where you can reconnect with
              yourself on a profound level, allowing healing and growth to truly
              happen. After deeply relaxing and healing you physically and
              mentally,
              <Box component="span" fontWeight={500}>
                {" "}
                my goal through well-being coaching is to empower you to embrace
                personal transformation, set life goals, and find deeper meaning
                in life.{" "}
              </Box>
              The warm oils, powders, and massage tools I use are carefully
              selected to promote grounding, balance, and rejuvenation,
              fostering a strong body-mind connection.
              <Box component="span" fontWeight={500}>
                {" "}
                Whether you're seeking relaxation, healing from emotional
                trauma, or a deeper connection with yourself, I am here to guide
                and support you every step of the way.
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <img
              src="../assets/bevibrant_top_rated_massage_therapist.webp"
              alt="Natalya Werthaim receiving top-rated therapist award"
              style={mediaStyle}
              loading="lazy"
            />
          </Grid>

          <Grid item xs={12} md={10} textAlign="center" py={4}>
            <Typography
              align="justify"
              variant="h5"
              color="#DF7861"
              fontWeight="bold"
              fontStyle="italic"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.25rem",
                },
              }}
            >
              “Be Vibrant stands for more than just well-being — it’s an
              invitation to rediscover your inner strength and reconnect with
              what truly matters. Through carefully curated healing practices
              like Ayurvedic massage, Yoga, Reiki, and Breathwork, I create a
              supportive space where deep transformation can unfold naturally.
              Whether you’re seeking clarity, renewal, or a deeper mind-body
              connection, you’re warmly welcome on this journey.”
            </Typography>

            <Typography
              align="right"
              variant="h5"
              color="#DF7861"
              fontStyle="italic"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.25rem",
                },
                mt: 2,
              }}
            >
              With love, Natalya Werthaim
            </Typography>
          </Grid>
        </Grid>

        {/* Carousel Section */}
        <Box
          component="section"
          aria-label="Retreat images and testimonials"
          sx={{
            width: "100%",
            backgroundColor: "#8B9E95",
            py: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
          }}
        >
          <ImagesCarousel />
        </Box>
      </Container>

      <Footer />
    </>
  );
};


export default About;