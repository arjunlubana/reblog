import { IconContext } from "react-icons";
import { IoTrashOutline, IoCloudUploadOutline } from "react-icons/io5";
import Box from "@mui/material/Box"
import useBlog from "hooks/useBlog";
import { EditCover, BlogTitle, BlogBody } from "components";

export default function EditBlog() {
  const { isLoading, blog, setBlog, delete_blog, update_blog, publish_blog } =
    useBlog();

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <Box sx={{maxWidth: 800, mx: "auto", my: 2}} >
      <EditCover blog={blog} setBlog={setBlog} />
      <BlogTitle blog={blog} setBlog={setBlog} readOnly={false} />
      <BlogBody blog={blog} setBlog={setBlog} readOnly={false} />
    </Box>
  );
}



{/*<IconContext.Provider value={{ size: "24px" }}>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-info m-1"
            onClick={() => update_blog(blog.id)}
          >
            Save
          </button>
          {blog.publish ? (
            ""
          ) : (
            <button
              className="btn btn-success m-1 fs-6 d-flex align-items-center"
              onClick={() => publish_blog(blog.id)}
            >
              <IoCloudUploadOutline />
              <span>Publish</span>
            </button>
          )}
          <button
            className="btn btn-danger m-1 fs-6 d-flex align-items-center"
            onClick={() => delete_blog(blog.id)}
          >
            <IoTrashOutline />
            <span>Delete</span>
          </button>
        </div>
      </IconContext.Provider>*/}