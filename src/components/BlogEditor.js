import { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import Toolbar from "./Toolbar";
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


  return (
    <div className="p-2">
      <Toolbar editorState={editorState} setEditorState={setEditorState}/>
      <hr />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Whats on your mind ..."
      />
    </div>
  );
}
