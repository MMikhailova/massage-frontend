import React from "react";
import {
  List,ListItem,
  Card,
  CardMedia,
CardContent,
  Typography,
  Stack,
  Button,
Grid

} from "@mui/material";





const TreatmentItem = () => {
  const treatments = [
    "Ayurvedic facial massage and treatment",
    "Ayurvedic deep tissue massage",
    "Ayurvedic Yoga massage (AYM)",
    "Relaxation massage with healing sounds",
    "Indian head massage",
    "Chair “Lunch boost” back & shoulders massage",
    "Ayurvedic massage for pregnant women",
  ];

  return (
    <Grid
      container
      height="fit-content"
      spacing={3}
      p={{xs:2,md:5}}
    
      sx={{
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Grid item xs={12} md={6} lg={6} minHeight="fit-content">
        <Card
          sx={{
            width: "100%",
            backgroundColor: "#FEE4D1",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "auto",
              objectFit: "cover",
            }}
            image={"./assets/handback.jpg"}
            alt="back massage"
          ></CardMedia>

          <CardContent minHeight="fit-content">
            <Typography variant="h4">AYURVEDIC MASSAGE</Typography>
            <List
              sx={{
                textAlign: "center",
              }}
            >
              {treatments.map((item) => (
                <ListItem
                  sx={{
                    justifyContent: "center",
                    textAlign: "center",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>

            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="outlined" href={`/`} size="medium">
                Learn more
              </Button>
              <Button
                variant="contained"
                size="medium"
                target="_blank"
                href={`/`}
              >
                Book
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Card
          sx={{
            width: "100%",
            backgroundColor: "#FEE4D1",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "auto",
              objectFit: "cover",
            }}
            image={"./assets/tarapeutic_yoga.jpg"}
            alt="back massage"
          />
          <CardContent minHeight="fit-content">
            <Typography variant="h4">THERAPEUTIC YOGA</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                justifyContent: "center",
                textAlign: "center",
                fontWeight: 400,
                p: 2,
              }}
            >
               Experience the transformative power of yoga with individualized,
              one-on-one sessions guided by your own qualified yoga therapist.
              Each session is designed around your specific needs and physical
              abilities, as well as your medical history and current health
              status.
            </Typography>

            <Stack
              sx={{ m: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined" href={`/`} size="medium">
                Learn more
              </Button>
              <Button
                variant="contained"
                size="medium"
                target="_blank"
                href={`/`}
              >
                Book
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={10} lg={8} height={{ xs: "auto", md: "fit-content" }}>
        <Card
          sx={{
            backgroundColor: "#FEE4D1",
            display: "flex",
            flexDirection: { xs: "column", md:"row"},
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { md: "50%" },
              height: {
                md: "auto"
              },
              objectFit: "cover",
            }}
            image={"./assets/embrace.jpg"}
            alt="back massage"
          />
          <CardContent sx={{ m: "auto" }}>
            <Typography variant="h4"> VIBRANT HEALTH COACHING</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                justifyContent: "center",
                textAlign: "center",
                fontWeight: 400,
                p: 2,
              }}
            >
               Imagine having a dedicated partner on your wellness journey,
              someone who truly listens, understands, and supports you every
              step of the way. That's exactly what my personalized health
              coaching is all about. I'll work closely with you to uncover your
              unique needs and aspirations, and together, we'll create a road
              map towards a healthier, happier you.
            </Typography>

            <Stack
              sx={{ m: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined" href={`/`} size="medium">
                Learn more
              </Button>
              <Button
                variant="contained"
                size="medium"
                target="_blank"
                href={`/`}
              >
                Book
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
  export default TreatmentItem; 