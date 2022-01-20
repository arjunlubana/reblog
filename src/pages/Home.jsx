import { Route, Routes } from "react-router-dom";
import { LoggedContext } from "../lib/login-context";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Blog from "./Blog";
import NewBlog from "./NewBlog";
import ViewBlog from "./ViewBlog";
import EditBlog from "./EditBlog";
import Blogs from "./Blogs";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import SignUp from "./SignUp";

export default function Home() {
  // State to monitor user login status
  const [logged, setLogged] = useState(true);

  if (logged) {
    return (
      <LoggedContext.Provider value={logged}>
        <Navbar setLogged={setLogged} />
        <Routes>
          <Route path="/">
            <Route index element={<Blogs />} />
            <Route path="blog">
              <Route
                path=":blogId"
                element={
                  <Blog
                    render={(blogId, editorState, setEditorState, deleteBlog) => (
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
                    render={(blogId, editorState, setEditorState, deleteBlog, updateBlog) => (
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
          <Route path="newblog" element={<NewBlog />} />
          <Route path="login" element={<Login setLogged={setLogged} />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LoggedContext.Provider>
    );
  } else {
    return (
      <LoggedContext.Provider value={logged}>
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
      </LoggedContext.Provider>
    );
  }
}
