import Section from "../components/Section";
import {
  Box,
  Container,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
          <CloseIcon />
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

        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Optional preview image – replace with your real file */}
          {/* <Box
            component="img"
            src="../assets/gift_card_screenshot.webp"
            alt="beVibrant massage gift card"
            sx={{
              width: "100%",
              maxWidth: 320,
              height: "auto",
              borderRadius: "18px",
              objectFit: "contain",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          /> */}
        </Box>
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
          Massage and Yoga in Brussels, 1060 Saint-Gilles | beVibrant
        </title>
        <meta
          name="description"
          content="At beVibrant in Brussels, 1060 Saint-Gilles, Natalya Werthaim offers holistic wellness services in English, French, Greek, Russian, and Hebrew, combining Massage, Yoga, Ayurveda, and Health Coaching to promote physical, mental, and emotional well-being. Personalized plans address stress, pain, and flexibility."
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
            At beVibrant, I welcome clients in{" "}
            <Box component="span" fontWeight="bold">
              English, French, Greek, Russian, and Hebrew
            </Box>
            , offering a holistic approach to{" "}
            <Box component="span" fontWeight="bold">
              health and wellness,
            </Box>{" "}
            which combines the benefits of{" "}
            <Box component="span" fontWeight="bold">
              Massage, Yoga, Ayurveda, and Health coaching
            </Box>{" "}
            to promote physical, mental, and emotional well-being. By addressing
            the whole person, rather than just one aspect of their health,
            beVibrant delivers a sense of energy, liveliness, and vitality.
          </Typography>
          <Typography
            mt={2}
            variant="subtitle1"
            component="h3"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            BeVibrant provides personalized services tailored to your specific
            goals and conditions. Whether you want{" "}
            <Box component="span" fontWeight="bold">
              to reduce stress, relieve pain, improve flexibility or receive
              health advice,
            </Box>{" "}
            beVibrant can create a customized plan to meet your individual
            needs. Natalya Werthaim, an experienced and qualified professional
            who is passionate and dedicated to her practice, ensures that her
            clients receive safe, effective, and high-quality services.
          </Typography>
          <Typography
            align="center"
            m={2}
            variant="h5"
            component="h4"
            color="#94B49F"
            fontWeight="bold"
          >
            The welcoming and positive ambiance of beVibrant will make you feel
            at ease and promotes a sense of well-being, making it an enjoyable
            and rejuvenating experience.
          </Typography>
        </Box>

        <Section title={"Well-being services"} />
        <TreatmentItem booking={booking} />
        <Section title={"Clients testimonials"} />
        <TestimonialCarousel />
        <Section title={"About Natalya Werthaim"} />
        <MyComponent />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
