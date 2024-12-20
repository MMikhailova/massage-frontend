import { useState } from "react";
import BeVibrant from "./BeVibrant";
import {
  Grid,
  Typography,
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Link,
} from "@mui/material";

const positionBtn = {
  bottom: 0,
  left: "50%",
  transform: "translate(-45%, -45%)",
  position: "absolute",
};

function Hero({ section, display, url }) {
  return (
    <Box
      position={positionBtn}
      sx={{
        display: display ? "flex" : "none",
        height: "40%",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "50%",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ display: { xs: "none", md: "block" } }}
        borderBottom="#DF7861"
        color="white"
        variant="h3"
      >
        {section}
      </Typography>
      <Link
        href="tel:+32488863960"
        variant="h5"
        sx={{
          color: "white",
          display: { xs: "block", md: "none" },
          underline: "hover",
        }}
      >
        +32488863960
      </Link>
      <Button
        onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
        size="medium"
        variant="contained"
      >
        Book online
      </Button>
    </Box>
  );
}

export default function Banner({ booking }) {
  const [isYogaShown, setIsYogaShown] = useState(false);
  const [isMassageShown, setIsMassageShown] = useState(false);
  const [isCoachingShown, setIsCoachingShown] = useState(false);

  return (
    <Grid
      container
      maxWidth="xlg"
      position="relative"
      spacing={{ xs: 0, md: 3 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        height: { xs: "80vh", md: "70vh" }, // Flexible height on mobile, fixed on larger screens
        mb: { xs: 4, md: 2 }, // Additional margin-bottom only on mobile
        pb: { xs: 4, md: 0 }, // Padding to ensure no overlap on mobile
      }}
    >
      {/* Yoga Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          position: "relative",
        }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%" }}
          onMouseEnter={() => setIsYogaShown(true)}
          onMouseLeave={() => setIsYogaShown(false)}
        >
          <CardMedia
            component="img"
            image="../assets/ayurvedic-yoga.webp"
            alt="Therapeutic yoga"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {booking.yoga && (
            <Hero url={booking.yoga} section="Yoga" display={isYogaShown} />
          )}
        </CardActionArea>
      </Grid>

      {/* Massage Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          height: "100%",
          position: "relative",
        }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%" }}
          onMouseEnter={() => setIsMassageShown(true)}
          onMouseLeave={() => setIsMassageShown(false)}
        >
          <CardMedia
            component="img"
            srcSet="/assets/massage-therapist-400w.webp 400w, /assets/massage-therapist-800w.webp 800w, /assets/massage-therapist-1000w.webp 1000w"
            sizes="(max-width: 600px) 400px, (max-width: 960px) 800px, 1000px"
            src="/assets/massage-therapist-1000w.webp"
            alt="Ayurvedic massage therapist"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {booking.massage && (
            <Hero
              url={booking.massage}
              section="Massage"
              display={isMassageShown}
            />
          )}
        </CardActionArea>
      </Grid>

      {/* Health Coaching Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          position: "relative",
        }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%" }}
          onMouseEnter={() => setIsCoachingShown(true)}
          onMouseLeave={() => setIsCoachingShown(false)}
        >
          <CardMedia
            component="img"
            image="../assets/back-massage-large.webp"
            alt="Vibrant wellbeing coaching"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {booking.coaching && (
            <Hero
              url={booking.coaching}
              section="Health Coaching"
              display={isCoachingShown}
            />
          )}
        </CardActionArea>
      </Grid>

      {/* BeVibrant Component */}
      <BeVibrant />
    </Grid>
  );
}
