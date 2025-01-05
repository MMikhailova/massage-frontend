import { Box, Stack, Typography,Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import React from "react";
import { useEffect, useState } from "react";
import { getContact } from "../api/viewModels/getContact";



const Footer = ({ setContactInfo }) => {
  
  const [contact, setContact] = useState([]);

 
  useEffect(() => {
    getContact(
      "https://strapi-production-7702.up.railway.app/api/contacts"
    ).then((vm) => {
      setContact(vm);
      setContactInfo && setContactInfo(vm);
    });
  }, [setContactInfo]);



  return (
    <Box
      sx={{
        mt: "auto",
        py: 5,
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        backgroundColor: "#678180",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack
        divider={
          <Divider
            sx={{ mx: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
        }
        sx={{
          py: { xs: "1.5rem", md: "2rem" },
          textAlign: "center",
          spacing: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Link
          href={`mailto:${
            contact.email ? contact.email : "natalywerthaim@gmail.com"
          }`}
          variant="inherit"
          underline="hover"
          sx={{
            color: "white",
            "&:hover:": { color: "white" },
            textDecorationColor: "white",
          }}
        >
          {contact.email ? contact.email : "natalywerthaim@gmail.com"}
        </Link>
        <Link
          href={`tel:+${contact.phone ? contact.phone : "+ 32488863960"}`}
          variant="body1"
          sx={{
            color: "white",
            underline: "hover",
            "&:hover:": { color: "white" },
            textDecorationColor: "white",
          }}
        >
          {contact.phone ? contact.phone : "+ 32488863960"}
        </Link>
        <Typography variant="body1">
          Pl. Julien Dillens 1, 4ᵉ étage, 1060 Saint-Gilles
        </Typography>
      </Stack>
      <Stack spacing={2} direction="row" justifyContent="center">
        {contact.facebookUrl && (
          <a
            target="_blank"
            rel="noreferrer"
            href={contact.facebookUrl}
            aria-label="Follow us on Facebook"
          >
            <FacebookIcon color="action" sx={{ color: "white" }} />
          </a>
        )}
        {contact.instagramUrl && (
          <a
            target="_blank"
            rel="noreferrer"
            href={contact.instagramUrl}
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon color="action" sx={{ color: "white" }} />
          </a>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          href={contact.whatsupUrl ? contact.whatsupUrl : ""}
          aria-label="Reach out to me in Whatsup"
        >
          <WhatsAppIcon color="action" sx={{ color: "white" }} />
        </a>
        <a
          href="https://youtube.com/@holistictherapist_natalya?si=B1zVu14Uc06k_yCS"
          aria-label="Follow us on Youtube"
        >
          <YouTubeIcon color="action" sx={{ color: "white" }} />
        </a>
      </Stack>

      <Typography variant="body2" sx={{ mt: "1rem" }}>
        @ 2023 BE VIBRANT | Developed by{" "}
        <Link
          sx={{
            color: "#FFFFFF",
            textDecorationLine: "underline",
            textDecorationColor: "#FFFFFF",
          }}
          href="https://www.mmwebsites.be"
          aria-label="Website developed by MMWebsites"
        >
          MMWebsites
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
