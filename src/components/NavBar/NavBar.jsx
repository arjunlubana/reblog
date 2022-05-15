import { Link } from "react-router-dom";
import { AppBar, Button, Fab, Box, Toolbar, Typography } from "@mui/material";
import { IoPencilOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import NavMenu from "./NavMenu";
import NavMobileMenu from "./NavMobileMenu";

export default function NavBar() {
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

          {/* Large Screens */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
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
            <NavMenu />
          </Box>

          {/* Small Screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Fab
              variant="extended"
              color="secondary"
              component={Link}
              to="/blog/new"
              sx={{
                display: { xs: "flex", md: "none" },
                position: "fixed",
                bottom: 16,
                right: 16,
                outline: "2px solid #ead6db",
                fontSize: "1rem",
              }}
            >
              <IconContext.Provider value={{ style: { marginRight: "5px" } }}>
                <IoPencilOutline />
              </IconContext.Provider>
              Write
            </Fab>
            <NavMobileMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
