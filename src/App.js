// eslint-disable-next-line
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Home,
  Blogs,
  Blog,
  ViewBlog,
  EditBlog,
  NewBlog,
  Login,
  PageNotFound,
  Profile,
  SignUp,
} from "./pages";
import { LoggedContext } from "./lib/login-context";
import { getBlogs } from "./lib/blog-crud";

export default function App() {
  const [logged, setLogged] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <BrowserRouter>
      <LoggedContext.Provider value={true}>
        <Routes>
          <Route
            path="/"
            element={<Home logged={logged} setLogged={setLogged} />}
          >
            <Route
              index
              element={<Blogs blogs={blogs} isLoading={isLoading} />}
            />
            <Route
              path="blog/:blogId"
              element={
                <Blog
                  blogs={blogs}
                  setBlogs={setBlogs}
                  render={({ blog, deleteBlog }) => (
                    <ViewBlog blog={blog} deleteBlog={deleteBlog} />
                  )}
                />
              }
            />
            <Route
              path="blog/:blogId/edit"
              element={
                <Blog
                  blogs={blogs}
                  setBlogs={setBlogs}
                  render={({ blog, updateBlog }) => (
                    <EditBlog blog={blog} updateBlog={updateBlog} />
                  )}
                />
              }
            />
            <Route
              path="blog/new"
              element={<NewBlog blogs={blogs} setBlogs={setBlogs} />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login setLogged={setLogged} />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </LoggedContext.Provider>
    </BrowserRouter>
  );
}
