import { IconContext } from "react-icons";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { IoPencilSharp } from "react-icons/io5";

import useBlog from "hooks/useBlog";
import { ViewCover, BlogTitle, BlogBody, StyledLink } from "components";

export default function ViewBlog() {
  const { isLoading, blog, setBlog } = useBlog();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 2 }}>
      <ViewCover src="/cover-image.jpg" alt="Cover" />
      <BlogTitle blog={blog} setBlog={setBlog} readOnly={true} />
      <BlogBody blog={blog} setBlog={setBlog} readOnly={true} />
      <IconContext.Provider value={{ size: 24, color: "white" }}>
        <Fab
          component={StyledLink}
          to={`/blog/${blog.id}/edit`}
          color="success"
          sx={{
            position: "fixed",
            bottom: 16,
            right: { xs: 16, sm: 64, md: 128, lg: 128 },
          }}
        >
          <IoPencilSharp />
        </Fab>
      </IconContext.Provider>
    </Box>
  );
}
