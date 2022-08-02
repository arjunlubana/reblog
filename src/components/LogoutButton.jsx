import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { IoLogOut } from "react-icons/io5";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      aria-label="Logout from the application"
      startIcon={<IoLogOut />}
      color="primary"
      disableRipple={true}
      sx={{
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
