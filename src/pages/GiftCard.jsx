import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import DrawerAppBar from "../components/Navigation";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const GiftCard = () => {
  const [contactInfo, setContactInfo] = useState([]);

  const checkoutUrl70 = "https://buy.stripe.com/6oUeVdbqz0uUdw16OMb3q05";
  const checkoutUrl90 = "https://buy.stripe.com/8x26oHfGPgtSeA5flib3q07";

  return (
    <>
      <Helmet>
        <title>Massage Gift Vouchers Brussels | beVibrant</title>

        <meta
          name="description"
          content="Give the gift of deep relaxation with a beVibrant massage gift voucher in Brussels. Choose a 70- or 90-minute treatment voucher and have it sent directly to the recipient by email."
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
          pb: { xs: 6, md: 10 },
        }}
      >
        {/* HERO */}
        <Grid
          container
          item
          sx={{
            px: { xs: 3, md: 8 },
            pt: { xs: 8, md: 11 },
            pb: { xs: 5, md: 7 },
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={9} lg={8}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#678180",
                fontSize: {
                  xs: "2.5rem",
                  md: "3.75rem",
                },
                lineHeight: 1.15,
              }}
            >
              Gift of Deep Relaxation
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 400,
                mb: 3,
                lineHeight: 1.4,
              }}
            >
              Signature Massage Treatments by European Champion Nataly Werthaim
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 720,
                mx: "auto",
                fontSize: "1.08rem",
                lineHeight: 1.8,
              }}
            >
              Give someone special time to slow down, release tension and
              recharge with a <strong>beVibrant Gift Voucher</strong>.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 720,
                mx: "auto",
                mt: 1,
                fontSize: "1.08rem",
                lineHeight: 1.8,
              }}
            >
              Choose a <strong>70- or 90-minute voucher</strong>, valid for any
              beVibrant treatment of the corresponding duration.
            </Typography>
          </Grid>
        </Grid>

        {/* MAIN GIFT VOUCHER SECTION */}
        <Grid
          container
          item
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 3, md: 8 },
            columnGap: { md: 5 },
            rowGap: 5,
          }}
        >
          {/* CONTENT */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: "#678180",
                  mb: 1.5,
                }}
              >
                beVibrant Gift Voucher
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
              >
                Choose your gift, enter the recipient&apos;s email address and
                add an optional personal message at checkout.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  mt: 1,
                }}
              >
                After purchase, the{" "}
                <strong>
                  beautifully designed PDF Gift Voucher is automatically sent
                  directly to the recipient by email.
                </strong>
              </Typography>
            </Box>

            {/* BENEFITS */}
            <Box
              sx={{
                backgroundColor: "#f4f4f4",
                borderRadius: "20px",
                p: { xs: 2.5, md: 3 },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  mb: 1.2,
                }}
              >
                A simple gift, ready in minutes
              </Typography>

              <Typography variant="body2" sx={{ mb: 0.8 }}>
                ✓ Choose 70 or 90 minutes
              </Typography>

              <Typography variant="body2" sx={{ mb: 0.8 }}>
                ✓ Valid for any beVibrant treatment of that duration
              </Typography>

              <Typography variant="body2" sx={{ mb: 0.8 }}>
                ✓ Add your own personal message
              </Typography>

              <Typography variant="body2">
                ✓ Sent automatically to the recipient after payment
              </Typography>
            </Box>

            {/* VOUCHER OPTIONS */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mt: 1,
              }}
            >
              Choose your Gift Voucher
            </Typography>

            {/* 70 MIN */}
            {/* 70 MIN */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                p: { xs: 2.5, md: 3 },
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                70-minute Gift Voucher – €115
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 0.7,
                  mb: 2,
                  color: "#555",
                }}
              >
                Valid for any 70-minute beVibrant treatment.
              </Typography>

              <Button
                variant="contained"
                size="large"
                href={checkoutUrl70}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#93B49E",
                  color: "#fff",
                  borderRadius: "999px",
                  px: 4,
                  py: 1.3,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#7BA18A",
                  },
                }}
              >
                Buy 70-min Gift Voucher – €115
              </Button>
            </Box>

            {/* 90 MIN */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                p: { xs: 2.5, md: 3 },
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                90-minute Gift Voucher – €150
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 0.7,
                  mb: 2,
                  color: "#555",
                }}
              >
                Valid for any 90-minute beVibrant treatment.
              </Typography>

              <Button
                variant="contained"
                size="large"
                href={checkoutUrl90}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#93B49E",
                  color: "#fff",
                  borderRadius: "999px",
                  px: 4,
                  py: 1.3,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#7BA18A",
                  },
                }}
              >
                Buy 90-min Gift Voucher – €150
              </Button>
            </Box>
            {/* TERMS */}
            <Box
              sx={{
                mt: 2,
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                p: 2.5,
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  mb: 1.5,
                }}
              >
                Terms &amp; Conditions
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                • Valid for 6 months from the date of purchase.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                • Valid for any beVibrant treatment of the duration indicated on
                the voucher.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                • The PDF Gift Voucher is sent automatically to the
                recipient&apos;s email address provided at checkout.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                • The voucher must be presented digitally or in print before the
                treatment.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                • Valid only with proof of purchase/payment.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                •{" "}
                <a
                  href="https://www.treatwell.be/salon/bevibrant-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#678180",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  BOOK ONLINE
                </a>{" "}
                or call +32 488 86 39 60.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                • Cancellations are accepted up to 24 hours before the
                appointment.
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                • Cancellations made less than 24 hours before the appointment
                render the voucher redeemed.
              </Typography>

              <Typography variant="body2">
                • Non-refundable and cannot be exchanged for cash.
              </Typography>
            </Box>
          </Grid>

          {/* MAIN IMAGE */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignSelf: { md: "flex-start" },
              pt: { md: 2 },
            }}
          >
            <Box
              component="img"
              src="../assets/gift-card-massage-saint-gilles.webp"
              alt="beVibrant massage gift voucher in Brussels"
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

        {/* PRINTED VOUCHER SECTION */}
        <Grid
          container
          item
          sx={{
            mt: { xs: 8, md: 11 },
            px: { xs: 3, md: 8 },
            pb: { xs: 4, md: 6 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            columnGap: { md: 5 },
            rowGap: 4,
          }}
        >
          {/* IMAGE */}
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
              src="../assets/gift-voucher-bevibrant.webp"
              alt="Printed beVibrant massage gift voucher"
              sx={{
                width: "100%",
                maxWidth: 520,
                height: "auto",
                borderRadius: "24px",
                objectFit: "cover",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              }}
            />
          </Grid>

          {/* TEXT */}
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
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "#678180",
              }}
            >
              Prefer a Printed Gift Voucher?
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Beautifully presented printed beVibrant Gift Vouchers are also
              available directly from our salon — perfect if you would like to
              give the voucher in person.
            </Typography>

            <Box
              sx={{
                mt: 1,
                backgroundColor: "#93B49E",
                borderRadius: "18px",
                p: 2.5,
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
                Tuesday – Friday: 10:00 – 19:00
                <br />
                Saturday: 10:00 – 18:00
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                fontStyle: "italic",
                color: "#666",
              }}
            >
              Printed vouchers are available for collection at the salon.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Footer contactInfo={contactInfo} setContactInfo={setContactInfo} />
    </>
  );
};

export default GiftCard;
