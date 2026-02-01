import { Box, Button, Typography } from "@mui/material";
import Treatment from "../components/Treatment";
import DrawerAppBar from "../components/Navigation";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const Coaching = ({ page, url }) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          I offer somatic coaching for people experiencing burnout, chronic
          stress, anxiety, trauma, or disconnection from their body. Through a
          trauma-informed, body–mind approach, I support deep healing and
          nervous system regulation to restore balance, safety, and vitality.
          Using breathwork, guided meditation, mindful movement, and somatic
          techniques, I help you release stored tension, build emotional
          resilience, and reconnect with your body. Each session is personalized
          and begins with <strong>a FREE 15-minute assessment </strong> to
          understand your needs.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
            gap: 2,
            width: "fit-content",
            mx: "auto",
            textAlign: "center",
          }}
        >
          {isMobile ? (
            <Button
              size="large"
              variant="outlined"
              href="tel:+32488863960"
              sx={{
                px: 3, // horizontal padding inside button
                py: 1.5, // vertical padding
                mx: 2, // margin left/right (prevents edge-to-edge)
                maxWidth: "90%", // safety for very small screens
                whiteSpace: "normal", // allows text to wrap nicely
                textAlign: "center",
              }}
            >
              Call to book your FREE 15-minute assessment
            </Button>
          ) : (
            <Typography>
              <strong>
                Call me to book your FREE 15-minute assessment
                <br />
                +32 488 86 39 60
              </strong>
            </Typography>
          )}

          <Button
            size="large"
            variant="contained"
            href="https://widget.treatwell.be/en/place/bevibrant-1/"
            target="_blank"
          >
            Book your session online
          </Button>
        </Box>
        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Coaching;
