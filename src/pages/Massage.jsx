import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/NavBar';
import { Box, Typography } from '@mui/material';
import StyledButton from '../components/Button';
import { getTreatments } from '../api/viewModels/getTreatments';

const positionBtn = {
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const Massage = () => {
      const [treatments, setTreatments] = useState([]);
      useEffect(() => {
        getTreatments('https://strapi-production-7702.up.railway.app/api/blogs?populate=*').then((vm) => {
          setTreatments(vm);
        });
      }, []);
      console.log(treatments);
    return (
      <Box
        sx={{
          height: "3000px",
          backgroundColor: "#FCF8E8",
        }}
      >
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            position: "relative",
            p: 0,
          }}
          variant="quilted"
          // gap={1}
        >
          <img
            style={{ objectFit: "cover", width: "100vw", opacity: "90%" }}
            src="../assets/handback.jpg"
            alt="1"
            loading="lazy"
          />
          <StyledButton position={positionBtn} />
          <Typography
            variant="h1"
            marginBlockEnd="0em"
            sx={{
              position: "absolute",
              bottom: -60,
              margin: 0,
              fontSize: "200px",
              fontWeight: "600",
              marginBlockEnd: "0em",
              color: "#FCF8E8",
            }}
          >
            MASSAGE
          </Typography>
        </Box>
      </Box>
    );
}

export default Massage
