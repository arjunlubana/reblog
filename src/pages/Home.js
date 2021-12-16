import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewBlog from "./NewBlog";
import Blog from "./Blog";
import Blogs from "./Blogs";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import SignUp from "./SignUp";
import EditBlog from "./EditBlog";
import { useState } from "react";


export default function Home() {

  const [logged, setLogged] = useState(false);

  return (
    <>
      <Navbar logged={logged}/>
      <Routes>
        <Route path="/">
          <Route index element={<Blogs />} />
          <Route path="blog">
            <Route path=":blogId" element={<Blog />} />
            <Route path=":blogId/edit" element={<EditBlog />} />
          </Route>
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
