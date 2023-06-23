import React, { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material';
import StyledButton from '../components/Button';
import { getTreatments } from '../api/viewModels/getTreatments';
import BasicGrid from '../components/Treatments';
import { getGallery } from '../api/viewModels/getGallery';
import WovenImageList from '../components/Gallery';
import DrawerAppBar from '../components/Navigation';
import Footer from '../components/Footer';


const positionBtn = {
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Massage = () => {
  const [treatments, setTreatments] = useState([]);
  const [gallery, setGallery]=useState([])
      useEffect(() => {
        getTreatments(
          "https://strapi-production-7702.up.railway.app/api/treatments?filters[type][$eq]=massage&populate=*"
        ).then((vm) => {
          setTreatments(vm);
        });
        getGallery(
          "https://strapi-production-7702.up.railway.app/api/galleries?filters[treatment][$eq]=massage&populate=*"
        ).then((vm) => setGallery(vm));
      }, []);
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
              width: "100%",
              height: "65vh",
              justifyContent: "center",
              display: "flex",
              alignContent: "center",
              position: "relative",
            
            }}
            variant="quilted"
            // gap={1}
          >
            <img
              style={{ objectFit: "cover", width: "100vw", opacity: "85%" }}
              src="../assets/handback.jpg"
              alt="1"
              loading="lazy"
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
              MASSAGE
            </Typography>
          </Box>

          <BasicGrid data={treatments} />

          <WovenImageList data={gallery} />
        </Box>
        <Footer />
      </>
    );
}

export default Massage
