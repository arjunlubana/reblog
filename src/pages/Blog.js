import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { createBlog, deleteBlog, getBlog, updateBlog } from "utils/BlogsCRUD";
import { Spinner } from "components";

export default function Blog({ render, blogs, setBlogs }) {
  const params = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Get the Blog data
  useEffect(() => {
    if (params.blogId) {
      getBlog(params.blogId).then((data) => {
        setBlog({
          ...data,
          title: getEditorState(data.title),
          body: getEditorState(data.body),
        });
        setIsLoading(false);
      });
    } else {
      createBlog({ title: getRawState(), body: getRawState() }).then((data) => {
        setBlog({
          ...data,
          title: getEditorState(data.title),
          body: getEditorState(data.body),
        });
        setIsLoading(false);
      });
    }
  }, []);

  const getRawState = (data) => {
    data = data ? data : EditorState.createEmpty();
    return convertToRaw(data.getCurrentContent());
  };

  const getEditorState = (data) => {
    return EditorState.createWithContent(convertFromRaw(data));
  };
  // Update blog
  const update_blog = (id) => {
    updateBlog(id, {
      ...blog,
      title: getRawState(blog.title),
      body: getRawState(blog.body),
    });
  };

  const publish_blog = (id) => {
    updateBlog(id, { ...blog, publish: true });
  };

  // Delete a blog from the UI and Backend
  const delete_blog = (id) => {
    deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
    navigate("/", { replace: true });
  };

  return isLoading ? (
    <div className="vh-100">
      <Spinner />
    </div>
  ) : (
    render(blog, setBlog, delete_blog, update_blog, publish_blog)
  );
}
