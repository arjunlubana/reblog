import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { deleteBlog, getBlog, updateBlog } from "../lib/blog-crud";
import { Spinner } from "../components";

export default function Blog({ render, blogs, setBlogs }) {
  const params = useParams();
  const navigate = useNavigate();
  const [blogBody, setBlogBody] = useState(null);
  const [blogTitle, setBlogTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get the Blog data
  useEffect(() => {
    getBlog(params.blogId).then((blog) => {
      // Convert Blog body and title raw state and set the appropriate states
      setBlogTitle(EditorState.createWithContent(convertFromRaw(blog.title)));
      setBlogBody(EditorState.createWithContent(convertFromRaw(blog.body)));
      setIsLoading(false);
    });
  }, [params.blogId]);

  // Update a blog in the UI and Backend
  const update_blog = () => {
    updateBlog(params.blogId, convertToRaw(blogBody.getCurrentContent()));
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
  // The render prop renders either an edit blog or a view blog.
  // Title and Blog states, delete and update blog functions are passed to the rendered components
  return isLoading ? (
    <div className="vh-100">
      <Spinner />
    </div>
  ) : (
    render({
      blog: {
        blogTitle: blogTitle,
        setBlogTitle: setBlogTitle,
        blogBody: blogBody,
        setBlogBody: setBlogBody,
      },
      deleteBlog: delete_blog,
      updateBlog: update_blog,
    })
  );
}
