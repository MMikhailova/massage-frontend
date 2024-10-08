

import { Box, Typography } from "@mui/material";
import DrawerAppBar from "../components/Navigation";
import StyledButton from "../components/Button";
import Footer from "../components/Footer";
import Treatment from "../components/Treatment";
import { Helmet } from "react-helmet-async";
// import { useState } from "react";



const positionBtn = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Massage = ({ page, url }) => {
  //  const [openPopup, setOpenPopup] = useState(false);
  // const [hasPopupBeenShown, setHasPopupBeenShown] = useState(false);

  //  const handlePopupOpen = () => {
  //    setOpenPopup(true);
  //    setHasPopupBeenShown(true);
  //  };

  //  const handlePopupClose = () => {
  //    setOpenPopup(false);
  //  };

  //  useEffect(() => {
  //    window.scrollTo({ top: 0, behavior: "instant" });
  //    const popupTimeout = setTimeout(() => {
  //      if (!hasPopupBeenShown) {
  //        handlePopupOpen();
  //      }
  //    }, 3000);
  //    return () => clearTimeout(popupTimeout); // Cleanup on unmount
  //  }, [hasPopupBeenShown]);

  return (
    <>
      <Helmet>
        <title>Ayurvedic massage in Ixelles, Brussels | beVibrant</title>
        <meta
          name="description"
          content="Ayurvedic massages in Brussels. Offering relaxation massage with healing sounds, Indian head massage, and Chair 'Lunch boost' back & shoulders massage at beVibrant."
        />
        <link rel="canonical" href="https://bevibrant.be/massage"></link>
      </Helmet>
      <Box
        sx={{
          height: "fitContent",
          backgroundColor: "#FCF8E8",
        }}
      >
        <DrawerAppBar />
        <Box
          sx={{
            m: {
              xs: 0,
              md: 8,
            },
            mt: {
              xs: 0,
              md: 8,
            },
            height: "60vh",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            position: "relative",
          }}
          variant="quilted"
        >
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              opacity: "100%",
            }}
            src="../assets/handback.webp"
            alt="1"
            loading="Massage"
          />
          <StyledButton position={positionBtn} url={url} />

          <Typography
            variant="poster"
            component="h1"
            sx={{
              position: "absolute",
              bottom: "0.3em",
              margin: 0,
            }}
          >
            MASSAGE
          </Typography>
          {/* <Dialog open={openPopup} onClose={handlePopupClose}>
            <DialogTitle>Special Offer!</DialogTitle>
            <DialogContent>
              <img
                src="../assets/handback.webp"
                alt="Advertisement"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <DialogContentText>
                Discover our exclusive massage offers. Book now for a relaxing
                and rejuvenating experience.
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handlePopupClose} color="primary">
                Close
              </Button>
              <Button href=
              "www.google.com" color="primary">
                Book Now
              </Button>
            </DialogActions>
          </Dialog> */}
        </Box>

        <Typography
          mx="auto"
          sx={{ width: { xs: "100%", md: "65%" }, p: { xs: 2, md: 0 } }}
          variant="subtitle1"
          // color="#DF7861"
          // fontStyle="italic"
          textAlign="justify"
        >
          My journey as a massage therapist began in 2005 in India, where I had
          the incredible opportunity to live in an Ashram for one year and
          practice meditation. During my time there, fate led me to meet the
          esteemed Master Kusum Modak, the visionary creator of the Ayurvedic
          Yoga massage technique. It was through experiencing this
          transformative massage first-hand that I was profoundly moved and
          inspired.
          <br /> Since that momentous encounter, I have been unwavering in my
          dedication and passion in studying and developing my knowledge in this
          healing technique. I have immersed myself in continuous learning,
          exploring various modalities and techniques to deepen my expertise and
          provide the most effective and transformative experience to my
          clients.
          <br /> My commitment to sharing this profound healing experience with
          others has become my life's purpose. I consider it a privilege to pass
          on the benefits of this ancient wisdom and therapeutic touch to those
          seeking relaxation, rejuvenation, and healing.
        </Typography>
        <Typography
          mx="auto"
          mt="1.5em"
          sx={{ width: { xs: "100%", md: "65%" }, p: { xs: 2, md: 0 } }}
          variant="h6"
          color="#DF7861"
          fontStyle="italic"
          textAlign="center"
        >
          Together, let us embark on a transformative journey of wellness and
          rediscover the innate potential for health, joy, and harmony within
          you.
        </Typography>
        <Treatment page={page} />
      </Box>
      <Footer />
    </>
  );
};

export default Massage;
