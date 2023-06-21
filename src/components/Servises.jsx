import React from "react";
import {
  List,ListItem,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  Button
} from "@mui/material";


const treatments = [
  {
    id: 1,
    image: "./assets/handback.jpg",
    title: "AYURVEDIC MASSAGE",
    description: [
      "Ayurvedic deep tissue massage",
      "Ayurvedic Yoga massage (AYM)",
      "Relaxation massage with healing sounds",
      "Indian head massage",
      "Chair “Lunch boost” back & shoulders massage",
      "Ayurvedic massage for pregnant women",
    ],
    url: "https://www.eleniavgenaki.com/category/6559915664539648",
  },
  {
    id: 2,
    image: "./assets/tarapeutic_yoga.jpg",
    title: "THERAPEUTIC YOGA",
    description: [
      "Experience the transformative power of yoga with individualized, one-on-one sessions guided by your own qualified yoga therapist. Each session is designed around your specific needs and physical abilities, as well as your medical history and current health status.",
    ],
    url: "https://www.eleniavgenaki.com/category/6559915664539648",
  },
  {
    id: 3,
    image: "./assets/embrace.jpg",
    title: "VIBRANT HEALTH COACHING",
    description: [
      "Imagine having a dedicated partner on your wellness journey, someone who truly listens, understands, and supports you every step of the way. That's exactly what my personalized health coaching is all about. I'll work closely with you to uncover your unique needs and aspirations, and together, we'll create a roadmap towards a healthier, happier you.",
    ],
    url: "https://www.eleniavgenaki.com/category/6559915664539648",
  },
];

const TreatmentItem = ({ treatment }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imageContainerStyle = {
    display: "flex",
    justifyContent: isSmallScreen ? "center" : "flex-end",
    marginBottom: isSmallScreen ? theme.spacing(1) : 0,
   
  };

  const imageStyle = {
    width: isSmallScreen ? "100%" :treatment.id===3? "80%":"100%",
    height: isSmallScreen ? "auto" : treatment.id === 3 ? "70vh":"60vh",
  opacity:"95%",
  //   maxWidth:700,
    borderRadius: isSmallScreen ? theme.spacing(1) : 0,
  };

  return (
    <Grid container sx={{ marginBottom: theme.spacing(4) }}>
      <Grid item xs={12} md={6} sx={imageContainerStyle}>
        <img src={treatment.image} alt={treatment.title} style={imageStyle} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: { md: 6, xs: 3 },
          backgroundColor: "#FEE4D1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: "auto",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{treatment.title}</Typography>
        <List
          sx={{
            textAlign: "center",
          }}
        >
          {treatment.description.map((item) => (
            <ListItem
              sx={{
                justifyContent: "center",
                textAlign:"center",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* <Typography>{treatment.description.join("\n")}</Typography> */}
        <Stack sx={{ m: 3 }} direction="row" spacing={2}>
          <Button
            variant="outlined"
            href={treatment.url}
            size="medium"
          >
            Learn more
          </Button>
          <Button variant="contained" size="medium" href={treatment.url}>
            Book
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

const Treatments = () => (
  <Container maxWidth="lg"  >
    {treatments.map((treatment) => (
      <TreatmentItem key={treatment.id} treatment={treatment} />
    ))}
  </Container>
);

export default Treatments;
