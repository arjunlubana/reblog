import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { deleteBlogData, getBlogData, updateBlogData } from "../lib/blog-crud";

export default function Blog({ render }) {
  const params = useParams();
  const [editorState, setEditorState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blog = await getBlogData(params.blogId);
      const blogData = await convertFromRaw(blog.data);
      setEditorState(() => EditorState.createWithContent(blogData));
      setIsLoading(false);
    })();
  }, []);

  const updateBlog = () => {
    updateBlogData(
      params.blogId,
      convertToRaw(editorState.getCurrentContent())
    );
  };

  const deleteBlog = () => {
    deleteBlogData(params.blogId);
  };

  return isLoading ? (
    <div>Loading</div>
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
