import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
       sx={{color:"white"}}
      >
       Treatments
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
      >{list.map((name)=>
        <MenuItem onClick={()=>handleClose(name)}>{name}</MenuItem>)}
        
      </Menu>
    </div>
  );
}
