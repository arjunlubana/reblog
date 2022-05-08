import { EditorState, convertFromRaw } from "draft-js";

/**
 * Converts DraftJS RawDraftContentState to EditorState.
 * The EditorState is used by the client to render DraftJS Editor content.
 * @param {RawDraftContentState} rawState
 * @returns {EditorState} DraftJS EditorState
 */
const getEditorState = (rawState) => {
  return EditorState.createWithContent(convertFromRaw(rawState));
};

export default getEditorState;