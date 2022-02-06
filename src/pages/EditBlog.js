import {BlogEditor} from "../components";

export default function EditBlog({blog, updateBlog}) {
  return (
        <BlogEditor
          blog={blog}
          readOnly={false}
          saveBlog={updateBlog}
        />
  );
}
