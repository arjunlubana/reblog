import {Box, Avatar, Typography} from "@mui/material"

export default function Profile() {
  return (
    <Box sx={{maxWidth: 600, mx: "auto", my: 2}}>
      <Avatar src="./assets/profile.jpg" sx={{width: 200, height: 200, mx: "auto"}} />
      <Typography component="h1" variant="h3" align="center">Maryanne Singh</Typography>
    </Box>
  );
}
