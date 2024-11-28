

import { Box, Typography } from "@mui/material";
import DrawerAppBar from "../components/Navigation";
import StyledButton from "../components/Button";
import Footer from "../components/Footer";
import Treatment from "../components/Treatment";
import { Helmet } from "react-helmet-async";
// import { useState } from "react";



const positionBtn = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Massage = ({ page, url }) => {

  return (
    <>
      <Helmet>
        <title>Ayurvedic massage in Ixelles, Brussels | beVibrant</title>
        <meta
          name="description"
          content="Ayurvedic massages in Brussels. Offering relaxation massage with healing sounds, Indian head massage, and Chair 'Lunch boost' back & shoulders massage at beVibrant."
        />
        <link rel="canonical" href="https://bevibrant.be/massage"></link>
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
          }}
          variant="quilted"
        >
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              opacity: "100%",
            }}
            src="../assets/handback.webp"
            alt="1"
            loading="Massage"
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
            MASSAGE
          </Typography>
        </Box>

        <Typography
          mx="auto"
          sx={{ width: { xs: "100%", md: "65%" }, p: { xs: 2, md: 0 } }}
          variant="subtitle1"
          textAlign="justify"
        >
          My journey as a massage therapist began in 2005 in India, where I
          lived in an Ashram, practiced meditation, and discovered the
          transformative Ayurvedic Yoga massage from Master Kusum Modak. This
          life-changing experience ignited my passion for studying and mastering
          this healing art. Since then, I’ve dedicated myself to continuous
          learning, refining my techniques to provide the most effective and
          rejuvenating experiences. Sharing this ancient wisdom and therapeutic
          touch is my purpose, helping others find relaxation, healing, and
          harmony.
        </Typography>
        <Typography
          mx="auto"
          mt="1.5em"
          mb="1.5em"
          sx={{ width: { xs: "100%", md: "65%" }, p: { xs: 2, md: 0 } }}
          variant="h6"
          color="#678180"
          fontStyle="italic"
          textAlign="center"
        >
          Together, let us embark on a transformative journey of wellness and
          rediscover the innate potential for health, joy, and harmony within
          you.
        </Typography>
        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Massage;
