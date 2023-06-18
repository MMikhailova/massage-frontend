import { Box, Typography } from '@mui/material'
import React from 'react'

const Section = ({title}) => {
  return (

     
      <Box
        sx={{
          my: "5em",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src="../assets/wave.png"
          alt="wave"
          style={{
            objectFit: "fill",
          }}
        />
        <Typography sx={{ m: "0.8em", position: "absolute" }} variant="h2">
          {title}
        </Typography>
      </Box>
    
  );
}

export default Section
