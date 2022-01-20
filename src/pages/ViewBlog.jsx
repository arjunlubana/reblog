import { Link } from "react-router-dom";
import { Editor } from "draft-js";

export default function ViewBlog({ blogId, editorState, setEditorState, deleteBlog }) {

  return (
    <div className="container w-75 mx-auto">
      <Link className="btn btn-info" to={`/blog/${blogId}/edit`}>
        {" "}
        Edit{" "}
      </Link>{" "}
      <Link className="btn btn-info" onClick={deleteBlog} to="/">
        {" "}
        Delete{" "}
      </Link>{" "}
      <div className="w-75 mx-auto p-4">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          readOnly={true}
        />{" "}
      </div>{" "}
      <div>
        <h4> Comments </h4> <h4> Related Content </h4>{" "}
      </div>{" "}
    </div>
  );
}
