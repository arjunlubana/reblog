import { Typography, Button } from "@mui/material";
import { StyledLink } from "components";

export default function EmptyBlogs() {
  return (
    <Typography
      variant="h3"
      color="gray"
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      Sorry!
      <br />
      There is nothing to show you.
      <br />
      <Button
        component={StyledLink}
        to="/blog/new"
        variant="outlined"
        size="large"
        sx={{ px: 3 , m: 3 }}
      >
        <Typography variant="h4">Publish a blog</Typography>
      </Button>
    </Typography>
  );
}
