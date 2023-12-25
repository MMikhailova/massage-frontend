import { Box, Typography } from "@mui/material";
import Treatment from "../components/Treatment";
import DrawerAppBar from "../components/Navigation";
import StyledButton from "../components/Button";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const positionBtn = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Yoga = ({ page, url }) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
  return (
    <>
      <Helmet>
        <title>Therapeutic Yoga in Brussels</title>
        <meta
          name="description"
          content="Individualized, one-on-one sessions guided by your own qualified yoga therapist in Brussels."
        />
        <link rel="canonical" href="/Yoga"></link>
      </Helmet>
      <Box
        sx={{
          height: "fitContent",
          backgroundColor: "#FCF8E8",
          width: "100%",
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
            height: { md: "60vh", xs: "fit-content" },
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
              width: "100%",
              height: "100%",
              opacity: "100%",
            }}
            src="../assets/yoga_yoga_page.jpg"
            alt="1"
            loading="Yoga"
          />
          <StyledButton position={positionBtn} url={url} />

          <Typography
            variant="poster"
            sx={{
              py: 0,
              position: "absolute",
              bottom: "0.3em",
            }}
          >
            YOGA
          </Typography>
        </Box>
        <Typography
          textAlign="center"
          mx="auto"
          sx={{ width: { xs: "100%", md: "65%" }, p: { xs: 2, md: 0 } }}
          variant="h6"
          color="#DF7861"
          fontStyle="italic"
        >
          Let us embark on this journey together, where the transformative power
          of yoga will enable you to experience the perfect balance of body,
          mind, and spirit.
        </Typography>
        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Yoga;
