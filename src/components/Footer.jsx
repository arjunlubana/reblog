import { Box, Link } from "@mui/material";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
export default function Footer() {
  return (
    <Box
      sx={{
        height: 100,
        width: "100%",
        backgroundColor: "#332c62",
        color: "#ead6db",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 200,
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.5rem",
        }}
      >
        <Link href="https://github.com/arjunlubana" color="#ead6db">
          <IoLogoGithub />
        </Link>
        <Link href="https://instagram.com/iamjunox" color="#ead6db">
          <IoLogoLinkedin />
        </Link>
        <Link href="https://twitter.com/iamjunox" color="#ead6db">
          <IoLogoTwitter />
        </Link>
        <Link href="https://instagram.com/iamjunox" color="#ead6db">
          <IoLogoInstagram />
        </Link>
        
      </Box>
      <Box>Made with 💟️ by JunoX</Box>
    </Box>
  );
}
