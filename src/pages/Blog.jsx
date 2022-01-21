import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { deleteBlogData, getBlogData, updateBlogData } from "../lib/blog-crud";
import Spinner from "../components/Spinner";

export default function Blog({ render, blogs, setBlogs }) {
  const params = useParams();
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get the Blog data
  useEffect(() => {
    (async () => {
      const blog = await getBlogData(params.blogId);
      const blogData = await convertFromRaw(blog.data);
      setEditorState(() => EditorState.createWithContent(blogData));
      setIsLoading(false);
    })();
  }, [params.blogId]);


  // Update a blog in the UI and Backend
  const updateBlog = () => {
    updateBlogData(
      params.blogId,
      convertToRaw(editorState.getCurrentContent())
    );

  };


  // Delete a blog from the UI and Backend
  const deleteBlog = () => {
    deleteBlogData(params.blogId);
    const newBlogs = blogs.filter((blog) => blog.id !== parseInt(params.blogId))
    setBlogs(newBlogs)
    navigate("/", { replace: true });
  };

  return isLoading ? (
    <div className="vh-100">
      <Spinner />
    </div> 
    
  ) : (
    render({
      blogId: params.blogId,
      editorState: editorState,
      setEditorState: setEditorState,
      deleteBlog: deleteBlog,
      updateBlog: updateBlog,
    })
  );
}
