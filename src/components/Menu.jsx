import * as React from "react";
import { Link, Menu, MenuItem, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
const list=["Massage", "Yoga", "Health coaching"]
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 const navigate = useNavigate(null);
  const handleClose = (name) => {
    setAnchorEl(null);
    list.includes(name)&&
    navigate(`/${name}`)

  };

  return (
    <div>
      <Stack
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        direction="row"
        spacing={0}
      >
        <Link
          variant="p"
          underline="hover"
          component="button"
          sx={{
            ml: 2,
            color: "white",
            display: "block",
          }}
        >
          Treatments
        </Link>
        <ExpandMoreIcon sx={{ paddingTop: "0.2em" }} />
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
      >
        {list.map((name) => (
          <MenuItem onClick={() => handleClose(name)}>{name}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
