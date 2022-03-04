import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { BlogEditor } from "../components";
import { createBlog, updateBlog } from "../lib/blog-crud";

export default function NewBlog({ blogs, setBlogs }) {
  // Initialize blog states
  const [blogUpdate, setBlogUpdate] = useState(new FormData());
  const [coverImage, setCoverImage] = useState(null);
  const [blogTitle, setBlogTitle] = useState(EditorState.createEmpty());
  const [blogBody, setBlogBody] = useState(EditorState.createEmpty());
  const [newBlog, setNewBlog] = useState(null);
  // Update blog
  const update_blog = () => {
    updateBlog(newBlog.id, blogUpdate).then((data) => {
      setBlogs(
        blogs.map((blog) => (blog.id === newBlog.id ? (blog = data) : blog))
      );
    });
  };

  const create_new_blog = () => {
    let blog_data = new FormData();
    blog_data.append("cover", coverImage);
    blog_data.append(
      "title",
      JSON.stringify(convertToRaw(blogTitle.getCurrentContent()))
    );
    blog_data.append(
      "body",
      JSON.stringify(convertToRaw(blogBody.getCurrentContent()))
    );
    blog_data.append("likes", 0);
    blog_data.append("comments", []);
    createBlog(blog_data).then((data) => {
      setNewBlog(data);
      setBlogs([...blogs, data]);
    });
  };
  useEffect(() => {
    create_new_blog()
  }, []);

  return (
    <BlogEditor
      blog={{
        coverImage: coverImage,
        setCoverImage: setCoverImage,
        blogTitle: blogTitle,
        setBlogTitle: setBlogTitle,
        blogBody: blogBody,
        setBlogBody: setBlogBody,
        blogUpdate: blogUpdate,
        setBlogUpdate: setBlogUpdate,
      }}
      readOnly={false}
      updateBlog={update_blog}
    />
  );
}
