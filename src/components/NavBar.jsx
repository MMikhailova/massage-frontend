// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import MenuItem from "@mui/material/MenuItem";
// import {  useNavigate } from "react-router-dom";
// import BasicMenu from "./Menu";


// const pages = ["Home", "About", "Treatments", "Contact"];
// const pagesXS=["Home", "About", "Massage","Yoga","Health coaching", "Contact"]

// function ResponsiveAppBar() {
//   const navigate=useNavigate()
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container
//         sx={{
//           width: "100%",
//           height: "15vh",
//           backgroundColor: "#8B9E95",
//         }}
//         maxWidth="xl"
//       >
//         <Toolbar
//           sx={{
//             mx: "3em",
//             justifyContent: { xs: "center", md: "center" },
//             maxHeight: "15vh",
//           }}
//           disableGutters
//         >
//           <Box
//             sx={{
//               my: 0,
//               // flexGrow: 1,
//               display: { xs: "flex", md: "none" },
//             }}
//           >
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorReference="anchorPosition"
//               anchorPosition={{ top: 135, right: 0 }}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "flex", md: "none" },
//                 "& .MuiPopover-paper": {
//                   maxWidth: "100%",
//                 },
//               }}
//             >
//               {pagesXS.map((page) => (
//                 <MenuItem
//                   sx={{
//                     width: "100vw",
//                     justifyContent: "center",
//                   }}
//                   key={page}
//                   onClick={() =>
//                     page === "Home" ? navigate("/") : navigate(`/${page}`)
//                   }
//                 >
//                   <Typography variant="p">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box
//             sx={{
//               height: "15vh",
//               display: "flex",
//               p: "4em",
//               justifyContent:{xs:"center",sm:"center",md:"flex-start"}
//             }}
//           >
//             <img
//               style={{ cursor: "pointer", objectFit: "fill" }}
//               src="../assets/logo.svg"
//               alt="beVibrant logo"
//               onClick={() => navigate("/")}
//             ></img>
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 1,
//               justifyContent: "flex-end",
//               margin:{xs:"auto"},

//               display: { xs: "none", md: "flex" },
//             }}
//           >
//             {pages.map((page) =>
//               page === "Treatments" ? (
//                 <BasicMenu></BasicMenu>
//               ) : (
//                   <Link
//                     variant="p"
//                   component="button"
//                   sx={{
//                     mx: 5,
//                     color: "white",
//                     display: "block",
//                   }}
//                   key={page}
//                   onClick={() =>
//                     page === "Home" ? navigate("/") : navigate(`/${page}`)
//                   }
//                   underline="hover"
//                 >
//                   {page}
//                 </Link>
//               )
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;


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


const pages = ["Home", "About", "Treatments", "Blog"];
const settings = ["Massage", "Yoga", "Health coaching"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#8B9E95", height: "15vh" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img alt="" style={{ height: "15vh" }} src="../assets/logo.svg"></img>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={page === "Treatments" && handleOpenUserMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;