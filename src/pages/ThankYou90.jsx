import React from 'react'
import { Box, Typography, Button, Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import DrawerAppBar from "../components/Navigation";
const ThankYou90 = () => {
      return (
    <>
      <Helmet>
        <title>
          Massage Gift Cards – Electronic PDF & Printed Cards | beVibrant
          Brussels
        </title>
        <meta
          name="description"
          content="Purchase a massage gift card from beVibrant Brussels. Buy an electronic PDF gift card online or pick up a printed card at our salon in Saint-Gilles, Brussels."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://bevibrant.be/gift-card-thank-you-90" />
      </Helmet>

      <DrawerAppBar />

      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: "center",
            mt: 10,
            mb: 6,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Thank You for Your Purchase!
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Your gift card purchase was successful. You can download your
            printable gift card below and share it with the recipient.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="../assets/Gift-card-90min.pdf"
            download
            sx={{
              backgroundColor: "#93B49E",
              color: "#fff",
              borderRadius: "999px",
              px: 4,
              py: 1.3,
              fontWeight: 600,
              mb: 4,
              "&:hover": { backgroundColor: "#7BA18A" },
            }}
          >
            Download Gift Card
          </Button>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            To book your massage, visit{" "}
            <a href="https://www.bevibrant.be">www.bevibrant.be</a> or call +32
            488 86 39 60.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default ThankYou90
