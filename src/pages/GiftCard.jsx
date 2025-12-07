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
          content="Offer deep relaxation with beVibrant massage gift cards. Buy an electronic PDF gift card online or pick up a physical printed card in the salon in Saint-Gilles, Brussels."
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
        {/* PAGE INTRO / HERO */}
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
              variant="h3"
              component="h1"
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Gift Deep Relaxation
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 400, mb: 2 }}
            >
              Massage by a European Champion
            </Typography>
            <Typography variant="body1">
              Choose between an **online PDF gift card**, sent instantly, or a
              **beautiful printed card** available in the beVibrant salon in
              Saint-Gilles, Brussels.
            </Typography>
          </Grid>
        </Grid>

        {/* SECTION 1 – ELECTRONIC GIFT CARD (PDF) */}
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
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Online Massage Gift Card (PDF)
            </Typography>

            <Typography variant="body1">
              Purchase an electronic gift card online and receive it instantly
              as a **PDF file**. You can forward it by email or print it at home
              – a perfect last-minute gift for someone who deserves deep
              relaxation.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Available options:
            </Typography>
            <Typography variant="body1">
              • 60-minute Deep Tissue Massage – €95
              <br />• 90-minute Deep Tissue Massage – €135
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
                  "&:hover": {
                    backgroundColor: "#7BA18A",
                  },
                }}
              >
                Buy a Gift Card Online
              </Button>
            </Box>

            {/* Terms & Conditions */}
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
                Terms &amp; Conditions (Electronic Card)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Valid for 6 months from the date of purchase.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Can be used for one 60-minute (€95) or 90-minute (€135) Deep
                Tissue Massage.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Recipient receives an electronic PDF gift card.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                •  <a
                  href="https://widget.treatwell.be/salon/bevibrant-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#93B49E", textDecoration: "none" }}
                >
                   Booking Online
                </a>{" "}
                at any available time.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Appointments can be rescheduled or cancelled up to 24 hours in
                advance.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • If cancelled less than 24 hours before the session, the card
                is considered redeemed.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Non-refundable, cannot be exchanged for cash.
              </Typography>
              <Typography variant="body2">
                • One gift card is valid for one treatment only.
              </Typography>
            </Box>
          </Grid>

          {/* Electronic Card Image (screenshot) */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src="../assets/gift-card-bevibrant.webp"
              alt="Electronic massage gift card (PDF) – beVibrant"
              sx={{
                width: "100%",
                maxWidth: 520,
                height: "auto", // preserves 1813x1495 ratio
                borderRadius: "24px",
                objectFit: "contain",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>
        </Grid>

        {/* SECTION 2 – PHYSICAL PRINTED GIFT CARD */}
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
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              // 🔁 Replace with a photo of your printed gift card / voucher
              src="../assets/gift-voucher-bevibrant.webp"
              alt="Physical printed massage gift card – beVibrant salon"
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

          {/* Text for physical card */}
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
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Physical Printed Gift Card
            </Typography>

            <Typography variant="body1">
              For a more tangible, ceremonial experience, you can purchase a
              **printed gift card** directly at the beVibrant salon. Beautifully
              presented, it is ideal for birthdays, anniversaries, and special
              occasions where you want to hand over a gift in person.
            </Typography>

            <Typography variant="body1">
              You can pick it up during our opening hours at:
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
                Pl. Julien Dillens 1, 4ᵉ étage
                <br />
                1060 Saint-Gilles, Brussels
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Monday – Friday: 10:00 – 19:00
                <br />
                Saturday: 10:00 – 18:00
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
              Please note: Physical cards are sold exclusively in the salon and
              cannot be purchased online.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Footer contactInfo={contactInfo} setContactInfo={setContactInfo} />
    </>
  );
};

export default GiftCard;
