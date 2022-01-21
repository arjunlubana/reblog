import { RichUtils, Editor } from "draft-js";
import {
  FaList,
  FaListOl,
  FaCode,
  FaFileCode,
  FaQuoteLeft,
} from "react-icons/fa";
import { useEffect } from "react";

export default function Toolbar({ editorState, setEditorState, focusEditor }) {

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
    setEditorState(RichUtils.toggleBlockType(editorState, "atomic"));
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

  useEffect(() => {
    focusEditor()
    console.log("Change")
  }, [editorState]);
  
  return (
    <div id="toolbar" className="bg-light">
      <div className="btn-group w-100">
        <button onClick={_onH1Click} className="btn btn-outline-info fs-1">
          H1
        </button>
        <button onClick={_onH2Click} className="btn btn-outline-info fs-2">
          H2
        </button>
        <button onClick={_onH3Click} className="btn btn-outline-info fs-3">
          H3
        </button>
        <button onClick={_onH4Click} className="btn btn-outline-info fs-4">
          H4
        </button>
        <button onClick={_onH5Click} className="btn btn-outline-info fs-5">
          H5
        </button>
        <button onClick={_onH6Click} className="btn btn-outline-info fs-6">
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
          <FaQuoteLeft />
        </button>
        <button
          onClick={_onCodeClick}
          className="btn btn-outline-info font-monospace"
        >
          <FaCode />
        </button>
        <button
          onClick={_onCodeBlockClick}
          className="btn btn-outline-info font-monospace"
        >
          <FaFileCode />
        </button>
        <button onClick={_onUListClick} className="btn btn-outline-info">
          <FaList />
        </button>
        <button onClick={_onOListClick} className="btn btn-outline-info">
          <FaListOl />
        </button>
      </div>
    </div>
  );
}
