import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Massage from './pages/Massage';
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
let theme = createTheme({
  typography: {
    fontFamily: "'Montserrat',sans serif",
    h2: {
      color: "#DF7861",
      fontWeight: 600,
      fontStyle: "italic",
    },
    h4: {
      color: "#678180",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" && {
            borderColor: "#DF7861",
            color: "#DF7861",
            "&:hover": {
              backgroundColor: "unset",
              borderColor: "unset",
             
            },
          }),
          ...(ownerState.variant === "contained" && {
            color: "white",
            boxShadow: "none",
            backgroundColor: "#DF7861",
            "&:hover": {
              color: "white",
              backgroundColor: "#DF7861",
              boxShadow: "none",
            },
          }),
        }),
      },
    },
  },
});

theme.typography.poster = {
  lineHeight:0,
  fontSize: "70px",
  "@media (min-width:600px)": {
    fontSize: "100px",
    fontWeight: 700,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "200px",
    fontWeight: 700,
  },
};



theme = responsiveFontSizes(theme);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/Massage" element={<Massage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

