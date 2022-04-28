import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoCreateOutline } from "react-icons/io5";
import Box from "@mui/material/Box"

import useBlog from "hooks/useBlog";
import { ViewCover, BlogTitle, BlogBody } from "components";

export default function ViewBlog() {
  const { isLoading, blog, setBlog } = useBlog();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
      <Box sx={{maxWidth: 800, mx: "auto", my: 2}} >
        <ViewCover src="/cover-image.jpg" alt="Cover" />
        <BlogTitle blog={blog} setBlog={setBlog} readOnly={true} />
        <BlogBody blog={blog} setBlog={setBlog} readOnly={true} />
      </Box>
  );
}


{/*<IconContext.Provider value={{ size: "24px" }}>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-outline-info m-1 fs-6 d-flex align-items-center"
            to={`/blog/${blog.id}/edit`}
          >
            <IoCreateOutline />
            <span>Edit</span>
          </Link>
        </div>
      </IconContext.Provider>*/}