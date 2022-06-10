import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { IoPencilOutline } from "react-icons/io5";
import PopupMenuItems from "./PopupMenuItems";
import NavAvatar from "./NavAvatar";

export default function NavMobileMenu() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <PopupMenuItems />
      <MenuItem component={Link} to="/blog/new">
        <Button
          aria-label="show user's drafts"
          color="primary"
          startIcon={<IoPencilOutline />}
          disableRipple={true}
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Write
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton
        aria-label="show more profile options"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
      >
        <NavAvatar />
      </IconButton>
      {renderMobileMenu}
    </>
  );
}
