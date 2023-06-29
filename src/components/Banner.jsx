
// import StyledButton from "./Button";
import { useState } from "react";
import BeVibrant from "./BeVibrant";
import {
  Grid,
  Typography,
  Box,
  Button,
CardActionArea,
  CardMedia,
} from "@mui/material";

const positionBtn = {
bottom:0,
  left: "50%",
  transform: "translate(-45%, -45%)",
  position: "absolute",
};

function Hero({section, display}) {
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
        sx={{display:{xs:"none",md:"block"}}}
         borderBottom="#DF7861"
         color="white"
         variant="h3"
       >
         {section}
       </Typography>
       <Button size="medium" variant="contained">
         Book a session
       </Button>
     </Box>
   );
}

export default function Banner() {
  const [isYogaShown, setIsYogaShown] = useState(false)
  const [isMassageShown, setIsMassageShown] = useState(false);
     const [isCoachingShown, setIsCoachingShown] = useState(false);
  //     const mediaStyle = {
  //   width: "100%",
  //   height:"100%",
  //       objectFit: 'cover',
   

  // };
  return (
    <Grid
      container
      justifyContent="center"
      position="relative"
      spacing={{ xs: 0, md: 2 }}
      sx={{
        height: { xs: "75vh", md: "65vh" },
        mb: { xs: 0, md: 3 },
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
          sx={{ width: "100%", height: "100%" }}
          onMouseMoveCapture={() => setIsYogaShown(true)}
          onMouseOutCapture={() => setIsYogaShown(!isYogaShown)}
        >
          <CardMedia
            component="img"
            height="100%"
            image="../assets/banner_1.jpg"
            alt="green iguana"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: "90%",
            }}
          />
          <Hero section={"Yoga"} display={isYogaShown} />
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
          sx={{ width: "100%", height: "100%" }}
          onMouseMoveCapture={() => setIsMassageShown(true)}
          onMouseOutCapture={() => setIsMassageShown(!isMassageShown)}
        >
          <CardMedia
            component="img"
            height="100%"
            image="../assets/banner_2.jpg"
            alt="green iguana"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Hero section={"Massage"} display={isMassageShown} />
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
          onMouseMoveCapture={() => setIsCoachingShown(true)}
          onMouseOutCapture={() => setIsCoachingShown(!isCoachingShown)}
        >
          <CardMedia
            component="img"
            height="100%"
            image="../assets/banner_3.jpg"
            alt="green iguana"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: "90%",
            }}
          />
          <Hero section={"Health coaching"} display={isCoachingShown} />
        </CardActionArea>
      </Grid>
      <BeVibrant />

      {/* <Grid item xs={12} textAlign="center"  mx="auto" mb={0} >
       
      </Grid> */}
    </Grid>
  );
      
}
  



  