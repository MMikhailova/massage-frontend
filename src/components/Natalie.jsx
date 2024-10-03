

import React from "react";
import {
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,

} from "@mui/material";


const MyComponent = () => {
  const positioning={position: "absolute",top:20,left:"48%"}
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        position: "relative",
        // minHeight: "fit-content",
        height: "fit-content",
        mx: "auto",
        my: "5em",
      }}
    >
      <img
        src="./assets/natalya-werthaim-bevibrant.webp"
        alt="Natalia"
        width={600} // Explicit width
        height={900} // Explicit height
        style={{
          objectFit: "cover",
          boxShadow: " 0px 0px 4px 0px",
          zIndex: 1,
          width: isSmallScreen ? "100%" : "50%", // Responsive width
          height: isSmallScreen ? "auto" : "100%", // Maintain aspect ratio on larger screens
        }}
      />
      <Box
        position={isSmallScreen ? "unset" : positioning}
        sx={{
          p: "3em",
          width: isSmallScreen ? "100%" : "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          backgroundColor: "#8B9E95",
          height: "100%",
        }}
      >
        <Typography
          align="justify"
          color="white"
          variant="subtitle1"
          component="h3"
        >
          NATALYA WERTHAIM is a highly experienced and well-trained professional
          who has been providing therapeutic massage services for over 15 years.
          She has an extensive educational background in Ayurvedic massage,
          yoga, and wellness therapies and treatments, having learned her skills
          in India over many years under the guidance of Ayurvedic doctors. In
          her approach, she focuses on identifying the root cause of issues and
          advises on lifestyle changes rather than solely addressing the
          symptoms.
        </Typography>
        <Button
          size="medium"
          sx={{ mt: 2, color: "#FFFF", borderColor: "#FFFF" }}
          variant="outlined"
          href="/About"
        >
         Learn more about Natalya
        </Button>
      </Box>
    </Box>
  );
};

export default MyComponent;
