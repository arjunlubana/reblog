import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";

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
                sm: "block",
                textDecoration: "none",
                color: "white",
              },
            }}
          >
            REBLOG
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar></SearchBar>
          <Box sx={{ flexGrow: 1 }} />
          <NavMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
