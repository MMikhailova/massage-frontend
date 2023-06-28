import React, { useEffect, useState } from "react";

import { getTreatments } from "../api/viewModels/getTreatments";
import BasicGrid from "./TreatmentCadrs";
import { getGallery } from "../api/viewModels/getGallery";
import WovenImageList from "./Gallery";



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
