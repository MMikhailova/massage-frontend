import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import StyledButton from "./Button";
import { getTreatments } from "../api/viewModels/getTreatments";
import BasicGrid from "./HomeTreatments";
import { getGallery } from "../api/viewModels/getGallery";
import WovenImageList from "./Gallery";
import DrawerAppBar from "./Navigation";
import Footer from "./Footer";

const positionBtn = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Treatment = ({ page }) => {
  const [treatments, setTreatments] = useState([]);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    getTreatments(
      `https://strapi-production-7702.up.railway.app/api/treatments?filters[type][$eq]=${page}&populate=*`
    ).then((vm) => {
      setTreatments(vm);
    });
    getGallery(
      `https://strapi-production-7702.up.railway.app/api/galleries?filters[treatment][$eq]=${page}&populate=*`
    ).then((vm) => setGallery(vm));
  }, [page]);
  console.log(treatments, gallery);
  return (
    <>
      <Box
        sx={{
          height: "fitContent",
          backgroundColor: "#FCF8E8",
        }}
      >
        <DrawerAppBar />
        <Box
          sx={{
            m: {
              xs: 0,
              md: 8,
            },
            mt: {
              xs: 0,
              md: 8,
            },
            backgroundColor: "#504B3E",
            height: "75vh",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            position: "relative",
          }}
          variant="quilted"
  
        >
          <img
            style={{
              objectFit: page === "coaching" ? "contain" : "cover",
              width: page === "coaching" ? { md: "40%" } : "100%",
              height: "auto",
              opacity: "100%",
            }}
            src={
              page === "massage"
                ? "../assets/handback.jpg"
                : page === "yoga"
                ? "../assets/yoga_page.jpg"
                : "../assets/health_coaching.jpg"
            }
            alt="1"
            loading={page}
          />
          <StyledButton position={positionBtn} />

          <Typography
            variant="poster"
            sx={{
              position: "absolute",
              bottom: 0,
              margin: 0,
              transform: {
                xs: "translate(0%,-3.5vh)",
                lg: "translate(0, -7vh)",
              },
            }}
          >
            {page.toUpperCase()}
          </Typography>
        </Box>

        <BasicGrid data={treatments} />

        <WovenImageList data={gallery} />
      </Box>
      <Footer />
    </>
  );
};

export default Treatment;
