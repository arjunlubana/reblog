import { Route, Routes } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import {
  Home,
  Blogs,
  Drafts,
  ViewBlog,
  EditBlog,
  Login,
  Page404,
  Profile,
  SignUp,
} from "pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Blogs />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="blog">
          <Route path=":blogId" element={<ViewBlog />} />
          <Route
            path=":blogId/edit"
            element={withAuthenticationRequired(<EditBlog />, {
              onRedirecting: () => (
                <div>Redirecting you to the login page...</div>
              ),
            })}
          />
          <Route
            path="new"
            element={withAuthenticationRequired(<EditBlog />, {
              onRedirecting: () => (
                <div>Redirecting you to the login page...</div>
              ),
            })}
          />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
