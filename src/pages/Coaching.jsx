import { Box, Button, Typography } from "@mui/material";
import Treatment from "../components/Treatment";
import DrawerAppBar from "../components/Navigation";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react";

// const positionBtn = {
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   position: "absolute",
// };
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
              md: 8,
            },
            mt: {
              xs: 0,
              md: 8,
            },
            height: "60vh",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
          variant="quilted"
        >
          <img
            src="/assets/somatic-coaching-at-bevibrant.png"
            alt="Somatic coaching"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%", // ✅ critical
              objectFit: "cover", // ✅ hero crop
              objectPosition: "center 15%", // ✅ move crop DOWN/UP so face is visible
            }}
          />

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
          stress, and recover from burnout. Before we begin coaching, I invite
          you to{" "}
          <strong>a free 15-minute assessment to understand your needs.</strong>
          .
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Button
            size="large"
            target="_blank"
            href="https://widget.treatwell.be/en/place/bevibrant-1/"
            variant="contained"
          >
            Book your coaching session
          </Button>
        </Box>
        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Coaching;
