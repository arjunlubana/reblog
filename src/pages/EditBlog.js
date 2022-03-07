import { IconContext } from "react-icons";
import { IoTrashOutline, IoCloudUploadOutline } from "react-icons/io5";
import { EditCover, BlogTitle, BlogBody } from "components";

export default function EditBlog({
  blog,
  setBlog,
  deleteBlog,
  updateBlog,
  publishBlog,
}) {
  return (
    <>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-info m-1"
            onClick={() => updateBlog(blog.id)}
          >
            Save
          </button>
          {blog.publish ? (
            ""
          ) : (
            <button
              className="btn btn-success m-1 fs-6 d-flex align-items-center"
              onClick={() => publishBlog(blog.id)}
            >
              <IoCloudUploadOutline />
              <span>Publish</span>
            </button>
          )}
          <button
            className="btn btn-danger m-1 fs-6 d-flex align-items-center"
            onClick={() => deleteBlog(blog.id)}
          >
            <IoTrashOutline />
            <span>Delete</span>
          </button>
        </div>
      </IconContext.Provider>
      <div className="w-75 mt-5 mx-auto">
        <EditCover blog={blog} setBlog={setBlog} />
        <BlogTitle blog={blog} setBlog={setBlog} readOnly={false} />
        <BlogBody blog={blog} setBlog={setBlog} readOnly={false} />
      </div>
    </>
  );
}
