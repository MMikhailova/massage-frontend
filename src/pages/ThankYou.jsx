import { Box, Typography, Button, Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import DrawerAppBar from "../components/Navigation";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | beVibrant Gift Voucher</title>

        <meta
          name="description"
          content="Thank you for purchasing a beVibrant Gift Voucher."
        />

        <meta name="robots" content="noindex, nofollow" />

        <link rel="canonical" href="https://bevibrant.be/gift-card-thank-you" />
      </Helmet>

      <DrawerAppBar />

      <Box
        sx={{
          backgroundColor: "#FCF8E8",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              px: { xs: 3, md: 5 },
              py: { xs: 5, md: 6 },
              boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.3rem",
                mb: 1.5,
              }}
            >
              ✨
            </Typography>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 600,
                color: "#678180",
                mb: 2,
              }}
            >
              Thank You for Your Purchase!
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mb: 3,
              }}
            >
              Your beVibrant Gift Voucher is on its way.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              The Gift Voucher has been sent directly to the{" "}
              <strong>recipient&apos;s email address</strong> provided at
              checkout, together with your personal message.
            </Typography>

            <Box
              sx={{
                backgroundColor: "#F2F7F3",
                borderRadius: "16px",
                p: 2.5,
                mb: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                }}
              >
                Please allow a few minutes for delivery. If the email does not
                appear in the inbox, we recommend checking the{" "}
                <strong>Spam or Junk folder</strong>.
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "#678180",
                mb: 1.5,
              }}
            >
              We hope they enjoy their gift of deep relaxation.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              We look forward to welcoming them to beVibrant for a moment of
              relaxation, care and well-being.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="https://www.bevibrant.be"
              sx={{
                backgroundColor: "#93B49E",
                color: "#fff",
                borderRadius: "999px",
                px: 4,
                py: 1.3,
                fontWeight: 600,
                textTransform: "none",
                mb: 3,
                "&:hover": {
                  backgroundColor: "#7BA18A",
                },
              }}
            >
              Back to beVibrant
            </Button>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              To book a treatment, visit{" "}
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
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ThankYou;
