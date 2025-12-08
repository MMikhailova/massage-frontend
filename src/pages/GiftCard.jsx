import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import DrawerAppBar from "../components/Navigation";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const GiftCard = () => {
  const [contactInfo, setContactInfo] = useState([]);

  const checkoutUrl =
    "https://link.fastpaydirect.com/gift-card/6935a9046006f87fc30fd5bb";

  return (
    <>
      <Helmet>
        <title>
          Massage Gift Cards – Electronic PDF & Printed Cards | beVibrant
          Brussels
        </title>
        <meta
          name="description"
          content="Purchase a massage gift card from beVibrant. Buy an electronic PDF gift card online or pick up a printed card at our salon in Saint-Gilles, Brussels."
        />
        <link rel="canonical" href="https://bevibrant.be/gift-card" />
      </Helmet>

      <DrawerAppBar />

      <Grid
        container
        sx={{
          backgroundColor: "#FCF8E8",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "85vh",
          justifyContent: "center",
          pb: { xs: 6, md: 8 },
        }}
      >
        {/* PAGE INTRO */}
        <Grid
          container
          item
          sx={{
            px: { xs: 3, md: 8 },
            pt: { xs: 8, md: 10 },
            pb: { xs: 4, md: 6 },
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 600, mb: 2, color: "#678180" }}
            >
              Gift Deep Relaxation
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 400, mb: 2 }}
            >
              Massage Gift Cards by beVibrant
            </Typography>
            <Typography variant="body1">
              You can purchase a gift card online and receive an **electronic
              PDF** to send or print — or choose a **pre-printed gift card**
              available at our salon.
            </Typography>
          </Grid>
        </Grid>

        {/* SECTION 1 – ELECTRONIC GIFT CARD */}
        <Grid
          container
          item
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 3, md: 8 },
            rowGap: 4,
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              Electronic Gift Card (PDF)
            </Typography>

            <Typography variant="body1">
              Purchase the gift card online and receive a **PDF version
              instantly**. You can email it to the recipient or print it at
              home.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Available options:
            </Typography>
            <Typography variant="body1">
              • 60-minute Deep Tissue Massage – €95 <br />• 90-minute Deep
              Tissue Massage – €135
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#93B49E",
                  color: "#fff",
                  borderRadius: "999px",
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#7BA18A" },
                }}
              >
                Buy Electronic Gift Card
              </Button>
            </Box>

            {/* Terms */}
            <Box
              sx={{
                mt: 3,
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                p: 2.5,
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
                Terms &amp; Conditions
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Valid for 6 months from date of purchase.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Valid for a 60- or 90-minute{" "}
                <strong>Deep Tissue Massage</strong>.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • PDF gift card delivered instantly after purchase.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                •{" "}
                <a
                  href="https://www.treatwell.be/salon/bevibrant-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  BOOK ONLINE
                </a>{" "}
                or by +32 488 86 39 60.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Cancellations allowed up to 24h before the appointment.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Late cancellations render the card redeemed.
              </Typography>
              <Typography variant="body2">
                • Non-refundable, cannot be exchanged for cash.
              </Typography>
            </Box>
          </Grid>

          {/* Electronic Gift Card Image */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="../assets/gift-card-bevibrant.webp"
              alt="Electronic massage gift card (PDF)"
              sx={{
                width: "100%",
                maxWidth: 520,
                height: "auto",
                borderRadius: "24px",
                objectFit: "contain",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>
        </Grid>

        {/* SECTION 2 – PHYSICAL PRINTED CARD */}
        <Grid
          container
          item
          sx={{
            mt: { xs: 6, md: 8 },
            px: { xs: 3, md: 8 },
            pb: { xs: 4, md: 6 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            rowGap: 4,
          }}
        >
          {/* Physical Card Image */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src="../assets/gift-voucher-bevibrant.webp" // update your file path
              alt="Printed massage gift card"
              sx={{
                width: "100%",
                maxWidth: 520,
                height: "auto",
                borderRadius: "24px",
                objectFit: "cover",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>

          {/* Text */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              Printed Gift Card (Available in Salon)
            </Typography>

            <Typography variant="body1">
              If you prefer a physical gift, you can pick up a **pre-printed
              gift card** at the beVibrant salon. Beautifully presented and
              perfect for gifting in person.
            </Typography>

            <Typography variant="body1">
              Available during our opening hours:
            </Typography>

            <Box
              sx={{
                mt: 1,
                backgroundColor: "#93B49E",
                borderRadius: "18px",
                p: 2,
                color: "#fff",
                display: "inline-block",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                beVibrant Salon
              </Typography>
              <Typography variant="body2">
                Pl. Julien Dillens 1, 4ᵉ étage <br />
                1060 Saint-Gilles, Brussels
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Tuesday – Friday: 10:00 – 19:00 <br />
                Saturday: 10:00 – 18:00
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
              Printed cards are available only in the salon and cannot be
              purchased online.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Footer contactInfo={contactInfo} setContactInfo={setContactInfo} />
    </>
  );
};

export default GiftCard;
