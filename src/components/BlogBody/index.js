import { Editor } from "draft-js";
import { Toolbar } from "components";
import { useRef } from "react";
import "draft-js/dist/Draft.css";

export default function BlogBody({ blog, setBlog, readOnly }) {

  const handleChange = (editorState) => {
    setBlog({ ...blog, body: editorState });
  };
  const editorRef = useRef(null);

  const focusEditor = () => {
    editorRef.current.focus();
  };
  return (
    <div className="d-flex flex-column">
      <Toolbar
        blog={blog}
        setBlog={setBlog}
        focusEditor={focusEditor}
        readOnly={readOnly}
      />
      <div id="body-editor" className="w-75 mx-auto p-4">
        <Editor
          editorState={blog.body}
          onChange={handleChange}
          placeholder="Whats on your mind ..."
          ref={editorRef}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}
