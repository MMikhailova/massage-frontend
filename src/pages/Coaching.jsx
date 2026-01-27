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
          Stress & Anxiety Relief with Body-Based Therapy in Brussels |
          beVibrant
        </title>
        <meta
          name="description"
          content="Feeling overwhelmed in Brussels? Somatic coaching offers nervous system regulation, stress and anxiety relief at beVibrant"
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
            src="../assets/Natalya_in_oysho_ashram.png"
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
          Feeling overwhelmed, anxious, emotionally stuck or burned out? At
          beVibrant in Brussels, I offer somatic coaching and trauma-informed
          support to help you regulate your nervous system, relieve chronic
          stress, and recover from burnout. This gentle, body-based approach
          supports emotional regulation, reconnects you with your inner calm,
          and helps you feel more grounded, resilient, and at ease in daily
          life.
        </Typography>
        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Coaching;
