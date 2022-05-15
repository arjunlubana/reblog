import React from "react";
import { Link } from "react-router-dom";
import { Button, MenuItem } from "@mui/material";
import { IoCog, IoDocumentText } from "react-icons/io5";

export default function PopupMenuItems() {
  return (
    <>
      <MenuItem component={Link} to="/profile">
        <Button
          aria-label="settings for current user"
          color="primary"
          startIcon=<IoCog />
        >
          Settings
        </Button>
      </MenuItem>
      <MenuItem component={Link} to="/drafts">
        <Button
          aria-label="show user's drafts"
          color="primary"
          startIcon=<IoDocumentText />
        >
          Drafts
        </Button>
      </MenuItem>
    </>
  );
}
