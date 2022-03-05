import { useEffect } from "react";
import { RichUtils } from "draft-js";
import {
  FaList,
  FaListOl,
  FaCode,
  FaFileCode,
  FaQuoteLeft,
} from "react-icons/fa";

export default function Toolbar({ blogBody, setBlogBody, focusEditor }) {
  useEffect(() => {
    focusEditor();
  }, [blogBody.getCurrentContent()]);
  const _onH2Click = () => {
    setBlogBody(RichUtils.toggleBlockType(blogBody, "header-two"));
  };
  const _onH3Click = () => {
    setBlogBody(RichUtils.toggleBlockType(blogBody, "header-three"));
  };
  const _onH4Click = () => {
    setBlogBody(RichUtils.toggleBlockType(blogBody, "header-four"));
  };
  const _onH5Click = () => {
    setBlogBody(RichUtils.toggleBlockType(blogBody, "header-five"));
  };

  const _onBlockQouteClick = () => {
    setBlogBody(RichUtils.toggleBlockType(blogBody, "atomic"));
  };

  const _onBoldClick = () => {
    setBlogBody(RichUtils.toggleInlineStyle(blogBody, "BOLD"));
  };

  const _onItalicClick = () => {
    setBlogBody(RichUtils.toggleInlineStyle(blogBody, "ITALIC"));
  };
  const _onUnderlineClick = () => {
    setBlogBody(RichUtils.toggleInlineStyle(blogBody, "UNDERLINE"));
  };
  const _onCodeClick = () => {
    setBlogBody(RichUtils.toggleInlineStyle(blogBody, "CODE"));
  };
  const _onCodeBlockClick = () => {
    setBlogBody(RichUtils.toggleCode(blogBody));
  };
  const _onUListClick = () => {
    setBlogBody(RichUtils.toggleBlockType(blogBody, "unordered-list-item"));
  };
  const _onOListClick = () => {
    setBlogBody(RichUtils.toggleBlockType(blogBody, "ordered-list-item"));
  };

  return (
    <div id="toolbar" className="bg-light">
      <div className="btn-group w-100">
        <button onClick={_onH2Click} className="btn btn-outline-info">
          H2
        </button>
        <button onClick={_onH3Click} className="btn btn-outline-info">
          H3
        </button>
        <button onClick={_onH4Click} className="btn btn-outline-info">
          H4
        </button>
        <button onClick={_onH5Click} className="btn btn-outline-info">
          H5
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
