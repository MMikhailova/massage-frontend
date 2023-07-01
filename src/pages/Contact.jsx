import { Container,Grid, Typography } from '@mui/material'
import React from 'react'
import DrawerAppBar from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from "react";


const Contact = () => {
const [contactInfo, setContactInfo] = useState([]);

console.log(contactInfo)
    return (
      <>
        <DrawerAppBar />
        <Container
          maxWidth="xlg"
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "#FCF8E8",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              height: "fit-content",
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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h2">Contact me on any questions</Typography>
              <Typography variant="h4">
                {contactInfo.email
                  ? contactInfo.email
                  : "natalywerthaim@gmail.com"}
              </Typography>
              <Typography variant="h6">
                +{contactInfo.phone ? contactInfo.phone : "+ 32488863960"}
              </Typography>
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
                src="../assets/contact_img.jpg"
                alt="natalya"
                style={{
                  height: "auto",
                  width: "100%",

                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Footer setContactInfo={setContactInfo} />
      </>
    );
}

export default Contact
