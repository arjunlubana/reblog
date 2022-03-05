import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";
import { createBlog, updateBlog, deleteBlog } from "utils/BlogsCRUD";
import { EditBlog } from "pages";

export default function NewBlog({ blogs, setBlogs }) {
  // Initialize blog states
  const [blogUpdate, setBlogUpdate] = useState(new FormData());
  const [coverImage, setCoverImage] = useState(null);
  const [blogTitle, setBlogTitle] = useState(EditorState.createEmpty());
  const [blogBody, setBlogBody] = useState(EditorState.createEmpty());
  const [newBlog, setNewBlog] = useState(null);
  const navigate = useNavigate();
  // Update blog
  const update_blog = () => {
    updateBlog(newBlog.id, blogUpdate).then((data) => {
      setBlogs(
        blogs.map((blog) => (blog.id === newBlog.id ? (blog = data) : blog))
      );
    });
  };

  const publish_blog = () => {
    blogUpdate.has("publish")
      ? blogUpdate.set("publish", true)
      : blogUpdate.append("publish", true);
    setBlogUpdate(blogUpdate);
    updateBlog(newBlog.id, blogUpdate);
  };

  // Delete a blog from the UI and Backend
  const delete_blog = () => {
    deleteBlog(newBlog.id);
    setBlogs(blogs.filter((blog) => blog.id !== parseInt(newBlog.id)));
    navigate("/", { replace: true });
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
    create_new_blog();
  }, []);

  return (
    <EditBlog
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
      updateBlog={update_blog}
      publishBlog={publish_blog}
      deleteBlog={delete_blog}
    />
  );
}
