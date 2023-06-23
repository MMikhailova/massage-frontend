import React from "react";
import { Grid, Typography,Button } from "@mui/material";

const MyComponent = () => {
  return (
    <Grid
      container
      sx={{
        my: 3,
        p: 2,
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: {
          lg: "60vw",md:"100%"
        },
        height: { md:"70vh"},
        mx: "auto",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "end",
          width: { xs: "100%", md: "50%" },
          height: "100%",
          position: { xs: "static", md: "absolute" },
          top: -20,
          left: 0,
          zIndex: 1,
        }}
      >
        <img
          src="./assets/natalia.jpg"
          alt="Natalia"
          style={{
            objectFit: "cover",
            width: "100%",
            boxShadow: " 0px 0px 4px 0px",
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "50%" },
          marginLeft: { xs: 0, md: "50%" },
          padding: { xs: 4, md: 8 },
          color: "#FFFF",
          textAlign: "left",
          backgroundColor: "#8B9E95",
        }}
      >
        <Typography variant="subtitle1">
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
        >
          READ MORE
        </Button>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
