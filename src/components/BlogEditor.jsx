import { Editor, RichUtils } from "draft-js";
import {Toolbar, CoverImage} from ".";
import "draft-js/dist/Draft.css";
import { useRef } from "react";

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

  const editorRef = useRef(null);

  const focusEditor = () => {
    editorRef.current.focus();
  };

  return (
    <div>
      <CoverImage />
      <Toolbar
        editorState={editorState}
        setEditorState={setEditorState}
        focusEditor={focusEditor}
      />
      <button className="btn btn-info m-1" onClick={saveContent}>
        Save
      </button>
      <div className="p-4">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder="Whats on your mind ..."
          ref={editorRef}
        />
      </div>
    </div>
  );
}
