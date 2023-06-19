import {  Typography,Box} from "@mui/material";
import React from 'react'

const BeVibrant = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          color: "#FCF8E8",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          textShadow: " 0px 4px 4px #94B49F",
          transform: {
            xs: "translate(0%,-8vh)",
            md: "translate(0%, 0%)",
          },
        }}
      >
        beVibrant
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          transform: { xs: "translate(0%,-50%)", md: "translate(0, -7vh)" },
          backgroundColor: "#FCF8E8",
          width: "100%",
          height: "4vh",
        }}
      ></Box>
    </>
  );
}

export default BeVibrant
