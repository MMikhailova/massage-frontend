import { Box, Typography } from "@mui/material";
import Treatment from "../components/Treatment";
import DrawerAppBar from "../components/Navigation";
import StyledButton from "../components/Button";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react";

const positionBtn = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Coaching = ({ page, url }) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
  return (
    <>
      <Helmet>
        <title>
          Holistic Health and Wellness Coaching in Brussels | beVibrant
        </title>
        <meta
          name="description"
          content="At beVibrant, we offer holistic health coaching that integrates nutrition, physical activity, stress management, and emotional well-being. Join Natalya on a personalized journey to balance and vitality, with expert guidance tailored to your unique goals. "
        />
        <link rel="canonical" href="https://bevibrant.be/coaching"></link>
      </Helmet>
      <Box
        sx={{
          height: "fitContent",
          backgroundColor: "#FCF8E8",
        }}
      >
        <DrawerAppBar />
        <Box
          sx={{
            m: {
              xs: 0,
              md: 5,
            },
            mt: {
              xs: 0,
              md: 8,
            },
            background: "#595748",
            height: "60vh",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            position: "relative",
          }}
          variant="quilted"
        >
          <img
            style={{
              objectFit: "cover",
              width: { xs: "100%", md: "60%" },
              height: "auto",
              opacity: "90%",
            }}
            src="../assets/coaching.webp"
            alt="1"
            loading="Coaching"
          />
          <StyledButton position={positionBtn} url={url} />

          <Typography
            variant="poster"
            component="h1"
            sx={{
              position: "absolute",
              bottom: "0.3em",
              margin: 0,
            }}
          >
            COACHING
          </Typography>
        </Box>
        <Typography
          textAlign="center"
          mx="auto"
          sx={{ width: { xs: "100%", md: "75%" }, p: { xs: 2, md: 0 } }}
          variant="h6"
          color="#DF7861"
          fontStyle="italic"
        >
          Imagine having a dedicated partner on your wellness journey, someone
          who truly listens, understands, and supports you every step of the
          way. That's exactly what my personalized health coaching is all about.
          I'll work closely with you to uncover your unique needs and
          aspirations, and together, we'll create a road map towards a
          healthier, happier you.
        </Typography>
        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Coaching;
