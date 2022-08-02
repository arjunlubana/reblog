import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Menu } from "@mui/material";
import { IoPencilOutline } from "react-icons/io5";
import PopupMenuItems from "./PopupMenuItems";
import NavAvatar from "./NavAvatar";

export default function NavMenu() {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={menuAnchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <PopupMenuItems />
    </Menu>
  );

  return (
    <>
      <Button
        variant="contained"
        component={Link}
        to="/blog/new"
        aria-label="create a new blog post"
        startIcon={<IoPencilOutline />}
        color="secondary"
        sx={{
          mx: 2,
          height: 40,
          borderRadius: 10,
          outline: "2px solid #ead6db",
        }}
      >
        Write
      </Button>
      <IconButton
        aria-label="show more"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <NavAvatar />
      </IconButton>
      {renderMenu}
    </>
  );
}
