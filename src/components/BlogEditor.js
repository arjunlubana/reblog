import { Editor, RichUtils } from "draft-js";
import Toolbar from "./Toolbar";
import "draft-js/dist/Draft.css";

export default function BlogEditor({
  editorState,
  setEditorState,
  saveContent,
}) {
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not handled";
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
