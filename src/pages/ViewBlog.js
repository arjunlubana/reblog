import { Link, useParams } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  IoCreateOutline,
  IoTrashOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";
import { BlogEditor } from "../components";

export default function ViewBlog({ blog, deleteBlog, publishBlog }) {
  const params = useParams();

  return (
    <div className="container-fluid">
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-outline-info m-1 fs-6 d-flex align-items-center"
            to={`/blog/${params.blogId}/edit`}
          >
            <IoCreateOutline />
            <span>Edit</span>
          </Link>

          <button
            className="btn btn-success m-1 fs-6 d-flex align-items-center"
            onClick={publishBlog}
          >
            <IoCloudUploadOutline />
            <span>Publish</span>
          </button>

          <button
            className="btn btn-danger m-1 fs-6 d-flex align-items-center"
            onClick={deleteBlog}
          >
            <IoTrashOutline />
            <span>Delete</span>
          </button>
        </div>
      </IconContext.Provider>
      <BlogEditor blog={blog} readOnly={true} />
    </div>
  );
}
