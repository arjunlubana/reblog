import React from "react";
import { IconButton, Menu } from "@mui/material";
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
