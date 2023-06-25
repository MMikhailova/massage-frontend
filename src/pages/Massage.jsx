

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
const Massage = () => {
  
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
              objectFit:  "cover",
              width:"100%",
              height: "auto",
              opacity: "100%",
            }}
            src="../assets/handback.jpg"           
            alt="1"
            loading="Massage"
          />
          <StyledButton position={positionBtn} />

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

        <Treatment page={"massage"} />
      </Box>
      <Footer />
    </>
  );
};

export default Massage;
