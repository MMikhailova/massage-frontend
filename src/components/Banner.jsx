import { useState, } from "react";

import BeVibrant from "./BeVibrant";
import {
  Grid,
  Typography,
  Box,
  Button,
CardActionArea,
  CardMedia,
  Link
} from "@mui/material";


 
const positionBtn = {
bottom:0,
  left: "50%",
  transform: "translate(-45%, -45%)",
  position: "absolute",
};

function Hero({ section, display,url }) {


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
           "&:hover::after": {
             backgroundColor: "white",
           },
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


  const [isYogaShown, setIsYogaShown] = useState(false)
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
        height: { xs: "75vh", md: "65vh" },
        mb: { xs: 0, md:2 },
      }}
    >
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          height: { xs: "90%", md: "100%" },
          position: "relative",
        }}
      >
        <CardActionArea
          component="div"
          sx={{ width: "100%", height: "100%" }}
          onMouseMoveCapture={() => setIsYogaShown(true)}
          onMouseOutCapture={() => setIsYogaShown(!isYogaShown)}
        >
          <CardMedia
            component="img"
            height="100%"
            image="../assets/ayurvedic-yoga.webp"
            alt="therapeutic yoga"
          />
          {booking.yoga && (
            <Hero
              url={booking.yoga ? booking.yoga : ""}
              section={"Yoga"}
              display={isYogaShown}
            />
          )}
        </CardActionArea>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: {
            xs: "flex",
            md: "flex",
          },
          height: { xs: "90%", md: "100%" },
          position: "relative",
        }}
      >
        <CardActionArea
          component="div"
          onMouseMoveCapture={() => setIsCoachingShown(true)}
          onMouseOutCapture={() => setIsCoachingShown(!isCoachingShown)}
        >
          <CardMedia
            component="img"
            height="100%"
            image="../assets/massage-therapist.jpg"
            alt="Ayurvedic massage"
          />
          <Hero
            url={booking.coaching ? booking.coaching : ""}
            section={"Health coaching"}
            display={isCoachingShown}
          />
        </CardActionArea>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },

          height: { xs: "90%", md: "100%" },
          position: "relative",
        }}
      >
        <CardActionArea
          component="div"
          sx={{ width: "100%", height: "100%" }}
          onMouseMoveCapture={() => setIsMassageShown(true)}
          onMouseOutCapture={() => setIsMassageShown(!isMassageShown)}
        >
          <CardMedia
            component="img"
            height="100%"
            image="../assets/back-massage.jpg"
            alt="Vibrant wellbeing coaching"
          />
          <Hero
            url={booking.massage ? booking.massage : ""}
            section={"Massage"}
            display={isMassageShown}
          />
        </CardActionArea>
      </Grid>

      <BeVibrant />
    </Grid>
  );
      
}
  



  