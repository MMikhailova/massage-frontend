// import React, { useEffect, useState } from "react";

// import { getTreatments } from "../api/viewModels/getTreatments";
// import BasicGrid from "./TreatmentCadrs";
// import TreatmentTabs from "./TreatmentCadrs-massage"; 
// import { getGallery } from "../api/viewModels/getGallery";
// import WovenImageList from "./Gallery";

// const Treatment = ({ page }) => {
//   const [treatments, setTreatments] = useState([]);
//   const [gallery, setGallery] = useState([]);

//   useEffect(() => {
//     const fetchTreatments = async () => {
//       const treatmentsData = await getTreatments(
//         `https://strapi-production-7702.up.railway.app/api/treatments?filters[type][$eq]=${page}&populate=*`
//       );
//       setTreatments(treatmentsData);
//     };

//     const fetchGallery = async () => {
//       const galleryData = await getGallery(
//         `https://strapi-production-7702.up.railway.app/api/galleries?filters[treatment][$eq]=${page}&populate=*`
//       );
//       setGallery(galleryData);
//       console.log(galleryData);
//     };

//     fetchTreatments();
//     fetchGallery();
//   }, [page]);

//   return (
//     <>
//       {page === "massage" ? (
//         <TreatmentTabs data={treatments} />
//       ) : (
//         <BasicGrid data={treatments} />
//       )}
//       <WovenImageList data={gallery} page={page} />
//     </>
//   );
// };

// export default Treatment;


import React, { useEffect, useState } from "react";

import { getTreatments } from "../api/viewModels/getTreatments";
import BasicGrid from "./TreatmentCadrs";
import TreatmentTabs from "./TreatmentCadrs-massage";
import { getGallery } from "../api/viewModels/getGallery";
import WovenImageList from "./Gallery";

const Treatment = ({ page }) => {
  const [treatments, setTreatments] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchTreatments = async () => {
      const treatmentsData = await getTreatments(
        `https://strapi-production-7702.up.railway.app/api/treatments?filters[type][$eq]=${page}&populate=*`
      );
      setTreatments(treatmentsData);
    };

    const fetchGallery = async () => {
      const galleryData = await getGallery(
        `https://strapi-production-7702.up.railway.app/api/galleries?filters[treatment][$eq]=${page}&populate=*`
      );

      // Sort by updatedAt descending (latest first)
      const sortedGallery = [...galleryData].sort(
        (a, b) =>
          new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
      );

      setGallery(sortedGallery);
      console.log(sortedGallery);
    };

    fetchTreatments();
    fetchGallery();
  }, [page]);

  return (
    <>
      {page === "massage" ? (
        <TreatmentTabs data={treatments} />
      ) : (
        <BasicGrid data={treatments} />
      )}
      <WovenImageList data={gallery} page={page} />
    </>
  );
};

export default Treatment;