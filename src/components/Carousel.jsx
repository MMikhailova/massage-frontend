import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Paper,

  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";

const ImagesCarousel = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const certificates = [
    {
      id: 0,
      name: "Anabel",
      url: "../assets/yoga-certificate-level-one.png",
    },
    {
      id: 1,
      name: "Andrian",
      url: "../assets/yoga-certificate-advance.png",
    },

    {
      id: 2,
      name: "An",
      url: "../assets/massage-certificate-chine.png",
    },
    {
      id: 3,
      name: "Aan",
      url: "../assets/yoga-instructor-certificate.png",
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ my: 3, p: 0 }}>
      <Carousel
        arrows={false}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
        showDots={isSmallScreen?true:false}
        width={isSmallScreen ? 100 : 100}
      >
        {certificates.map((certificate) => (
          <Paper
            key={certificate.id}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              wordWrap: "normal",
              padding: 3,
              textAlign: "left",
              color: "white",
              m: 1,
              overflow: { xs: "scroll", md: "unset" },
            }}
          >
            <img
              key={certificate.id}
              src={certificate.url}
              alt="yoga pose"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Paper>
        ))}
      </Carousel>
    </Container>
  );
};

export default ImagesCarousel;
