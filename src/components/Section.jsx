import { Box, Typography } from '@mui/material'
import React from 'react'

const Section = ({title}) => {
  return (

     
      <Box
        sx={{
          // my: "5em",
        maxHeight: "8vh",
          mb:3,
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src="../assets/wave.png"
          alt="wave"
          style={{
            objectFit: "cover",
            width:"20%"
            
          }}
      />
      {title &&
        <Typography sx={{ m: "0.8em", position: "absolute" }} variant="h2">
          {title}
        </Typography>}
      </Box>
    
  );
}

export default Section
