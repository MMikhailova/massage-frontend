

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';



      
const Root = styled("div")(({ theme }) => ({
  button: {
    color: "white",
    backgroundColor:"#DF7861",
    // border: "none",
    "&:hover": {
      borderColor: "#DF7861",
      color: "white",
      backgroundColor: "#DF7861",
    },


    borderWidth: "0.2rem",
    fontWeight: "normal",
    padding: "0.5em",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px",
    },
  },
}));

export default function StyledButton({ position, url }) {

  
    return (
      <Root>
        <Button
          sx={{
            display:url?"block":"none",
            position: `${position.position}`,
            top: `${position.top}`,
            transform: `${position.transform}`,
            left: `${position.left}`,
          }}
          target="_blank"
          href={url}
          variant="contained"
        >
          Book a session
        </Button>
      </Root>
    );
}