import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { createBlog, deleteBlog, getBlog, updateBlog } from "utils/api";
import { Spinner } from "components";

export default function Blog({ render, blogs, setBlogs }) {
  const params = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Effects to run:
   * 
   * 1. - Check if there are ID params in the URL.
   *    - Get the blog associated with the ID.
   *    - Set the blog state with the response.
   * 
   * 2. - If there are no params i.e New Blog is being created.
   *    - Create a new blog on the server with empty editor states
   *      the body & title.
   *    - Set the blog state with the response.
   */
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

  /**
   * Converts DraftJS EditorState to RawDraftContentState.
   * The RawDraftContentState can be sent to the server for storage.
   * @param {EditorState} editorState 
   * @returns {RawDraftContentState} DraftJS RawDraftContentState
   */
  const getRawState = (editorState) => {
    editorState = editorState ? editorState : EditorState.createEmpty();
    return convertToRaw(editorState.getCurrentContent());
  };

  /**
   * Converts DraftJS RawDraftContentState to EditorState.
   * The EditorState is used by the client to render DraftJS Editor content.
   * @param {RawDraftContentState} rawState 
   * @returns {EditorState} DraftJS EditorState
   */
  const getEditorState = (rawState) => {
    return EditorState.createWithContent(convertFromRaw(rawState));
  };

  /**
   * 
   * Updates the blog instance on the server
   * in regards to the ID passed.
   * @param {number} id 
   */
  const update_blog = (id) => {
    updateBlog(id, {
      ...blog,
      title: getRawState(blog.title),
      body: getRawState(blog.body),
    });
  };

  /**
   * Updates the blog publish value to true
   * @param {number} id 
   */
  const publish_blog = (id) => {
    updateBlog(id, {
      ...blog, publish: true,
      title: getRawState(blog.title),
      body: getRawState(blog.body)
    });
  };

  /**
   * Delete a blog with the ID from the UI and Backend
   * @param {number} id 
   */
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
