import {BlogEditor} from "../components";

export default function EditBlog({blogEditorState, setBlogEditorState, updateBlog}) {
  return (
        <BlogEditor
          blogEditorState={blogEditorState}
          setBlogEditorState={setBlogEditorState}
          saveContent={updateBlog}
        />
  );
}
