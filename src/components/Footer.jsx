import { Box, Stack, Typography,Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
        <Typography variant="body1">
          <a
            href={`+${contact.phone ? contact.phone : "+ 32488863960"}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {contact.phone ? `+ ${contact.phone}` : "+ 32488863960"}
          </a>
        </Typography>
        <Typography variant="body1">
          Rue du Trône 173, 1050 Bruxelles
        </Typography>
      </Stack>
      <Stack spacing={2} direction="row" justifyContent="center">
        <a
          target="_blank"
          rel="noreferrer"
          href={contact.facebookUrl ? contact.facebookUrl : ""}
        >
          <FacebookIcon sx={{ color: "white" }} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={contact.instagramUrl ? contact.instagramUrl : ""}
        >
          <InstagramIcon color="action" sx={{ color: "white" }} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={contact.whatsupUrl ? contact.whatsupUrl : ""}
        >
          <WhatsAppIcon color="action" sx={{ color: "white" }} />
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
          href="https://www.linkedin.com/in/1404mikhailova/"
        >
          MMikhailova
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
