import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Massage from './pages/Massage';
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat',sans serif",
    subtitle1: { fontStyle: "italic" },
    h5: { color: "#678180" },
    h2: { color: "#DF7861", fontWeight: "bold", fontStyle: "italic" },
    p: { fontSize: "1.3em" },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontFamily: " 'Montserrat',sans serif",
          fontSize: "1.3em",
          fontWeight: "200",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontFamily: " 'Montserrat',sans serif",
          fontSize: "1.1em",
          fontStyle: "normal",
          fontWeight:"400"
        },
      },
    },
  },
});

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

