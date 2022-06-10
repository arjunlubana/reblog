import { useBlog } from "hooks";

import { Box } from "@mui/material";
import { EditCover, BlogTitle, BlogBody, EditorActionBar } from "components";

export default function BlogEditor({ data }) {
  const { blog, setBlog, delete_blog, update_blog, publish_blog } =
    useBlog(data);

  return blog ? (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 2 }}>
      <EditCover blog={blog} setBlog={setBlog} />
      <BlogTitle blog={blog} setBlog={setBlog} readOnly={false} />
      <BlogBody blog={blog} setBlog={setBlog} readOnly={false} />
      <EditorActionBar
        blog={blog}
        update_blog={update_blog}
        publish_blog={publish_blog}
        delete_blog={delete_blog}
      />
    </Box>
  ) : (
    ""
  );
}
