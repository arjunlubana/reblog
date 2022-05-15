import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { IconContext } from "react-icons";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { IoPencilSharp } from "react-icons/io5";

import {
  ViewCover,
  BlogTitle,
  BlogBody,
  BlogLoader,
} from "components";
import { getEditorState } from "utils";
import { reblogApi } from "api";

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
      <BlogTitle blog={blog} setBlog={setBlog} readOnly={true} />
      <BlogBody blog={blog} setBlog={setBlog} readOnly={true} />
      <IconContext.Provider value={{ size: 24, color: "white" }}>
        <Fab
          component={Link}
          to={`/blog/${params.blogId}/edit`}
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
  ) : (
    ""
  );
}
