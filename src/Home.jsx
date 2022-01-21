import { Route, Routes } from "react-router-dom";
import { getBlogsData } from "./lib/blog-crud";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
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
import Spinner from "./components/Spinner";

export default function Home() {
  // State to monitor user login status
  const [blogs, setBlogs] = useState([]);
  const [logged, setLogged] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogsData = await getBlogsData();
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
          <Route path="blog">
            <Route
              path=":blogId"
              element={
                <Blog
                  blogs={blogs}
                  setBlogs={setBlogs}
                  render={({
                    blogId,
                    editorState,
                    setEditorState,
                    deleteBlog,
                  }) => (
                    <ViewBlog
                      blogId={blogId}
                      editorState={editorState}
                      setEditorState={setEditorState}
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
                  render={({ editorState, setEditorState, updateBlog }) => (
                    <EditBlog
                      editorState={editorState}
                      setEditorState={setEditorState}
                      updateBlog={updateBlog}
                    />
                  )}
                />
              }
            />
          </Route>
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route
          path="newblog"
          element={<NewBlog blogs={blogs} setBlogs={setBlogs} />}
        />
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
