import { Box, Typography } from '@mui/material'
import React from 'react'

const Section = ({title}) => {
  return (
    <Box
      sx={{
        mt: { xs:"1em",md:"3em" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign:"center"
      }}
    >
      {title && (
        <Typography
          variant="h2"
        >
          {title}
        </Typography>
      )}
      <img
        src="../assets/wave.png"
        alt="wave"
        style={{
          objectFit: "cover",
          width: "20%",
          margin:"auto",
          maxHeight: "10vh",
        }}
      />
    </Box>
  );
}

export default Section
