import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


// Critical links that should be included in the raw HTML
const navItemsLg = [
  { label: "Home", path: "/" },
  { label: "Treatments", path: "/treatments" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const navItemsSm = [
  { label: "Home", path: "/" },
  { label: "Massage", path: "/massage" },
  { label: "Yoga", path: "/yoga" },
  { label: "Health Coaching", path: "/coaching" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const menuItems = [
  { label: "Massage", path: "/massage" },
  { label: "Yoga", path: "/yoga" },
  { label: "Health Coaching", path: "/coaching" },
];

function DrawerAppBar(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8B9E95",
          height: "15vh",
        }}
      >
        <img
          alt="beVibrant logo featuring an orange sun with a beige wave in Ayurvedic style"
          style={{ objectFit: "fill", height: "15vh" }}
          src="../assets/logo.svg"
        />
      </Box>
      <Divider />
      <List>
        {navItemsSm.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <a
                href={item.path} // Fallback for raw HTML
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItemText primary={item.label} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    props.window !== undefined ? () => props.window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#8B9E95" }}>
        <Toolbar sx={{ mx: "6rem" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <a href="/" style={{ display: "flex" }}>
              <img
                alt="beVibrant logo featuring an orange sun with a beige wave in Ayurvedic style"
                style={{ height: "15vh" }}
                src="../assets/logo.svg"
              />
            </a>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
              width: "100%",
            }}
          >
            {navItemsLg.map((item) => (
              <Button key={item.label} sx={{ color: "#fff", px: 2 }}>
                {item.label === "Treatments" ? (
                  <>
                    <span>{item.label}</span>
                    <KeyboardArrowDownIcon onClick={handleOpenUserMenu} />
                  </>
                ) : (
                  // Use both <a> and <Link> for fallback
                  <a
                    href={item.path} // Fallback for SEO and non-JS crawlers
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.label}
                  </a>
                )}
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
              {menuItems.map((item) => (
                <MenuItem key={item.label}>
                  <a
                    href={item.path} // Fallback for non-JS clients
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    {item.label}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100vw",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
