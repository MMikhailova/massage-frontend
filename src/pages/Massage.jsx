

import { Box, Typography } from "@mui/material";
import StyledButton from "./Button";

import BasicGrid from "./HomeTreatments";

import WovenImageList from "./Gallery";
import DrawerAppBar from "./Navigation";
import Footer from "./Footer";

const positionBtn = {
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Massage = ({ page,treatments,gallery }) => {
  const bannerImg = [
    { id: "massage", url: "../assets/handback.jpg" },
    { id: "yoga", url: "../assets/yoga_page.jpg" },
    { id: "vibrant coaching", url: "../assets/health_coaching.jpg" },
  ];

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
            width: "100%",
            height: "65vh",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            position: "relative",
          }}
          variant="quilted"
          // gap={1}
        >
          <img
            style={{ objectFit: "fit", width: "100vw", opacity: "85%" }}
            src="../assets/handback.jpg"
            alt="1"
            loading="back massage"
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
            {page.toUpperCase()}
          </Typography>
        </Box>

        <BasicGrid data={treatments} />

        <WovenImageList data={gallery} />
      </Box>
      <Footer />
    </>
  );
};

export default Massage;
