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
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
const drawerWidth ="100vw";
const navItemsLg = ["Home", "Treatments", "About", "Contact"];
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
      const navigate = useNavigate();
      const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleCloseUserMenu = ( item) => {
    setAnchorElUser(null);
    menuItems.includes(item) && navigate(`/${item}`);
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
          alt=""
          style={{ objectFit: "fill", height: "15vh" }}
          src="../assets/logo.svg"
        ></img>
      </Box>
      <Divider s />
      <List>
        {navItemsSm.map((item) => (
          <ListItem
            onClick={() =>
              item === "Home" ? navigate("/") : navigate(`/${item}`)
            }
            key={item}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
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
            <img
              alt=""
              style={{ height: "15vh" }}
              src="../assets/logo.svg"
            ></img>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
              width: "100%",
            }}
          >
            {navItemsLg.map((item) => (
              <Button
                onClick={
                  item === "Treatments"
                    ? handleOpenUserMenu
                    : item === "Home"
                    ? () => navigate("/")
                    : () => navigate(`/${item}`)
                }
                key={item}
                sx={{ color: "#fff", px: 2 }}
              >
                {item}
                {item === "Treatments" && <KeyboardArrowDownIcon />}
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
                  <MenuItem key={item} onClick={(item)=>handleCloseUserMenu(item)}>
                      <Typography  textAlign="center">{item}</Typography>
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
