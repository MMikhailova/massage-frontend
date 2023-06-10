

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';



      
const Root = styled("div")(({ theme }) => ({
  button: {
    color: "#DF7861",
    // border: "none",
    "&:hover": {
      borderColor: "#DF7861",
      color: "white",
      backgroundColor: "#DF7861",
    },

    borderColor: "#DF7861",
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
      fontSize: "24px",
    },
  },
}));

export default function StyledButton({position,url}) {
    const openInNewTab = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
      <Root>
        <Button
          sx={{
            position: `${position.position}`,
            top: `${position.top}`,
                    transform: `${position.transform}`,
            left:`${position.left}`
          }}
          onClick={() =>
            openInNewTab(
              url
            )
          }
          variant="outlined"
        >
          Book a session
        </Button>
      </Root>
    );
}