import { Typography } from "@mui/material";

export default function EmptyBlogs() {
  return (
    <Typography
      variant="h5"
      color="gray"
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      Oops!
      <br />
      Add a new article
      <br />
    </Typography>
  );
}
