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
import Button from "@mui/material/Button";

const navItemsLg = [
  { label: "Home", path: "/" },
  { label: "Massage", path: "/massage" },
  { label: "Yoga", path: "/yoga" },
  { label: "Health Coaching", path: "/coaching" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const navItemsSm = navItemsLg;

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
          height: "15vh"
        }}
      >
        <Box
          component="img"
          src="../assets/logo.svg"
          alt="beVibrant logo"
          sx={{
            objectFit: "fill",
            width: { xs: "120px", md: "180px" },
            height: "200px",
            maxHeight: "15vh",
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItemsSm.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <a
                href={item.path}
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
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "start" },
            alignItems: "center",
            mx: { xs: "24px", sm: 5 },
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              // flexGrow: { xs: 1, sm: 0 },
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Box
              component="img"
              src="../assets/logo.svg"
              alt="beVibrant logo"
              sx={{
                objectFit: "fill",
                width: { xs: "120px", md: "180px" },
                height: "200px",
                maxHeight: "15vh",
              }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
              width: "100%"
            }}
          >
            {navItemsLg.map((item) => (
              <Button key={item.label} sx={{ color: "#fff", px: 2 }}>
                <a
                  href={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.label}
                </a>
              </Button>
            ))}
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
