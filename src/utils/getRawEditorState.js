import { EditorState, convertToRaw } from "draft-js";

/**
 * Converts DraftJS EditorState to RawDraftContentState.
 * The RawDraftContentState can be sent to the server for storage.
 * @param {EditorState} editorState
 * @returns {RawDraftContentState} DraftJS RawDraftContentState
 */
const getRawEditorState = (editorState) => {
  editorState = editorState ? editorState : EditorState.createEmpty();
  return convertToRaw(editorState.getCurrentContent());
};


export default getRawEditorState;