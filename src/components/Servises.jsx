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





const TreatmentItem = ({booking}) => {
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
      spacing={5}
      p={{ xs: 2, md: 5 }}
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
            image={"./assets/handback.webp"}
            alt="back massage"
          ></CardMedia>

          <CardContent>
            <Typography variant="h4" component="h3">
              AYURVEDIC MASSAGE
            </Typography>
            <List
              sx={{
                textAlign: "center",
              }}
            >
              {treatments.map((item) => (
                <ListItem
                  key={item}
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
              <Button variant="outlined" href={`/Massage`} size="medium">
                See All Massage Services
              </Button>
              <Button
                variant="contained"
                size="medium"
                target="_blank"
                href={booking.massage}
              >
                Book a treatment
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
            image={"./assets/terapeutic_yoga.webp"}
            alt="back massage"
          />
          <CardContent>
            <Typography variant="h4" component="h3">
              THERAPEUTIC YOGA
            </Typography>
            <Typography
              variant="subtitle1"
              component="h4"
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
              <Button variant="outlined" href={`/yoga`} size="medium">
                See All Yoga Services
              </Button>
              <Button
                variant="contained"
                size="medium"
                target="_blank"
                href={booking.yoga}
              >
                Book a session
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
        lg={8}
        height={{ xs: "auto", md: "fit-content" }}
      >
        <Card
          sx={{
            backgroundColor: "#FEE4D1",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { sm: "50%" },
              height: {
                sm: "auto",
              },
              objectFit: "cover",
            }}
            image={"./assets/embrace.jpg"}
            alt="back massage"
          />
          <CardContent sx={{ m: "auto", width: { sm: "50%" } }}>
            <Typography variant="h4" component="h3">
              VIBRANT HEALTH COACHING
            </Typography>
            <Typography
              variant="subtitle1"
              component="h4"
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
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined" href={`/Coaching`} size="medium">
                More about Bevibrant coaching
              </Button>
              <Button
                variant="contained"
                size="medium"
                target="_blank"
                href={booking.coaching}
              >
                Book a session
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
  export default TreatmentItem; 