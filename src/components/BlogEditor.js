import { useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import Toolbar from "./Toolbar";
import AddBlog, { addBlog } from "../functions/blogCrud"
import "draft-js/dist/Draft.css";

export default function BlogEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not handled";
  };

  const saveContent = () => {
    addBlog(convertToRaw(editorState.getCurrentContent()))
  };
  return (
    <div>
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <button className="btn btn-info m-1" onClick={saveContent}>
        Save
      </button>
      <div className="p-4">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder="Whats on your mind ..."
        />
      </div>
    </div>
  );
}
