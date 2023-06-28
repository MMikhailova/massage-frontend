import { Box, Typography } from "@mui/material";
import Treatment from "../components/Treatment";
import DrawerAppBar from "../components/Navigation";
import StyledButton from "../components/Button";
import Footer from "../components/Footer";

const positionBtn = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Yoga = ({ page }) => {
  return (
    <>
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
            height: { md: "75vh", xs:"fit-content" },
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
            src="../assets/yoga_yoga_page.jpg"
            alt="1"
            loading="Yoga"
          />
          <StyledButton position={positionBtn} />

          <Typography
            variant="poster"
            sx={{
              position: "absolute",
              bottom: 0,
              transform: {
                xs: "translate(0%,-3.5vh)",
                lg: "translate(0, -7vh)",
              },
            }}
          >
            YOGA
          </Typography>
        </Box>

        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Yoga;
