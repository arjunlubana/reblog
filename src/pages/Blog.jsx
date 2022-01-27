import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { deleteBlog, getBlog, updateBlog } from "../lib/blog-crud";
import { Spinner } from "../components";

export default function Blog({ render, blogs, setBlogs }) {
  const params = useParams();
  const navigate = useNavigate();
  const [blogEditorState, setBlogEditorState] = useState(null);
  const [titleEditorState, setTitleEditorState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get the Blog data
  useEffect(() => {
    (async () => {
      const blog = await getBlog(params.blogId);
      const blogData = await convertFromRaw(blog.data);
      setBlogEditorState(() => EditorState.createWithContent(blogData));
      setIsLoading(false);
    })();
  }, [params.blogId]);

  // Update a blog in the UI and Backend
  const update_blog = () => {
    updateBlog(
      params.blogId,
      convertToRaw(blogEditorState.getCurrentContent())
    );
  };

  // Delete a blog from the UI and Backend
  const delete_blog = () => {
    deleteBlog(params.blogId);
    const newBlogs = blogs.filter(
      (blog) => blog.id !== parseInt(params.blogId)
    );
    setBlogs(newBlogs);
    navigate("/", { replace: true });
  };

  return isLoading ? (
    <div className="vh-100">
      <Spinner />
    </div>
  ) : (
    render({
      titleEditorState,
      titleEditorState,
      setTitleEditorState: setTitleEditorState,
      blogEditorState: blogEditorState,
      setBlogEditorState: setBlogEditorState,
      deleteBlog: delete_blog,
      updateBlog: update_blog,
    })
  );
}
