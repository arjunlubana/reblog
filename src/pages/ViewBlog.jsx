import { Link, useParams } from "react-router-dom";
import { BlogEditor } from "../components";

export default function ViewBlog({
  blog,
  deleteBlog,
}) {
  const params = useParams();

  return (
    <div className="container w-75 mx-auto">
      <Link className="btn btn-info" to={`/blog/${params.blogId}/edit`}>
        {" "}
        Edit{" "}
      </Link>{" "}
      <button className="btn btn-info" onClick={deleteBlog}>
        {" "}
        Delete{" "}
      </button>{" "}
      <div className="w-75 mx-auto p-4">
        <BlogEditor
          blog={blog}
          readOnly={true}
        />
      </div>{" "}
      <div>
        <h4> Comments </h4> <h4> Related Content </h4>{" "}
      </div>{" "}
    </div>
  );
}
