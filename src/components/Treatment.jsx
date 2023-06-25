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
        <BasicGrid data={treatments} />
        <WovenImageList data={gallery} />
    </>
  );
};

export default Treatment;
