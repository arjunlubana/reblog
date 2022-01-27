import { Route, Routes } from "react-router-dom";
import { getBlogs } from "./lib/blog-crud";
import { useState, useEffect } from "react";
import { Navbar, Spinner } from "./components";
import {
  Blog,
  NewBlog,
  ViewBlog,
  EditBlog,
  Blogs,
  Login,
  PageNotFound,
  Profile,
  SignUp,
} from "./pages";

export default function Home() {
  // State to monitor user login status
  const [blogs, setBlogs] = useState(null);
  const [logged, setLogged] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <div className="vh-100">
      <Spinner />
    </div>
  ) : logged ? (
    <>
      <Navbar setLogged={setLogged} />
      <Routes>
        <Route path="/">
          <Route index element={<Blogs blogs={blogs} />} />
          <Route
            path=":blogId"
            element={
              <Blog
                blogs={blogs}
                setBlogs={setBlogs}
                render={({
                  blogEditorState,
                  setBlogEditorState,
                  deleteBlog,
                }) => (
                  <ViewBlog
                    blogEditorState={blogEditorState}
                    setBlogEditorState={setBlogEditorState}
                    deleteBlog={deleteBlog}
                  />
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
                render={({
                  blogEditorState,
                  setBlogEditorState,
                  updateBlog,
                }) => (
                  <EditBlog
                    blogEditorState={blogEditorState}
                    setBlogEditorState={setBlogEditorState}
                    updateBlog={updateBlog}
                  />
                )}
              />
            }
          />
          <Route
            path="new"
            element={<NewBlog blogs={blogs} setBlogs={setBlogs} />}
          />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login setLogged={setLogged} />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  ) : (
    <>
      <Navbar setLogged={setLogged} />
      <Routes>
        <Route path="/">
          <Route index element={<Blogs />} />
          <Route path="blog">
            <Route path=":blogId" element={<Blog />} />
          </Route>
        </Route>
        <Route path="login" element={<Login setLogged={setLogged} />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
