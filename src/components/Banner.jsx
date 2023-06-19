import { Grid} from "@mui/material";
import StyledButton from "./Button";
import BeVibrant from "./BeVibrant";

const positionBtn = {
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};

export default function Banner() {
const images = [
  "../assets/yoga_up.jpg",
  "../assets/hands.jpg",
  "../assets/massage.jpg",
];
      const mediaStyle = {
    width: "100%",
    height:"100%",
    objectFit: 'cover',

  };
  return (
    <Grid
      container
      justifyContent="center"
      position="relative"
      spacing={{ xs: 0, md: 2 }}
      sx={{
    
        height: {xs:"80vh", md: "90vh" },
        pt: {
          md: 8,
        },
      }}
    >
      {images.map((img) => (
        <Grid
          key={img}
          item
          md={4}
          xs={12}
          sx={{
            display: {
              xs: `${images.indexOf(img) !== 1 && "none"}`,
              md: "flex",
            },
            height: { xs: "90%", md: "90%" },
            position: `${(images.indexOf(img) === 1) & "relative"}`,
          }}
        >
          <StyledButton
            position={positionBtn}
            url={"https://www.eleniavgenaki.com/category/6607051387109376"}
          />
          <img src={img} alt={img} style={mediaStyle} />
          <BeVibrant/>
        </Grid>
      ))}
    </Grid>
  );
}
  



  
    // <Grid
    //   container
    //   spacing={2}
    //   sx={{
    //     p: "1em",
    //     width: "99vw",
    //     height: "80vh",
    //     margin: "auto",
    //   }}
    // >
    //   <Grid
    //     item xs={0}md={4}

    //     sx={{
    //       opacity: "95%",
    //       display: { xs: "none", sm: "block" },
    //     }}
    //   >
    //     <img
    //       style={{ objectFit: "cover", width: "100%", height: "100%" }}
    //       src="../assets/yoga_up.jpg"
    //       alt="1"
    //       loading="lazy"
    //     />
    //   </Grid>
      
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
    // </Grid>