import React from "react";
import { Box, Typography } from "@mui/material";

const Section = ({ title }) => {
  return (
    <Box
      sx={{
        mt: { xs: 0, md: 4 },
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {title && (
        <Typography variant="h2" align="center">
          {title}
        </Typography>
      )}
      <Box
        component="img"
        src="../assets/wave.png"
        alt="wave"
        sx={{
          objectFit: "cover",
          width: { xs: "100px", md: "250px" }, // Adjust size for small and medium screens
          margin: "auto",
          height: "10vh",
        }}
      />
    </Box>
  );
};

export default Section;
