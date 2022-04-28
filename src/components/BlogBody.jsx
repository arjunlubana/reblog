import { useRef } from "react";
import { Editor } from "draft-js";
import Container from "@mui/material/Container"
import { Toolbar } from "components";

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
    <Container>
      <Toolbar
        blog={blog}
        setBlog={setBlog}
        focusEditor={focusEditor}
        readOnly={readOnly}
      />
      <Editor
        editorState={blog.body}
        onChange={handleChange}
        placeholder="Whats on your mind ..."
        ref={editorRef}
        readOnly={readOnly}
      />
    </Container>
  );
}
