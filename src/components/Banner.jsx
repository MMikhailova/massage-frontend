import * as React from "react";

import ImageListItem from "@mui/material/ImageListItem";
import { Box,Typography} from "@mui/material";
import StyledButton from "./Button";

const positionBtn = {
  top: "65%",
  left:"50%",
  transform: "translate(-50%, -50%)",
  position:"absolute"
};
export default function Banner() {

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          justifyContent: "center",
          display: "flex",
          alignContent: "center",
          position: "relative",
        }}
        variant="quilted"
        // gap={1}
      >
        <ImageListItem
          sx={{
            width: "65%",
            opacity: "90%",
            display: { xs: "none", sm: "block" },
          }}
        >
          <img
            style={{ objectFit: "cover" }}
            src="../assets/banner2.jpg"
            alt="1"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem
          sx={{
            flexGrow: 1,
            position: "relative",
          }}
        >
          <StyledButton
            position={positionBtn}
            url={"https://www.eleniavgenaki.com/category/6607051387109376"}
          />
          <img
            src="../assets/hands.jpg"
            alt="2"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </ImageListItem>
        {/* <ImageListItem
        sx={{
          // px: "1em",
          width: "33%",
          opacity: "90%",
          display: { xs: "none", sm: "block" },
        }}
      >
        <img
          src="../assets/handback.jpg"
          alt="3"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </ImageListItem> */}
      </Box>
      <Box
        sx={{
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          width: "20vw",
          height: "25vh",
          backgroundImage: 'url("../assets/wave.svg")',
          backgroundSize: "cover",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          boxShadow: "5px 10px 8px #888888",
        }}
      >
        <Typography sx={{ px: "1.1rem" }} variant="h3" gutterBottom>
          "beVibrant" offers a holistic approach to health and wellness.
        </Typography>
      </Box>
    </>
  );
}


