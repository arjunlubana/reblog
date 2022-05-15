import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{minHeight: "90vh"}} >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
