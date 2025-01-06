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
        <Typography
          display={{ xs: "block", md: "none" }}
          align="center"
          variant="h5"
          component="h4"
          color="#DF7861"
          fontWeight="bold"
          fontStyle= "italic"
          py="3rem"
        >
          Welcome to BeVibrant - Your Path to Holistic Healing and
          Transformation
        </Typography>
        <Typography
          display={{ xs: "none", md: "block" }}
          pt="3rem"
          variant="h2"
          component="h1"
        >
          {" "}
          Welcome to BeVibrant
        </Typography>
        <Typography
          display={{ xs: "none", md: "block" }}
          align="center"
          pb="3rem"
          variant="h5"
          component="h4"
          color="#94B49F"
          fontWeight="bold"
        >
          Your Path to Holistic Healing and Transformation
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
              Originally from Ukraine, I grew up in Tel Aviv, Israel, and have
              spent most of my life living in seven different countries. I
              eventually settled in Brussels, Belgium, where I’ve been sharing
              the holistic wisdom and knowledge gained during my travels with
              dedicated students and clients since 2010. They come to me not
              only for physical healing and relaxation but for a complete
              <Box component="span" fontStyle="Italic">
                {" "}
                holistic experience
              </Box>{" "}
              that supports emotional healing, restores balance, and helps them
              rediscover their life’s path. My clients span all ages, united by
              a common goal: to live a vibrant and meaningful life.
            </Typography>
            <Typography variant="subtitle1">
              I am fluent in{" "}
              <Box component="span" fontStyle="Italic">
                {" "}
                English, French, Greek, Russian, and Hebrew,
              </Box>{" "}
              warmly welcoming clients from diverse backgrounds. With a blend of
              empathy, deep spiritual wisdom, and an understanding of my
              clients’ needs, I ensure an inclusive and seamless experience for
              anyone seeking holistic well-being.
            </Typography>
            <Typography variant="subtitle1">
              I am deeply passionate about my craft and am always evolving. My
              commitment to growth has led me to compete in{" "}
              <Box component="span" fontStyle="Italic">
                {" "}
                European massage championships,
              </Box>{" "}
              where I proudly placed 13th in Europe. Additionally, I am honoured
              to be a member of the{" "}
              <Box component="span" fontStyle="Italic">
                {" "}
                Belgian National Massage Team representing Ayurveda.
              </Box>{" "}
              In 2024 I was awarded as the Top rated therapist in Belgium. This
              dedication to excellence drives me to continually refine my skills
              and offer the best possible service to my clients.
            </Typography>
          </Grid>
          <Grid xs={12} md={10} item>
            <Typography variant="subtitle1">
              My journey towards holistic healing began in 2005, when I made the
              life-changing decision to leave my successful career as an event
              and party organizer in Prague. Seeking a deeper connection with
              myself and a more meaningful life, I embarked on a path of
              self-discovery that led me to India. There, I spent a year living
              as a monk in an ashram (meditation center) in Pune. It was during
              this time that I deepened my spiritual practice, studied various
              bodywork disciplines, and learned from world-renowned spiritual
              masters.
            </Typography>
            <Typography variant="subtitle1">
              <Typography variant="subtitle1">
                Through my immersion in the ancient wisdom of{" "}
                <Box component="span" fontStyle="Italic">
                  {" "}
                  Ayurveda, yoga, meditation, and holistic healing,
                </Box>{" "}
                I experienced profound personal growth and inner healing,
                ultimately finding peace and happiness. It was during this
                transformative journey that my mission became clear: to share
                the depth and beauty of these practices with the Western world
                in a way that aligns with modern lives.
              </Typography>
            </Typography>
          </Grid>
          <Grid xs={12} md={5} item>
            <Typography variant="subtitle1">
              With this vision in mind, I created the brand{" "}
              <Box component="span" fontStyle="Italic">
                {" "}
                Be Vibrant,
              </Box>{" "}
              combining traditional healing techniques with modern practices. I
              integrate different{" "}
              <Box component="span" fontStyle="Italic">
                {" "}
                Ayurvedic massage techniques, Yoga discipline, Reiki, Pranayama
                (breathwork), Sound healing, somatic tools, active meditations
                for emotional release
              </Box>{" "}
              to offer a comprehensive approach to holistic wellness. This
              unique blend helps clients bridge the gap between physical,
              mental, and emotional well-being.
            </Typography>
            <Typography variant="subtitle1">
              At{" "}
              <Box component="span" fontStyle="Italic">
                {" "}
                Be Vibrant,
              </Box>{" "}
              I offer a safe, nurturing space where you can reconnect with
              yourself on a profound level, allowing healing and growth to truly
              happen. After deeply relaxing and healing you physically and
              mentally, my goal through well-being coaching is to empower you to
              embrace personal transformation, set life goals, and find deeper
              meaning in life. The warm oils, powders, and massage tools I use
              are carefully selected to promote grounding, balance, and
              rejuvenation, fostering a strong body-mind connection. Whether
              you're seeking relaxation, healing from emotional trauma, or a
              deeper connection with yourself, I am here to guide and support
              you every step of the way.
            </Typography>
          </Grid>
          <Grid xs={12} md={5} item>
            <img
              src="../assets/bevibrant_top_rated_massage_therapist.webp"
              alt="natalya werthaim"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>

          <Grid xs={12} md={10} textAlign="center" item>
            <Typography
              align="justify"
              sx={{ xs: 0, md: 2 }}
              variant="h5"
              color="#DF7861"
              fontStyle="italic"
            >
              “Be Vibrant is not only a wellness brand; it is a movement
              dedicated to personal growth, deep healing, and spiritual
              awakening. If you're looking to transform your life, restore
              balance, and reconnect with your true self, Be Vibrant offers a
              complete wellness experience. From different Ayurvedic massage,
              Yoga, Reiki to transformative Breathwork sessions , I provide a
              range of healing practices to help you on your journey toward a
              vibrant and meaningful life.”
            </Typography>
            <Typography
              align="right"
              variant="h5"
              color="#DF7861"
              fontStyle="italic"
            >
              With Love Natalya Werthaim
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
