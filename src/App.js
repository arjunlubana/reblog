import { Route, Routes } from "react-router-dom";
import {
  Home,
  Blogs,
  Drafts,
  ViewBlog,
  EditBlog,
  NewBlog,
  Page404,
  Profile,
} from "pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Blogs />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="blog">
          <Route path=":blogId" element={<ViewBlog />} />
          <Route path=":blogId/edit" element={<EditBlog />} />
          <Route path="new" element={<NewBlog />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
