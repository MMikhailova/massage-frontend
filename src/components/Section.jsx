import { Box, Typography } from '@mui/material'
import React from 'react'

const Section = ({title}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // position: "relative",
      }}
    >
      {title && (
        <Typography
          sx={{
            // pb: 6,
            // width: "50vw",
            // position: "absolute",
            // bottom: 0,
            // left: 0,
            // transform: { xs: "translate(0%,-5vh)", md: "translate(0, -7vh)" },
          }}
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
