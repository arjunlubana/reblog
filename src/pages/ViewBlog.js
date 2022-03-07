import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoCreateOutline } from "react-icons/io5";
import { ViewCover, BlogTitle, BlogBody } from "components";

export default function ViewBlog({ blog, setBlog }) {
  return (
    <div className="container-fluid">
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-outline-info m-1 fs-6 d-flex align-items-center"
            to={`/blog/${blog.id}/edit`}
          >
            <IoCreateOutline />
            <span>Edit</span>
          </Link>
        </div>
      </IconContext.Provider>
      <div className="w-75 mt-5 mx-auto">
        <ViewCover image={blog.cover} />
        <BlogTitle blog={blog} setBlog={setBlog} readOnly={true} />
        <BlogBody blog={blog} setBlog={setBlog} readOnly={true} />
      </div>
    </div>
  );
}
