import { Link, useParams } from "react-router-dom";
import { BlogEditor } from "../components";

export default function ViewBlog({
  blog,
  deleteBlog,
}) {
  const params = useParams();

  return (
    <div className="container w-100">
      <Link className="btn btn-info" to={`/blog/${params.blogId}/edit`}>
        {" "}
        Edit{" "}
      </Link>{" "}
      <button className="btn btn-info" onClick={deleteBlog}>
        {" "}
        Delete{" "}
      </button>{" "}
        <BlogEditor
          blog={blog}
          readOnly={true}
        />
      <div>
        <h4> Comments </h4> <h4> Related Content </h4>{" "}
      </div>{" "}
    </div>
  );
}
