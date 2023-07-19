import { Typography,Link, Breadcrumbs } from "@mui/material";

import React from 'react'

const BeVibrant = () => {
  return (
    <>
      <Typography
      
        sx={{
          fontSize: {
            xs: "64px", md: "80px", lg: "80px"
          },
          color: "#FCF8E8",
          fontWeight: 900,
          position: "absolute",
          bottom: { xs: 40, md: 0 },
          left: 0,
          width: "100%",
          textShadow: " 5px 0px 8px #94B49F",
          transform: {
            md: "translate(0%,30%)",
          },
        }}
      >
        beVibrant
      </Typography>

      <Typography
        sx={{ display: { xs: "none", md: "flex" } }}
        py={4}
        variant="h4"
        component="h2"
      >
        wellbeing treatments
      </Typography>
      <Breadcrumbs
        aria-label="breadcrumb"
        underline="hover"
        color="#DF7861"
        sx={{
          my: 5,
          display: {
            xs: "flex",
            md: "none",
          },
          width: "100%",
          height: "fit-content",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link href="/Yoga" color="#678180" variant="h5" underline="hover">
          Yoga
        </Link>
        <Link href="/Massage" color="#678180" variant="h5" underline="hover">
          Massage
        </Link>
        <Link href="/Coaching" color="#678180" variant="h5" underline="hover">
          Health Coaching
        </Link>
      </Breadcrumbs>
    </>
  );
}

export default BeVibrant
