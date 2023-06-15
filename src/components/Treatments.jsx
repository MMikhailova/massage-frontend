import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function BasicGrid({data}) {

  return data.map((treatment) => (
    <Box sx={{ my: 10 }}>
      <Grid
        container
        width="80%"
        m="auto"
        sx={{ justifyContent: "center" }}
      >
        <Grid lg={4} >
          <img
            style={{ objectFit: "cover" }}
            width="80%"
            src={treatment.attributes.imageMain.data.attributes.url}
            alt=""
          ></img>
        </Grid>
        <Grid xs={6} >
          <Typography variant="h5">{treatment.attributes.name}</Typography>
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
