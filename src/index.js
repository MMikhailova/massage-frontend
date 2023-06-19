import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Massage from './pages/Massage';
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
let theme = createTheme({
  typography: {
    fontFamily: "'Montserrat',sans serif"
  }

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

