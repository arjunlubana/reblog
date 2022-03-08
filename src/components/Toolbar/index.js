import { useEffect } from "react";
import { RichUtils } from "draft-js";
import {
  FaList,
  FaListOl,
  FaCode,
  FaFileCode,
  FaQuoteLeft,
} from "react-icons/fa";

export default function Toolbar({ blog, setBlog, focusEditor, readOnly }) {
  useEffect(() => {
    focusEditor();
  }, [blog.body.getCurrentContent()]);

  const _onH2Click = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, "header-two"),
    });
  };
  const _onH3Click = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, "header-three"),
    });
  };
  const _onH4Click = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, "header-four"),
    });
  };
  const _onH5Click = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, "header-five"),
    });
  };

  const _onBlockQouteClick = () => {
    setBlog({ ...blog, body: RichUtils.toggleBlockType(blog.body, "atomic") });
  };

  const _onBoldClick = () => {
    setBlog({ ...blog, body: RichUtils.toggleInlineStyle(blog.body, "BOLD") });
  };

  const _onItalicClick = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleInlineStyle(blog.body, "ITALIC"),
    });
  };
  const _onUnderlineClick = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleInlineStyle(blog.body, "UNDERLINE"),
    });
  };
  const _onCodeClick = () => {
    setBlog({ ...blog, body: RichUtils.toggleInlineStyle(blog.body, "CODE") });
  };
  const _onCodeBlockClick = () => {
    setBlog({ ...blog, body: RichUtils.toggleCode(blog.body) });
  };
  const _onUListClick = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, "unordered-list-item"),
    });
  };
  const _onOListClick = () => {
    setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, "ordered-list-item"),
    });
  };

  return readOnly ? (
    ""
  ) : (
    <div id="toolbar" className="mx-auto btn-group rounded">
      <button onClick={_onH2Click} className="btn">
        H2
      </button>
      <button onClick={_onH3Click} className="btn">
        H3
      </button>
      <button onClick={_onH4Click} className="btn">
        H4
      </button>
      <button onClick={_onH5Click} className="btn">
        H5
      </button>
      <button onClick={_onBoldClick} className="btn fw-bold">
        B
      </button>
      <button onClick={_onItalicClick} className="btn fst-italic">
        I
      </button>
      <button
        onClick={_onUnderlineClick}
        className="btn text-decoration-underline"
      >
        U
      </button>
      <button onClick={_onBlockQouteClick} className="btn">
        <FaQuoteLeft />
      </button>
      <button onClick={_onCodeClick} className="btn font-monospace">
        <FaCode />
      </button>
      <button onClick={_onCodeBlockClick} className="btn font-monospace">
        <FaFileCode />
      </button>
      <button onClick={_onUListClick} className="btn">
        <FaList />
      </button>
      <button onClick={_onOListClick} className="btn">
        <FaListOl />
      </button>
    </div>
  );
}
