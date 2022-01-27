import { Link, useParams } from "react-router-dom";
import { BlogEditor } from "../components";

export default function ViewBlog({
  titleEditorState,
  setTitleEditorState,
  blogEditorState,
  setBlogEditorState,
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
          titleEditorState={titleEditorState}
          setTitleEditorState={setTitleEditorState}
          blogEditorState={blogEditorState}
          setBlogEditorState={setBlogEditorState}
          readOnly={true}
        />
      </div>{" "}
      <div>
        <h4> Comments </h4> <h4> Related Content </h4>{" "}
      </div>{" "}
    </div>
  );
}
