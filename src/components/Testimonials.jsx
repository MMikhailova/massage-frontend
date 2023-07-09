import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Typography, useMediaQuery, useTheme,Container } from "@mui/material";

const TestimonialCarousel = () => {
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const testimonials = [
    {
      id: 0,
      name: "Anabel",
      text:
        "I am a professional dancer and my back is often tensed. For years I have been receiving massages from Natalya, and it's the only thing that helps me to move on with my dance performances. Thank you so much Natalya, I will recommend you to anyone I love 💕",
    },
    {
      id: 1,
      name: "Andrian",
      text:
        "The massage given by Natalya is one of the most amazing experiences, a truly holistic ritual which will re-energize your body and take your senses on a journey of ultimate relaxation.",
    },
    {
      id: 2,
      name: "Olga",
      text:
        "I was searching for a massage near me, and a friend recommended Natalya to me in 2019. Coincidentally, she was my neighbor:)) Being an experienced massage recipient, I immediately appreciated her technique, and since then, I have been a weekly client of hers. Throughout both of my pregnancies, Natalya adjusted our sessions using special equipment and different techniques, such as drainage, which my pregnant body greatly needed as it had accumulated a lot of water. After each massage, I always felt significantly lighter and positively recharged. I have happily recommended Natalya to many of my friends.",
    },
    {
      id: 3,
      name: "Frances",
      text:
        "I have been a loyal client of Natalya since 2018, seeking her expertise in both yoga and massage. Natalya's weekly Ayurvedic facials and deep tissue massages have truly become an essential source of energy for me. After each facial, my face radiates with a beautiful glow, and her deep tissue massages leave my body and mind in a state of deep relaxation. Natalya's Yoga sessions are equally impressive, with a seamless flow and clear explanation of postures. I always feel rejuvenated and immensely relaxed after each session. Natalya's services have made a remarkable difference in my overall well-being.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
     
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
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={200}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
        showDots={isSmallScreen ? false : true}
        width={isSmallScreen ? 100 : 100}
      >
        {testimonials.map((testimonial) => (
          <Paper
            key={testimonial.id}
            elevation={3}
            sx={{
              backgroundColor: "#94B49F",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "80%", md: "100%" },
              wordWrap: "normal",
              padding: 3,
              textAlign: "left",
              color: "white",
              m: 1,
              overflow: { xs: "scroll", md: "unset" },
            }}
          >
            <Typography variant="h6" component="h3" sx={{ marginBottom: 2 }}>
              {testimonial.name}
            </Typography>
            <Typography sx={{ height: "100%" }} variant="body1">
              {testimonial.text}
            </Typography>
          </Paper>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialCarousel;
