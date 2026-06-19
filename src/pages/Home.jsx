import Section from "../components/Section";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Banner from "../components/Banner";
import DrawerAppBar from "../components/Navigation";
import TreatmentItem from "../components/Servises";
import TestimonialCarousel from "../components/Testimonials";
import MyComponent from "../components/Natalie";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

/** 🔔 Gift Card Promo Popup */
const GiftCardPopup = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          backgroundColor: "#FCF8E8",
          boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 600,
          pr: 5,
          pb: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        Gift Deep Relaxation 🎁
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            marginLeft: "auto",
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          pt: 1,
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          Offer your loved ones a massage by a European Champion.
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          • Buy an electronic <strong>PDF gift card</strong> online to send or
          print.
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          • Get a <strong>pre-printed gift card</strong> directly at the
          beVibrant salon.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 3,
          pt: 1,
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          href="/gift-card"
          sx={{
            backgroundColor: "#93B49E",
            color: "#fff",
            borderRadius: "999px",
            px: 3,
            py: 1,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#7BA18A",
            },
          }}
        >
          View Gift Cards
        </Button>

        <Button
          onClick={onClose}
          sx={{
            textTransform: "none",
          }}
        >
          Maybe later
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Home = ({ booking }) => {
  const [isGiftPopupOpen, setIsGiftPopupOpen] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Massage & Somatic Therapy in Brussels | beVibrant Wellness Studio
        </title>
        <meta
          name="description"
          content="Massage & health coaching in Brussels (1060 Saint-Gilles). beVibrant by Natalya Werthaim offers somatic therapy and Ayurvedic massage for stress relief and nervous system reset."
        />
        <link rel="canonical" href="https://bevibrant.be/" />
      </Helmet>

      {/* 🔔 Gift Card Popup */}
      <GiftCardPopup
        open={isGiftPopupOpen}
        onClose={() => setIsGiftPopupOpen(false)}
      />

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          backgroundColor: "#FCF8E8",
          textAlign: "center",
          height: "fit-content",
          px: { xs: 0, md: 5 },
          py: { xs: 0, md: 6 },
          pb: 15,
        }}
      >
        <DrawerAppBar />
        <Banner booking={booking} />

        <Box
          component="section"
          aria-label="Ayurvedic therapeutic massage and somatic bodywork in Saint-Gilles, Brussels"
          sx={{
            width: { xs: "90vw", sm: "85vw", md: "70vw", lg: "65vw" },
            maxWidth: "980px",
            mx: "auto",
            py: { xs: 4, sm: 5, md: 4 },
            mt: { xs: 3, sm: 5, md: 15 },
            textAlign: { xs: "left", md: "center" },
          }}
        >
          <Typography
            id="home-intro-title"
            variant="h2"
            component="h1"
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: {
                md: "2rem",
                lg: "2rem",
              },
              lineHeight: 1.18,
              fontWeight: 700,
              color: "#3D3D3D",
              mb: { md: 3 },
            }}
          >
            Ayurvedic Therapeutic Massage & Somatic Bodywork <br /> in
            Saint-Gilles, Brussels
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
              lineHeight: { xs: 1.75, md: 1.85 },
              color: "#4F4F4F",
              maxWidth: "880px",
              mx: "auto",
              mb: 2,
            }}
          >
            At beVibrant in Brussels, I offer award-winning therapeutic massage,
            Ayurvedic treatments, somatic coaching, and somatic bodywork to help
            you relax, release chronic tension, reduce stress, regulate your
            nervous system, and reconnect with your body.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: "0.98rem", sm: "1rem", md: "1.08rem" },
              lineHeight: { xs: 1.75, md: 1.85 },
              color: "#5F5F5F",
              maxWidth: "880px",
              mx: "auto",
              mb: 2,
            }}
          >
            My approach combines advanced massage techniques, Ayurvedic
            principles, trauma-informed care, body awareness, yoga, breathwork,
            and somatic practices to support clients dealing with stress,
            burnout, overwhelm, and emotional fatigue.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: "0.98rem", sm: "1rem", md: "1.08rem" },
              lineHeight: { xs: 1.75, md: 1.85 },
              color: "#5F5F5F",
              maxWidth: "880px",
              mx: "auto",
              mb: { xs: 3, md: 4 },
            }}
          >
            I welcome clients in{" "}
            <Box component="strong" sx={{ color: "#3D3D3D", fontWeight: 700 }}>
              English, French, Greek, Russian, and Hebrew
            </Box>
            , creating a warm and caring environment where you can feel safe,
            supported, and at ease.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
              },
              gap: { xs: 1.5, sm: 2 },
              maxWidth: "900px",
              mx: "auto",
              mb: { xs: 3, md: 4 },
            }}
          >
            {[
              "Relax deeply",
              "Release chronic tension",
              "Reconnect with your body",
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "18px",
                  px: { xs: 2, md: 2.5 },
                  py: { xs: 1.8, md: 2.2 },
                  boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(148, 180, 159, 0.25)",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    color: "#94B49F",
                    fontWeight: 700,
                    fontSize: { xs: "0.98rem", md: "1.05rem" },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Section title={"Well-being services"} mt={2} />
        <TreatmentItem booking={booking} />

        <Section title={"Clients testimonials"} m={2} />
        <TestimonialCarousel />

        <Section title={"About Natalya Werthaim"} m={2} />
        <MyComponent />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
