import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";



export default function BasicGrid({data}) {

  return data.map((treatment) => (
    <Box sx={{ my: 10 }}>
      <Grid
        container
    
        m="auto"
        sx={{ justifyContent: "center", width: { xs: "100%", md: "80%" } }}
      >
        <Grid xs={12} lg={4} textAlign="center">
          <img
            style={{ objectFit: "fill",width:"80%",height:"90%"}}
            src={treatment.attributes.imageMain.data.attributes.url}
            alt=""
          ></img>
        </Grid>
        <Grid xs={12} lg={6} px={3}>
          <Typography variant="h4">{treatment.attributes.name}</Typography>
          {treatment.attributes.prices.data.map((price) => (
            <Typography variant="subtitle1">
              {price.attributes.minutes} min - {price.attributes.priceEuro} €
            </Typography>
          ))}
          <Typography variant="p">
            {treatment.attributes.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  ));
}
