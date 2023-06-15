import * as React from "react";

// import ImageListItem from "@mui/material/ImageListItem";
// import { Box} from "@mui/material";
// import StyledButton from "./Button";
import { Grid, Card, CardMedia } from '@mui/material';
// const positionBtn = {
//   top: "65%",
//   left:"50%",
//   transform: "translate(-50%, -50%)",
//   position:"absolute"
// };

const photos = [
  {
    id: 1,
    imageUrl: "../assets/yoga_up.png",
    title: "Photo 1",
  },
  {
    id: 2,
    imageUrl: "../assets/hands.jpg",
    title: "Photo 2",
  },
  {
    id: 3,
    imageUrl: "../assets/hands.jpg",
    title: "Photo 3",
  },
];

export default function Banner() {


  return (
    <Grid container height="100vh" spacing={2}>
      {photos.map((photo) => (
        <Grid height="100vh" item xs={12} sm={6} md={4} key={photo.id}>
          <Card sx={{height: "100vh", objectFit:"cover"}}>
            <CardMedia
              component="img"
              
              image={photo.imageUrl}
              alt={photo.title}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

    // <Box
    //   sx={{
    //     py: "1.5em",
    //     width: "99vw",
    //     height: "75vh",
    //     justifyContent: "center",
    //     display: "flex",
    //     margin: "auto",
    //   }}
    //   variant="quilted"
    //   // gap={2}
    // >
    //   <ImageListItem
    //     sx={{
    //       p: "1.5em",
    //       width: "30%",
    //       opacity: "90%",
    //       display: { xs: "none", sm: "block" },
    //     }}
    //   >
    //     <img
    //       style={{ objectFit: "cover" }}
    //       src="../assets/yoga_up.png"
    //       alt="1"
    //       loading="lazy"
    //     />
    //   </ImageListItem>
    //   <ImageListItem
    //     sx={{
    //       flexGrow: 1,
    //       position: "relative",
    //     }}
    //   >
    //     <StyledButton
    //       position={positionBtn}
    //       url={"https://www.eleniavgenaki.com/category/6607051387109376"}
    //     />
    //     <img
    //       src="../assets/hands.jpg"
    //       alt="2"
    //       loading="lazy"
    //       style={{ objectFit: "cover" }}
    //     />
    //   </ImageListItem>
    //   <ImageListItem
    //     sx={{
    //       p: "1.5em",
    //       width: "30%",
    //       opacity: "85%",
    //       display: { xs: "none", sm: "block" },
    //     }}
    //   >
    //     <img
    //       style={{ objectFit: "cover" }}
    //       src="../assets/massage.jpg"
    //       alt="1"
    //       loading="lazy"
    //     />
    //   </ImageListItem>
    // </Box>
