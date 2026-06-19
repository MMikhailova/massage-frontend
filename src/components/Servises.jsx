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
    "Deep Tissue Massage",
"Relaxation Massage with sound healing for Nervous system regulation",
"Multi-Dimensional Massage (best for trauma release)",
"Facial Massage & Treatment",
"Yoga Massage (stretching)",
"Indian Head Massage",
"Prenatal Holistic Massage with Sound Healing"
  ];

  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={0}
      sx={{
        width: "100%",
        maxWidth: { xs: "calc(100vw - 24px)", md: "65vw" },
        mx: "auto",
        py: { xs: 2, md: 5 },
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Grid item xs={12} height={{ xs: "auto", md: "fit-content" }}>
        <Card
          sx={{
            backgroundColor: "#FEE4D1",

            display: "flex",

            flexDirection: { xs: "column", sm: "row" },

            width: "100%",
            overflow: "hidden",
          }}
        >
          {" "}
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: "50%" },
              height: {
                xs: "auto",
              },
              objectFit: "cover",
            }}
            image={"./assets/ayurvedic-massage-full-body.jpg"}
            alt="Coach - Nataly Werthaim"
            width="480" // Explicit width
            height="720" // Explicit height
            srcSet={`
    // ./assets/burnout-stress-release-with-somati-coaching-Nataly-Werthaim-320.png 320w,
    // ./assets/burnout-stress-release-with-somati-coaching-Nataly-Werthaim-480.png 480w
  `}
            sizes="(max-width: 600px) 320px, (max-width: 960px) 480px"
          />
          <CardContent sx={{ m: "auto", width: { xs: "100%", sm: "50%" } }}>
            <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
              Ayurveda Therapeutic Massage
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                mb: 3,

                fontWeight: 500,
              }}
            >
              by Europe Massage Champion 🏆
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                textAlign: "justify",

                fontWeight: 400,

                px: { xs: 1, md: 2 },

                mb: 2,
              }}
            >
              At beVibrant in Brussels, Natalya offers deeply restorative
              Premium massage and holistic bodywork treatments designed to calm
              the nervous system, release tension, and restore balance. Each
              session is personalized and combines Ayurvedic wisdom, intuitive
              touch and advanced massage expertise from Europe Massage Champion.
              Whether you need deep tissue release, emotional grounding, or a
              complete reset, each treatment is tailored to help you feel
              renewed, centered, and fully reconnected with your body.
            </Typography>

            <List
              sx={{
                textAlign: "center",

                py: 0,

                mb: 2,
              }}
            >
              {treatments.map((item) => (
                <ListItem
                  key={item}
                  sx={{
                    justifyContent: "center",

                    textAlign: "center",

                    fontWeight: 600,

                    py: 0.5,
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mt: 3 }}
            >
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
      <Grid item xs={12} height={{ xs: "auto", md: "fit-content" }}>
        <Card
          sx={{
            backgroundColor: "#FEE4D1",

            display: "flex",

            flexDirection: { xs: "column", sm: "row" },

            width: "100%",
            overflow: "hidden",
          }}
        >
          {" "}
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: "50%" },
              height: {
                xs: "auto",
              },
              objectFit: "cover",
            }}
            image={
              "./assets/burnout-stress-release-with-somati-coaching-Nataly-Werthaim-480.png"
            }
            alt="Coach - Nataly Werthaim"
            width="480" // Explicit width
            height="720" // Explicit height
            srcSet={`
    // ./assets/burnout-stress-release-with-somati-coaching-Nataly-Werthaim-320.png 320w,
    // ./assets/burnout-stress-release-with-somati-coaching-Nataly-Werthaim-480.png 480w
  `}
            sizes="(max-width: 600px) 320px, (max-width: 960px) 480px"
          />
          <CardContent sx={{ m: "auto", width: { xs: "100%", sm: "50%" } }}>
            <Typography variant="h4" component="h3">
              Somatic Health Coaching
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                justifyContent: "center",

                textAlign: "justify",

                fontWeight: 400,

                p: 2,
              }}
            >
              Feeling{" "}
              <strong>
                overwhelmed, anxious, emotionally stuck, or burned out
              </strong>
              ? At beVibrant in Brussels, I offer somatic health coaching and
              trauma-informed support based on Peter Levine’s Somatic
              Experiencing Method and integrative body-based approaches to help{" "}
              <strong>regulate the nervous system</strong>,{" "}
              <strong>ease chronic stress</strong>,{" "}
              <strong>support recovery from burnout</strong>, release long-held
              stress patterns, and support the body’s natural ability to{" "}
              <strong>process difficult experiences</strong>.
            </Typography>

            <Stack
              sx={{ m: 3 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined" href={`/Coaching`} size="medium">
                More about Somatic Coaching
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
    //   </Grid>
  );
};
  export default TreatmentItem; 
