import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Blogs,
  Drafts,
  Blog,
  ViewBlog,
  EditBlog,
  Login,
  PageNotFound,
  Profile,
  SignUp,
} from "pages";

export default function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Blogs />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="blog">
          <Route
            path=":blogId"
            element={
              <Blog
                blogs={blogs}
                setBlogs={setBlogs}
                render={(blog, setBlog) => (
                  <ViewBlog blog={blog} setBlog={setBlog} />
                )}
              />
            }
          />
          <Route
            path=":blogId/edit"
            element={
              <Blog
                blogs={blogs}
                setBlogs={setBlogs}
                render={(
                  blog,
                  setBlog,
                  deleteBlog,
                  updateBlog,
                  publishBlog
                ) => (
                  <EditBlog
                    blog={blog}
                    setBlog={setBlog}
                    updateBlog={updateBlog}
                    deleteBlog={deleteBlog}
                    publishBlog={publishBlog}
                  />
                )}
              />
            }
          />
          <Route
            path="new"
            element={
              <Blog
                blogs={blogs}
                setBlogs={setBlogs}
                render={(
                  blog,
                  setBlog,
                  deleteBlog,
                  updateBlog,
                  publishBlog
                ) => (
                  <EditBlog
                    blog={blog}
                    setBlog={setBlog}
                    updateBlog={updateBlog}
                    deleteBlog={deleteBlog}
                    publishBlog={publishBlog}
                  />
                )}
              />
            }
          />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
