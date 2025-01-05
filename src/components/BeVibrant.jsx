import { Typography, Link, Breadcrumbs, Stack } from "@mui/material";

import React from "react";

const BeVibrant = () => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: { md: 1.5 },
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: "64px",
              md: "80px",
              lg: "80px",
            },
            color: "#FCF8E8",
            fontWeight: 900,
            position: "absolute",
            bottom: { xs: 35, md: 0 },
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
        <Breadcrumbs
          aria-label="breadcrumb"
          underline="hover"
          color="#DF7861"
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            width: "100%",
            height: "fit-content",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Link
            href="/Yoga"
            color="#8B9D95"
            fontWeight="bold"
            variant="h5"
            underline="hover"
          >
            Yoga
          </Link>

          <Link
            href="/Massage"
            color="#8B9D95"
            fontWeight="bold"
            variant="h5"
            underline="hover"
          >
            Massage
          </Link>
          <Link
            href="/Coaching"
            color="#8B9D95"
            fontWeight="bold"
            variant="h5"
            underline="hover"
          >
            Health Coaching
          </Link>
        </Breadcrumbs>
        <Typography sx={{ display: { xs: "flex", md: "none" } }}>
          Saint-Gilles, Brussels
        </Typography>
        <Typography
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            color: "#678180",
            fontWeight: "bold",
            pt: 2,
          }}
          variant="h5"
          component="h2"
        >
          Best Massage and Yoga in Brussels
        </Typography>
      </Stack>
    </>
  );
};

export default BeVibrant;
