import {  Typography,Box} from "@mui/material";
import React from 'react'

const BeVibrant = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height:"2vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#FCF8E8",
          position: "absolute",
          bottom: 0,
          left: "50%",
          textShadow: " 0px 4px 6px #94B49F",
          transform: { xs: "translate(-50%,5%)", md: "translate(-50%, 25%)" },
        }}
      >
        beVibrant
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom:0,
          left:0,
          transform: { xs: "translate(0%,-25%)", md: "translate(0, 25%)" },
          backgroundColor: "#FCF8E8",
          width: "100%",
          height: "3vh",
        }}
      ></Box>
    </Box>
  );
}

export default BeVibrant
