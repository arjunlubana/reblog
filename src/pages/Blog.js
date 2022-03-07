import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { deleteBlog, getBlog, updateBlog } from "utils/BlogsCRUD";
import { Spinner } from "components";

export default function Blog({ render, blogs, setBlogs }) {
  const params = useParams();
  const navigate = useNavigate();
  const [blogUpdate, setBlogUpdate] = useState(new FormData());
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Get the Blog data
  useEffect(() => {
    getBlog(params.blogId).then((data) => {
      setBlog({
        ...data,
        title: EditorState.createWithContent(convertFromRaw(data.title)),
        body: EditorState.createWithContent(convertFromRaw(data.body)),
      });
      setIsLoading(false);
    });
  }, [params.blogId]);
  // Update blog
  const update_blog = () => {
    updateBlog(params.blogId, blogUpdate);
    for (let key of blogUpdate.keys()) {
      blogUpdate.delete(key);
    }
  };

  const publish_blog = () => {
    blogUpdate.has("publish")
      ? blogUpdate.set("publish", true)
      : blogUpdate.append("publish", true);
    setBlogUpdate(blogUpdate);
    updateBlog(params.blogId, blogUpdate);
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
    render(
      blog,
      setBlog,
      blogUpdate,
      setBlogUpdate,
      delete_blog,
      update_blog,
      publish_blog,
    )
  );
}
