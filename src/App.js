// eslint-disable-next-line
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
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
import { LoggedContext } from "contexts/LoginContext";

export default function App() {
  const [logged, setLogged] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LoggedContext.Provider value={true}>
          <Routes>
            <Route
              path="/"
              element={<Home logged={logged} setLogged={setLogged} />}
            >
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
                        blogUpdate,
                        setBlogUpdate,
                        deleteBlog,
                        updateBlog,
                        publishBlog
                      ) => (
                        <EditBlog
                          blog={blog}
                          setBlog={setBlog}
                          blogUpdate={blogUpdate}
                          setBlogUpdate={setBlogUpdate}
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
                        blogUpdate,
                        setBlogUpdate,
                        deleteBlog,
                        updateBlog,
                        publishBlog
                      ) => (
                        <EditBlog
                          blog={blog}
                          setBlog={setBlog}
                          blogUpdate={blogUpdate}
                          setBlogUpdate={setBlogUpdate}
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
              <Route path="login" element={<Login setLogged={setLogged} />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </LoggedContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
