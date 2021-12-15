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

export default function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Blogs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="blog" element={<Blog />}>
          <Route path="edit" element={<EditBlog />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
