import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { deleteBlog, getBlog, updateBlog } from "../lib/blog-crud";
import { Spinner } from "../components";

export default function Blog({ render, blogs, setBlogs }) {
  const params = useParams();
  const navigate = useNavigate();
  const [blogUpdate, setBlogUpdate] = useState(new FormData());
  const [coverImage, setCoverImage] = useState(null);
  const [blogTitle, setBlogTitle] = useState(null);
  const [blogBody, setBlogBody] = useState(null);
  const [publish, setPublish] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get the Blog data
  useEffect(() => {
    getBlog(params.blogId).then((blog) => {
      setCoverImage(blog.cover);
      setBlogTitle(EditorState.createWithContent(convertFromRaw(blog.title)));
      setBlogBody(EditorState.createWithContent(convertFromRaw(blog.body)));
      setPublish(blog.publish);
      setIsLoading(false);
    });
  }, [params.blogId]);
  // Update blog
  const update_blog = () => {
    updateBlog(params.blogId, blogUpdate);
    for (let key of blogUpdate.keys()){
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
    render({
      blog: {
        publish: publish,
        coverImage: coverImage,
        setCoverImage: setCoverImage,
        blogTitle: blogTitle,
        setBlogTitle: setBlogTitle,
        blogBody: blogBody,
        setBlogBody: setBlogBody,
        blogUpdate: blogUpdate,
        setBlogUpdate: setBlogUpdate,
      },
      deleteBlog: delete_blog,
      updateBlog: update_blog,
      publishBlog: publish_blog,
    })
  );
}
