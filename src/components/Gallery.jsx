
import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, CardMedia } from "@mui/material";

export default function MasonryImageList({ data, page }) {
  return (
    <Box width="100%" height="fit-content" py={5}>
      <Typography py={2} textAlign="center" variant="h2" color="#678180">
        beVibrant gallery
      </Typography>
      {page === "massage" && (
        <CardMedia
          sx={{
            mx: "auto",
            width: { xs: "100%", md: "80%" },
            my: 2,
          }}
          component="video"
          controls
          src="https://res.cloudinary.com/dqbm9veoe/video/upload/v1686644213/beVibrant.mov"
        ></CardMedia>
      )}
      {page === "yoga" && (
        <CardMedia
          sx={{
            mx: "auto",
            width: { xs: "100%", md: "80%" },
            height: " 60vh",
            my: 2,
          }}
          component="iframe"
          controls
          src="https://www.youtube.com/embed/tyjUry32DyU"
        ></CardMedia>
      )}
      <ImageList
        sx={{
          width: { xs: "100%", md: "80%" },
          height: "fit-content",
          overflow: "hidden",
          margin: "auto",
          pb: 3,
        }}
        variant="masonry"
        cols={3}
        gap={10}
      >
        {data.map((img) => (
          <ImageListItem key={img.attributes.url}>
            <img
              src={`${img.attributes.url}?w=248&fit=crop&auto=format`}
              srcSet={`${img.attributes.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img.attributes.name}
              loading="Gallery images"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
