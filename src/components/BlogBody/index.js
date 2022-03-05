import { Editor, RichUtils, convertToRaw } from "draft-js";
import { Toolbar } from "components";
import { useRef } from "react";

export default function BlogBody({
  blogBody,
  setBlogBody,
  blogUpdate,
  setBlogUpdate,
  readOnly,
}) {
  const handleKeyCommand = (command, blogBody) => {
    const newState = RichUtils.handleKeyCommand(blogBody, command);
    if (newState) {
      setBlogBody(newState);
      return "handled";
    }
    return "not handled";
  };
  const handleChange = (editorState) => {
    setBlogBody(editorState);
    // Registers title updates to be sent to the server
    let rawEditorState = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    if (blogUpdate.has("body")) {
      blogUpdate.set("body", rawEditorState);
    } else {
      blogUpdate.append("body", rawEditorState);
    }
    setBlogUpdate(blogUpdate);
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
          blogBody={blogBody}
          setBlogBody={setBlogBody}
          focusEditor={focusEditor}
        />
      )}

      <Editor
        editorState={blogBody}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
        placeholder="Whats on your mind ..."
        ref={editorRef}
        readOnly={readOnly}
      />
    </div>
  );
}
