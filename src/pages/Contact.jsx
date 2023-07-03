import { Grid, Typography } from '@mui/material'
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
        <Grid
          container
          sx={{
            backgroundColor: "#FCF8E8",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
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
              py: { xs:"10%", md: 0 },
              height:"100%"
            }}
          >
            <Typography  variant="h2">Contact me on any questions</Typography>
            <Typography color="#678180" width={{ xxs: "80%",xs:"100%"}} variant="h5">
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

        <Footer setContactInfo={setContactInfo} />
      </>
    );
}

export default Contact
