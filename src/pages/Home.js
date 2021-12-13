import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Blogs from "./Blogs";
import Blog from "./Blog";
import AddBlog from "./AddBlog";
import Profile from "./Profile";
import PageNotFound from "./PageNotFound";

export default function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Blogs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="addblog" element={<AddBlog />} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
