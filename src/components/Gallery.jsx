import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";

export default function WovenImageList({data}) {
  return (
    <>
      <Typography textAlign="center" variant="h2" color="#678180">
        Gallery
      </Typography>
      <ImageList
        sx={{ width: "80%", height: "auto", margin: "auto",pb:3 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {data.map((img) => (
          <ImageListItem key={img.attributes.url}>
            <img
              src={`${img.attributes.url}?w=161&fit=crop&auto=format`}
              srcSet={`${img.attributes.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={img.attributes.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

