import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      aria-label="create a new blog post"
      color="secondary"
      sx={{
        mx: 2,
        height: 40,
        borderRadius: 10,
        outline: "2px solid #ead6db",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
