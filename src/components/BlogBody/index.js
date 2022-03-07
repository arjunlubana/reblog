import { Editor, RichUtils } from "draft-js";
import { Toolbar } from "components";
import { useRef } from "react";

export default function BlogBody({
  blog,
  setBlog,
  readOnly,
}) {
  // const [body, setBody] = useState(null);
  const handleKeyCommand = (command, blog) => {
    const newState = RichUtils.handleKeyCommand(blog.body, command);
    if (newState) {
      setBlog({...blog, body: newState});
      return "handled";
    }
    return "not handled";
  };
  const handleChange = (editorState) => {
    setBlog({...blog, body: editorState});
  };
  const editorRef = useRef(null);

  const focusEditor = () => {
    editorRef.current.focus();
  };
  return (
    <div className="p-4">
      {readOnly ? (
        ""
      ) : (
        <Toolbar
          blog={blog}
          setBlog={setBlog}
          focusEditor={focusEditor}
        />
      )}

      <Editor
        editorState={blog.body}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
        placeholder="Whats on your mind ..."
        ref={editorRef}
        readOnly={readOnly}
      />
    </div>
  );
}
