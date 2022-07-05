import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { Box, ButtonGroup, Button } from "@mui/material";
import { IoTrashOutline, IoPencilOutline } from "react-icons/io5";

import { ViewCover, BlogTitle, BlogBody, BlogLoader } from "components";
import { getEditorState } from "utils";
import { reblogApi } from "api";

/**
 * Fetches a particular blog from the Reblog API and displays its data to the page accordingly.
 * @returns A page displaying a blog post in the Editor read-only mode.
 */

export default function ViewBlog() {
  const [blog, setBlog] = useState();
  const params = useParams();
  const { isLoading, isError, error, data } = useQuery("blog", () =>
    reblogApi.get(`/blogs/${params.blogId}`)
  );

  useEffect(() => {
    if (data) {
      setBlog({
        ...data,
        title: getEditorState(data.data.title),
        body: getEditorState(data.data.body),
      });
    }
  }, [data]);

  if (isLoading) {
    return <BlogLoader />;
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return blog ? (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 2 }}>
      <ViewCover src={blog.cover} alt={blog.cover} />
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backgroundColor: "white",
        }}
      >
        <BlogTitle blog={blog} setBlog={setBlog} readOnly={true} />
        <ButtonGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb: 4,
            position: { xs: "static", lg: "fixed" },
            bottom: {lg: "50%"},
            top: {lg: "50%"},
            right: {lg: 10},
            transform: {lg: "translate(-50%, -50%)"},
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to={`/blog/${params.blogId}/edit`}
            startIcon={<IoPencilOutline />}
            color="secondary"
            sx={{
              height: 50,
              borderRadius: 5,
              py: 3,
              outline: "2px solid #ead6db",
            }}
          >
            Editor
          </Button>
          <Button
            variant="contained"
            component={Link}
            to={`/blog/${params.blogId}/edit`}
            startIcon={<IoTrashOutline />}
            color="secondary"
            sx={{
              height: 50,
              borderRadius: 5,
              py: 3,
              outline: "2px solid #ead6db",
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Box>

      <BlogBody blog={blog} setBlog={setBlog} readOnly={true} />
    </Box>
  ) : (
    ""
  );
}
