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
  Typography
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
        {" "}
        <Button
          variant="contained"
          href="/gift-card" // or use the direct GoHighLevel link if you prefer
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
        <link rel="canonical" href="https://bevibrant.be/"></link>
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
          align="justify"
          sx={{
            width: { xs: "90vw", md: "65vw" },
            margin: "auto",
            py: { md: 4 },
            mt: { xs: 0, md: 15 },
          }}
        >
          <Typography variant="subtitle1" component="h3">
            At beVibrant in Brussels, I offer{" "}
            <strong>
              somatic coaching, trauma-informed support, and Ayurvedic massage
            </strong>{" "}
            to help you release stress, regulate your nervous system, and
            reconnect with your body. My work combines{" "}
            <strong>
              body awareness, therapeutic touch, massage, Ayurveda,
              yoga-inspired practices, and health coaching to support people who
              feel overwhelmed, anxious, emotionally stuck, tense, or burned
              out.
            </strong>{" "}
            Each session is adapted to your needs and offers a safe, gentle
            space to slow down, listen to your body, and restore a sense of
            inner balance. I welcome clients in{" "}
            <strong>English, French, Greek, Russian, and Hebrew,</strong>{" "}
            creating a warm and caring environment where you can feel supported,
            safe, and at ease.
          </Typography>
          <Typography
            mt={2}
            variant="subtitle1"
            component="h3"
            sx={{ display: { xs: "none", md: "block" } }}
          ></Typography>
          <Typography
            align="center"
            m={2}
            variant="h5"
            component="h4"
            color="#94B49F"
            fontWeight="bold"
          >
            Whether you are looking for deep relaxation, physical release,
            emotional grounding, or support during a stressful period of life, I
            offer a holistic and personalized approach.
          </Typography>
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
