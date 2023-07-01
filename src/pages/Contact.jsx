import { Container,Grid, Typography } from '@mui/material'
import React from 'react'
import DrawerAppBar from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
    return (
      <>
        <DrawerAppBar />
        <Container
          maxWidth="xlg"
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
       
            backgroundColor: "#FCF8E8",
          }}
        >
          <Grid
            container
                    sx={{
            
              display: "flex",
              width: "100%",
                      minHeight: "100vh",
                      height:"100%",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
                        sx={{
                    px:5,     
                            display: "flex",
                textAlign:"center",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h2">
              Contact me on any questions
              </Typography>
              <Typography variant="h4">beVibrant@gmail.com</Typography>
              <Typography variant="h6">+32 893 67 23</Typography>
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
        <Footer />
      </>
    );
}

export default Contact
