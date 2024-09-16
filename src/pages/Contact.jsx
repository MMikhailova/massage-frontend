import { Grid, Typography,Link,Box } from '@mui/material'
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
            Contact beVibrant - Holistic Wellness and Massage Therapy in
            Brussels
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
              py: { xs: "10%", md: 0 },
              height: "100%",
            }}
          >
            <Typography variant="subtitle1" component="h1">
              <span style={{ color: "#678180", fontWeight: "bold" }}>
                BeVibrant
              </span>{" "}
              is located in the heart of Brussels' European Quarter, its space
              thoughtfully designed to embrace you with a relaxed ambiance,
              infused with good cheer and an abundance of positive energy.{" "}
              <span style={{ color: "#678180", fontWeight: "bold" }}>
                BeVibrant
              </span>{" "}
              shares its quarters with
              <Link
                sx={{
                  ml: 0.2,
                  color: "#000000",
                  textDecorationLine: "underline",
                  textDecorationColor: "#000000",
                }}
                href="https://app.kiute.com/esthetique-hellene/home"
              >
                Eleni Avgenaki
              </Link>
              , an expert of holistic care. Together, they create a haven of
              tranquility for your moments of respite, whether it be after a
              long day's work or on a leisurely weekend.
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
              <Typography variant="body1" component="h3">
                Rue du Trône 173, 1050 Bruxelles
              </Typography>
              <Typography variant="subtitle1" component="h3">
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
            height="100%"
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
                width: "100%",

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
