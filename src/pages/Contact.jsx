import { Grid, Typography,Box } from '@mui/material'
import React from 'react'
import DrawerAppBar from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
const [contactInfo, setContactInfo] = useState([]);


    return (
      <>
        <Helmet>
          <title>
            Contact beVibrant - Holistic Wellness and Massage Therapy in 1060
            Saint-Gilles, Brussels
          </title>
          <meta
            name="description"
            content="Get in touch with beVibrant for personalized Ayurvedic massage, yoga therapy, and health coaching services in Brussels. Reach out to Natalya Werthaim for holistic well-being support in English, French, Greek, Russian, and Hebrew."
          />
          <link rel="canonical" href="https://bevibrant.be/contact"></link>
        </Helmet>
        <DrawerAppBar />
        <Grid
          container
          sx={{
            backgroundColor: "#FCF8E8",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            minHeight: "85vh",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              m: "auto",
              p: { xs: "10%", md: 0 },
              height: "100%",
            }}
          >
            <Typography variant="subtitle1" component="h1" textAlign="justify">
              BeVibrant is located at Place Julien Dillens, just a short walk
              from the bustling Parvis de Saint-Gilles, the area is renowned for
              its eclectic mix of boutiques, cozy cafés, and Art Nouveau
              architecture. Our salon is easily accessible by public transport,
              with nearby tram and metro stops. Head up to the 4th floor, where
              a warm, welcoming atmosphere and a stunning view of this dynamic
              district await you.
            </Typography>

            <Box
              sx={{
                my: "2rem",
                p: 2,
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#93B49E",
                justifyContent: "center",
                mx: "auto",
                borderRadius: "25px",
              }}
            >
              <Typography variant="subtitle1" component="h3">
                Address:{" "}
              </Typography>
              <Typography variant="body1" component="h3" sx={{ mb: 1 }}>
                Pl. Julien Dillens 1, 4ᵉ étage <br />
                1060 Saint-Gilles, Brussels
              </Typography>
              <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
                Working Hours:{" "}
              </Typography>
              <Typography variant="subtitle1" component="h3">
                Monday - Friday 10:00 - 19:00
              </Typography>
              <Typography variant="subtitle1" component="h3">
                Saturday 10:00 - 18:00
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            width="100%"
            height="100vh"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="../assets/contact_img.webp"
              alt="natalya"
              style={{
                height: "auto",
                width: "90%",

                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        <Footer contactInfo={contactInfo} setContactInfo={setContactInfo} />
      </>
    );
}

export default Contact
