import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { getEditorState, getRawEditorState } from "utils";
import reblogApi from "api/reblogApi";

export default function useBlog(data) {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const { getAccessTokenSilently } = useAuth0();

  /**
   *
   * Updates the blog instance on the server
   * in regards to the ID passed.
   * @param {number} id
   */
  const update_blog = async (id) => {
    const accessToken = await getAccessTokenSilently();
    reblogApi({
      url: `/blogs/${id}`,
      method: "patch",
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        ...blog,
        title: getRawEditorState(blog.title),
        body: getRawEditorState(blog.body),
      },
    });
  };

  /**
   * Updates the blog publish value to true
   * @param {number} id
   */
  const publish_blog = async (id) => {
    const accessToken = await getAccessTokenSilently();
    reblogApi({
      url: `/blogs/${id}`,
      method: "patch",
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        ...blog,
        publish: true,
        title: getRawEditorState(blog.title),
        body: getRawEditorState(blog.body),
      },
    });
  };

  /**
   * Delete a blog with the ID from the UI and Backend
   * @param {number} id
   */
  const delete_blog = async(id) => {
const accessToken = await getAccessTokenSilently();
    reblogApi({
      url: `/blogs/${id}`,
      method: "delete",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (data) {
      setBlog({
        ...data,
        title: getEditorState(data.title),
        body: getEditorState(data.body),
      });
    }
  }, [data]);

  return { blog, setBlog, delete_blog, update_blog, publish_blog };
}
