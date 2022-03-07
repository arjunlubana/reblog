import { useEffect } from "react";
import { Editor, RichUtils, convertToRaw } from "draft-js";
import "./styles.css";

export default function BlogTitle({
  blog,
  setBlog,
  readOnly
}) {
  const handleChange = (editorState) => {
    setBlog({ ...blog, title: editorState });
  };

  useEffect(() => {
    // Only toggle Title header style if the block is unxtyled
    if (
      blog.title.getCurrentContent().getFirstBlock().getType() === "unstyled"
    ) {
      setBlog({
        ...blog,
        title: RichUtils.toggleBlockType(blog.title, "header-one")
      });
    }
  }, []);
  return (
    <Editor
      editorState={blog.title}
      onChange={handleChange}
      placeholder={<h1>Blog Title</h1>}
      handleReturn={() => "handled"}
      textAlignment="center"
      readOnly={readOnly}
    />
  );
}
