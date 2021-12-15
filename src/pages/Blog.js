import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Editor, EditorState } from "draft-js";
export default function Blog({blogData}) {
  // const [editorState, setEditorState] = useState(() => {
  //   EditorState.createWithContent(blogData)
  // })
  return (
    <div className="container w-75 mx-auto">
      <Link to="/blog/edit">Edit</Link>
      blog
      <div>
        <h4>Comments</h4>
      </div>

      <div>
        <h4>Related Content</h4>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
