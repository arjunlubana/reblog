import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { BlogEditor } from "../components";
import { createBlog, updateBlog } from "../lib/blog-crud";

export default function NewBlog({ blogs, setBlogs }) {
  // States
  const [blogEditorState, setBlogEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [titleEditorState, setTitleEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [blog, setBlog] = useState(null);

  // Update blog
  const update_blog = () => {
    const blog_data = {
      blogTitle: convertToRaw(titleEditorState.getCurrentContent()),
      blogBody: convertToRaw(blogEditorState.getCurrentContent()),
    };
    updateBlog(blog.id, blog_data);
  };

  useEffect(() => {
    const blog_data = {
      blogTitle: convertToRaw(titleEditorState.getCurrentContent()),
      blogBody: convertToRaw(blogEditorState.getCurrentContent()),
      likes: 0,
      comments: [],
    };
    createBlog(blog_data).then((data) => {
      setBlog(data)
      setBlogs([...blogs, data])
    })
  }, []);

  return (
    <div className="card w-75 mx-auto my-4">
      <BlogEditor
        titleEditorState={titleEditorState}
        setTitleEditorState={setTitleEditorState}
        blogEditorState={blogEditorState}
        setBlogEditorState={setBlogEditorState}
        saveContent={() => update_blog()}
        readOnly={false}
      />
    </div>
  );
}
