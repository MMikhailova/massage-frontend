import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" && {
            borderColor: "#DF7861",
            color: "#DF7861",
            "&:hover": {
              color: "white",
              backgroundColor: "#DF7861",
            },
          }),
          ...(ownerState.variant === "contained" && {
            color: "white",
            backgroundColor: "#DF7861",
            "&:hover": {
              color: "white",
              backgroundColor: "#DF7861",
            },
          }),
        }),
      },
    },
  },
});

const CustomButton = ({ variant, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} variant={variant} />
    </ThemeProvider>
  );
};

export default CustomButton;
