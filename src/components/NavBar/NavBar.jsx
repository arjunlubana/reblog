import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NavMenu from "./NavMenu";
import NavMobileMenu from "./NavMobileMenu";
import { LoginButton } from "components";

export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            noWrap
            sx={{
              display: {
                fontFamily: "Corinthia",
                sm: "block",
                textDecoration: "none",
                color: "#ead6db",
              },
            }}
          >
            Reblog
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {isAuthenticated ? (
            <>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                <NavMenu />
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <NavMobileMenu />
              </Box>
            </>
          ) : (
            <LoginButton />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
