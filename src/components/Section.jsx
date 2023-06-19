import { Box, Typography } from '@mui/material'
import React from 'react'

const Section = ({title}) => {
  return (

     
      <Box
        sx={{
        maxHeight: "10vh",
          width:{md:"30%",xs:"40%"},
          display: "flex",
        margin: "auto",
      
          position: "relative",
        }}
      >
        <img
          src="../assets/wave.png"
          alt="wave"
          style={{
            objectFit: "cover",
      width:"100%"
            
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
