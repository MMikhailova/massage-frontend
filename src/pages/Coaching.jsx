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
          variant="subtitle1"
          component="h3"
        >
          Somatic coaching is a body-based, trauma-informed approach that
          supports nervous system regulation, emotional resilience, and stress
          release. It can be especially helpful for people experiencing burnout,
          anxiety, overwhelm, chronic tension, or a sense of disconnection from
          the body. Through personalized sessions, I support clients with breath
          awareness, mindful movement, bodily sensations tracking and other
          somatic techniques that help create more balance, safety, and grounded
          presence ,guided by your needs and your own pace. This work helps you
          notice the patterns that keep showing up, so you can gain clarity,
          understand what you need, and move forward with more confidence and
          ease. Somatic coaching may be a valuable next step toward greater
          clarity, self-awareness, and inner understanding. Each session is
          personalized and begins with{" "}
          <strong>a FREE 15-minute assessment </strong> to understand your
          needs.
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
