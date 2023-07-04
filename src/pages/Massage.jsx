

import { Box, Typography } from "@mui/material";
import DrawerAppBar from "../components/Navigation";
import StyledButton from "../components/Button";
import Footer from "../components/Footer";
import Treatment from "../components/Treatment";

const positionBtn = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Massage = ({ page,url }) => {
  
  return (
    <>
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
            backgroundColor: "#504B3E",
            height: "75vh",
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
            sx={{
              position: "absolute",
              bottom: 0,
              margin: 0,
              transform: {
                xs: "translate(0%,-3.5vh)",
                lg: "translate(0, -7vh)",
              },
            }}
          >
            MASSAGE
          </Typography>
        </Box>
        <Typography
          textAlign="center"
          mx="auto"
          sx={{ width: { xs: "100%", md: "60%" }, p: { xs: 2, md: 0 } }}
          variant="subtitle1"
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

export default Massage;
