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
import { Link } from "react-router-dom";

const drawerWidth = "100vw";
const navItemsLg = ["Home", "Treatments", "about", "contact"];
const navItemsSm = [
  "Home",
  "Massage",
  "Yoga",
  "Health coaching",
  "About",
  "Contact",
];
const menuItems = ["Massage", "Yoga", "Health coaching"];
function DrawerAppBar(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
        ></img>
      </Box>
      <Divider />
      <List>
        {navItemsSm.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : item === "Health coaching"
                    ? "/coaching"
                    : `/${item.toLowerCase()}`
                }
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            <Link to="/" style={{ display: "flex" }}>
              <img
                alt="beVibrant logo featuring an orange sun with a beige wave in Ayurvedic style"
                style={{ height: "15vh" }}
                src="../assets/logo.svg"
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
              width: "100%",
            }}
          >
            {navItemsLg.map((item) => (
              <Button key={item} sx={{ color: "#fff", px: 2 }}>
                {item === "Treatments" ? (
                  <>
                    <span>{item}</span>
                    <KeyboardArrowDownIcon onClick={handleOpenUserMenu} />
                  </>
                ) : (
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Health coaching"
                        ? "/coaching"
                        : `/${item.toLowerCase()}`
                    }
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item}
                  </Link>
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
                <MenuItem key={item}>
                  <Link
                    to={
                      item === "Health coaching"
                        ? "/coaching"
                        : `/${item.toLowerCase()}`
                    }
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    {item}
                  </Link>
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
              width: drawerWidth,
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
