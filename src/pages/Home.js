import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Blogs from "./Blogs";
import Blog from "./Blog";
import AddBlog from "./AddBlog";
import Profile from "./Profile";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import SignUp from "./SignUp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Blogs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="addblog" element={<AddBlog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
