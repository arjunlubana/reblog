import { RichUtils } from "draft-js";

export default function Toolbar({editorState, setEditorState}) {
  const _onH1Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
  };
  const _onH2Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-two"));
  };
  const _onH3Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-three"));
  };
  const _onH4Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-four"));
  };
  const _onH5Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-five"));
  };
  const _onH6Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-six"));
  };

  const _onBlockQouteClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "blockqoute"));
  };

  const _onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const _onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };
  const _onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };
  const _onCodeClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "CODE"));
  };
  const _onCodeBlockClick = () => {
    setEditorState(RichUtils.toggleCode(editorState));
  };
  const _onUListClick = () => {
    setEditorState(
      RichUtils.toggleBlockType(editorState, "unordered-list-item")
    );
  };
  const _onOListClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  };
  return (
    <div id="toolbar">
      <div className="btn-group w-100 mx-auto">
        <button onClick={_onH1Click} className="btn btn-outline-info fw-bold">
          H1
        </button>
        <button onClick={_onH2Click} className="btn btn-outline-info fw-bold">
          H2
        </button>
        <button onClick={_onH3Click} className="btn btn-outline-info fw-bold">
          H3
        </button>
        <button onClick={_onH4Click} className="btn btn-outline-info fw-bold">
          H4
        </button>
        <button onClick={_onH5Click} className="btn btn-outline-info fw-bold">
          H5
        </button>
        <button onClick={_onH6Click} className="btn btn-outline-info fw-bold">
          H6
        </button>
      </div>
      <div className="btn-group w-100">
        <button onClick={_onBoldClick} className="btn btn-outline-info fw-bold">
          B
        </button>
        <button
          onClick={_onItalicClick}
          className="btn btn-outline-info fst-italic"
        >
          I
        </button>
        <button
          onClick={_onUnderlineClick}
          className="btn btn-outline-info text-decoration-underline"
        >
          U
        </button>
        <button onClick={_onBlockQouteClick} className="btn btn-outline-info">
          Block Qoute
        </button>
        <button
          onClick={_onCodeClick}
          className="btn btn-outline-info font-monospace"
        >
          Code
        </button>
        <button
          onClick={_onCodeBlockClick}
          className="btn btn-outline-info font-monospace"
        >
          Code Block
        </button>
        <button onClick={_onUListClick} className="btn btn-outline-info">
          U List
        </button>
        <button onClick={_onOListClick} className="btn btn-outline-info">
          O List
        </button>
      </div>
    </div>
  );
}
