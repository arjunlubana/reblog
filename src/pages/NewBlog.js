import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { BlogEditor } from "../components";
import { createBlog, updateBlog } from "../lib/blog-crud";

export default function NewBlog({ blogs, setBlogs }) {
  // Initialize blog states
  const [coverImage, setCoverImage] = useState(null);
  const [blogTitle, setBlogTitle] = useState(EditorState.createEmpty());
  const [blogBody, setBlogBody] = useState(EditorState.createEmpty());
  const [newBlog, setNewBlog] = useState(null);

  const getBlogSnapshot = () => {
    let blog_data = new FormData();
    blog_data.append("coverImage", coverImage);
    blog_data.append("blogTitle", JSON.stringify(convertToRaw(blogTitle.getCurrentContent())));
    blog_data.append("blogBody", JSON.stringify(convertToRaw(blogBody.getCurrentContent())));
    blog_data.append("likes", 0);
    blog_data.append("comments", []);
    return blog_data;
  };
  // Update blog
  const update_blog = () => {
    const blog_data = getBlogSnapshot();
    // updateBlog(newBlog.id, blog_data);
    createBlog(blog_data).then((data) => {
      setNewBlog(data);
      setBlogs([...blogs, data]);
    });
  };

  useEffect(() => {
    const blog_data = getBlogSnapshot();
    // createBlog(blog_data).then((data) => {
    //   setNewBlog(data);
    //   setBlogs([...blogs, data]);
    // });
  }, []);

  return (
    <div className="card w-75 mx-auto my-4">
      <BlogEditor
        blog={{
          coverImage: coverImage,
          setCoverImage: setCoverImage,
          blogTitle: blogTitle,
          setBlogTitle: setBlogTitle,
          blogBody: blogBody,
          setBlogBody: setBlogBody,
        }}
        readOnly={false}
        saveBlog={update_blog}
      />
    </div>
  );
}
