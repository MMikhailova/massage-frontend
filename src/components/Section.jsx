import { Box, Typography } from '@mui/material'
import React from 'react'

const Section = ({title}) => {
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
          width: { xs: "12px", md: "250px" },
          margin:"auto",
         height: "10vh",
        }}
      />
    </Box>
  );
}

export default Section
