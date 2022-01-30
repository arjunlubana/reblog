import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { BlogEditor } from "../components";
import { createBlog, updateBlog } from "../lib/blog-crud";

export default function NewBlog({ blogs, setBlogs }) {
  // States
  const [blogBody, setBlogBody] = useState(EditorState.createEmpty());

  const [blogTitle, setBlogTitle] = useState(EditorState.createEmpty());

  const [blog, setBlog] = useState(null);

  // Update blog
  const update_blog = () => {
    const blog_data = {
      blogTitle: convertToRaw(blogTitle.getCurrentContent()),
      blogBody: convertToRaw(blogBody.getCurrentContent()),
    };
    updateBlog(blog.id, blog_data);
  };

  useEffect(() => {
    const blog_data = {
      blogTitle: convertToRaw(blogTitle.getCurrentContent()),
      blogBody: convertToRaw(blogBody.getCurrentContent()),
      likes: 0,
      comments: [],
    };
    createBlog(blog_data).then((data) => {
      setBlog(data);
      setBlogs([...blogs, data]);
    });
  }, []);

  return (
    <div className="card w-75 mx-auto my-4">
      <BlogEditor
        blog={{
          blogTitle: blogTitle,
          setBlogTitle: setBlogTitle,
          blogBody: blogBody,
          setBlogBody: setBlogBody,
        }}
        readOnly={false}
        saveBlog={update_blog}
      />
    </div>
  );
}
