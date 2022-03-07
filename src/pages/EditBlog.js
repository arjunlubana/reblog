import { IconContext } from "react-icons";
import { IoTrashOutline, IoCloudUploadOutline } from "react-icons/io5";
import { BlogEditor } from "components";

export default function EditBlog({
  blog,
  setBlog,
  blogUpdate,
  setBlogUpdate,
  deleteBlog,
  updateBlog,
  publishBlog,
}) {
  return (
    <>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className="d-flex justify-content-center">
          <button className="btn btn-info m-1" onClick={updateBlog}>
            Save
          </button>
          {blog.publish ? (
            ""
          ) : (
            <button
              className="btn btn-success m-1 fs-6 d-flex align-items-center"
              onClick={publishBlog}
            >
              <IoCloudUploadOutline />
              <span>Publish</span>
            </button>
          )}
          <button
            className="btn btn-danger m-1 fs-6 d-flex align-items-center"
            onClick={deleteBlog}
          >
            <IoTrashOutline />
            <span>Delete</span>
          </button>
        </div>
      </IconContext.Provider>
      <BlogEditor
        blog={blog}
        setBlog={setBlog}
        readOnly={false}
        blogUpdate={blogUpdate}
        setBlogUpdate={setBlogUpdate}
      />
    </>
  );
}
