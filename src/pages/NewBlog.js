import { useState } from "react";
import { EditorState, RichUtils, convertToRaw } from "draft-js";
import BlogEditor from "../components/BlogEditor";
import { addBlog } from "../functions/blogCrud";

export default function NewBlog() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const addNewBlog = () => {
    addBlog(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div className="card w-75 mx-auto my-4">
      <BlogEditor
        editorState={editorState}
        setEditorState={setEditorState}
        saveContent={addNewBlog}
      />
    </div>
  );
}
