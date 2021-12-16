import { Link, Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import { getBlog } from "../functions/blogCrud";

export default function Blog() {
  const params = useParams();
  const blog = getBlog(params.blogId);
  const contentState = convertFromRaw(blog.data);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(contentState)
  );
  console.log(editorState);
  return (
    <div className="container w-75 mx-auto">
      <Link to="/blog/edit">Edit</Link>
      <div className="card w-75 mx-auto p-4">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          readOnly={true}
        />
      </div>
      <div>
        <h4>Comments</h4>
        <h4>Related Content</h4>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
