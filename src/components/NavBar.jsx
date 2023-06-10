import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import BasicMenu from "./Menu";





const pages = ["Home", "About", "Treatments", "Contact"];
const pagesXS=["Home", "About", "Massage","Yoga","Health coaching", "Contact"]

function ResponsiveAppBar() {
  const navigate=useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container
        sx={{
          height: "20vh",
          backgroundColor: "#8B9E95",
        }}
        maxWidth="xl"
      >
        <Toolbar
          sx={{
            mx: "3em",
            justifyContent: { xs: "center", md: "center" },
            maxHeight: "20vh",
          }}
          disableGutters
        >
          <Box
            sx={{
              my: 0,
              // flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorReference="anchorPosition"
              anchorPosition={{ top: 135, right: 0 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                "& .MuiPopover-paper": {
                  maxWidth: "100%",
                },
              }}
            >
              {pagesXS.map((page) => (
                <MenuItem
                  sx={{
                    width: "100vw",
                    justifyContent: "center",
                  }}
                  key={page}
                  onClick={() => navigate(`/${page}`)}
                >
                  <Typography variant="p">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              height: "20vh",
              display: "flex",
              my: { xs: "auto", md: "1em" },
            }}
          >
            <img
              style={{ cursor: "pointer", objectFit: "contain" }}
              src="../assets/logo.svg"
              alt="beVibrant logo"
              onClick={() => navigate("/")}
            ></img>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "center",

              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) =>
              page === "Treatments" ? (
                <BasicMenu></BasicMenu>
              ) : (
                <Button
                  key={page}
                  onClick={() => navigate(`/${page}`)}
                  sx={{
                    mx: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
