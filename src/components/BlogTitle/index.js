import { Editor, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

export default function BlogTitle({ blog, setBlog, readOnly }) {
  const handleChange = (editorState) => {
    setBlog({ ...blog, title: editorState });
  };

  // Only toggle Title header style if the block is unstyled
  if (blog.title.getCurrentContent().getFirstBlock().getType() === "unstyled") {
    setBlog({
      ...blog,
      title: RichUtils.toggleBlockType(blog.title, "header-one"),
    });
  }

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
