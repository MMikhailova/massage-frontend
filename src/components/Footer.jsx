import { Box, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Divider from "@mui/material/Divider";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 5,
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        backgroundColor: "#678180",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        divider={<Divider sx={{mx:2}} color="white" orientation="vertical" flexItem />}
        sx={{
          py: { xs: "1.5rem", md: "2rem" },

          spacing: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack spacing={2} direction="row" justifyContent="center">
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </Stack>
       
        <Typography variant="body1">02-345-67-32</Typography>
   
        <Typography variant="body1">natalya.werthaim@gmail.com</Typography>
      </Stack>
      <Typography variant="body2" sx={{ mt: "1rem" }}>
        @ 2023 BE VIBRANT, Brussels
      </Typography>
    </Box>
  );
};

export default Footer;
