import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import BlogEditor from "../components/BlogEditor";
import { addBlogData, updateBlogData } from "../lib/blog-crud";

export default function NewBlog() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
   const [blog, setBlog] = useState(undefined)

  const updateBlog = () => {
    updateBlogData(blog.id, convertToRaw(editorState.getCurrentContent()));
  };

  useEffect(() => {
      addBlogData(convertToRaw(editorState.getCurrentContent())).then((result) => {
        setBlog(result);
      })
  }, []);

  return (
    <div className="card w-75 mx-auto my-4">
      <BlogEditor
        editorState={editorState}
        setEditorState={setEditorState}
        saveContent={updateBlog}
      />
    </div>
  );
}
