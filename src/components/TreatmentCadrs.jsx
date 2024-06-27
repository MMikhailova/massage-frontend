import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

const treatmentOrder = [
  "Deep Tissue Massage Ayurvedic",
  "Sound Healing Massage",
  "Ayurvedic Facelift Massage",
  "Indian head massage",
];

export default function BasicGrid({ data }) {
  const orderedTreatments = [];
  const remainingTreatments = [];

  data.forEach((treatment) => {
    const name = treatment.attributes.name;
    if (treatmentOrder.includes(name)) {
      orderedTreatments.push(treatment);
    } else {
      remainingTreatments.push(treatment);
    }
  });
  orderedTreatments.sort((a, b) => {
    const aName = a.attributes.name;
    const bName = b.attributes.name;
    return treatmentOrder.indexOf(aName) - treatmentOrder.indexOf(bName);
  });


  // Concatenate the ordered treatments with the remaining treatments
  const sortedData = [...orderedTreatments, ...remainingTreatments];

  return sortedData.map((treatment) => (
    <Box key={treatment.attributes.createdAt} sx={{ my: 10 }}>
      <Grid
        container
        key={treatment.attributes.description}
        m="auto"
        sx={{ justifyContent: "center", width: { xs: "100%", md: "80%" } }}
      >
        <Grid xs={12} sm={4} lg={4} textAlign="center">
          <img
            style={{ objectFit: "fill", width: "80%", height: "auto" }}
            src={
              treatment.attributes.imageMain.data
                ? treatment.attributes.imageMain.data.attributes.url
                : ""
            }
            alt=""
          ></img>
        </Grid>
        <Grid xs={12} sm={8} lg={6} px={3}>
          <Typography variant="h4">
            {treatment.attributes.name.toUpperCase()}
          </Typography>
          {treatment.attributes.prices.data.map((price) => (
            <Typography
              variant="subtitle1"
              fontStyle="italic"
              key={`${treatment.id}-${price.attributes.priceEuro}`}
            >
              {price.attributes.duration}
              {price.attributes.package ? " sessions" : " mins"} -{" "}
              {price.attributes.priceEuro} €
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
