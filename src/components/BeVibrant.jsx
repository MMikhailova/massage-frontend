import React from "react";
import { Typography, Link, Breadcrumbs, Stack } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

// Reusable InfoItem with bold text and optional rating
const InfoItem = ({ icon, text, rating }) => (
  <Stack direction="column" alignItems="center" spacing={1}>
    {rating ? (
      <Stack direction="row" spacing={0.3}>
        {[...Array(5)].map((_, idx) => (
          <GradeIcon key={idx} fontSize="small" sx={{ color: "#DF7861" }} />
        ))}
      </Stack>
    ) : (
      React.cloneElement(icon, { sx: { color: "#DF7861", fontSize: 30 } })
    )}
    <Link
      href="#"
      underline="hover"
      sx={{ color: "#DF7861", textAlign: "center" }}
    >
      <Typography variant="body2" fontWeight="bold">
        {text}
      </Typography>
    </Link>
  </Stack>
);

const BeVibrant = () => {
  return (
    <Stack direction="column" alignItems="center" sx={{ rowGap: { md: 1.5 } }}>
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: "64px", md: "80px" },
          color: "#FCF8E8",
          fontWeight: 900,
          position: "absolute",
          bottom: { xs: 50, md: 0 },
          left: 0,
          width: "100%",
          textShadow: "5px 0px 8px #94B49F",
          transform: {
            xs: "translate(0%,-50%)",
            md: "translate(0%,30%)",
          },
        }}
      >
        beVibrant
      </Typography>

      <Breadcrumbs
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Link href="/Yoga" color="#8B9D95" fontWeight="bold" variant="h5">
          Yoga
        </Link>
        <Link href="/Massage" color="#8B9D95" fontWeight="bold" variant="h5">
          Massage
        </Link>
        <Link href="/Coaching" color="#8B9D95" fontWeight="bold" variant="h5">
          Health Coaching
        </Link>
      </Breadcrumbs>

      <Typography sx={{ display: { xs: "flex", md: "none" } }}>
        Saint-Gilles, Brussels
      </Typography>

      <Typography
        sx={{
          display: { xs: "flex", md: "flex" },
          color: { xs: "#DF7861", md: "#678180" },
          fontWeight: "bold",
          pt: 2,
        }}
        variant="h5"
      >
        by Natalya Werthaim
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ md: 6 }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 2, md: 0 }, mb: { xs: 2, md: 4 } }}
        color="#DF7861"
      >
        <InfoItem rating text="Top Rated Therapist" />
        <InfoItem icon={<EmojiEventsIcon />} text="Europe Massage Champion" />
        <InfoItem icon={<GroupsIcon />} text="Belgian National Massage Team" />
      </Stack>
    </Stack>
  );
};

export default BeVibrant;
