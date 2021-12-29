import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Editor, EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { deleteBlogData, getBlogData, updateBlogData } from "../functions/blog-crud";
import BlogEditor from "../components/BlogEditor";

export default function Blog({ edit }) {
  const params = useParams();
  const blog = getBlogData(params.blogId);
  const contentState = convertFromRaw(blog.data);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(contentState)
  );

  const updateBlog = () => {
    updateBlogData(params.blogId, convertToRaw(editorState.getCurrentContent()));
  };

  const deleteBlog = () => {
    deleteBlogData(params.blogId)
  }

  if (!edit) {
    return (
      <div className="container w-75 mx-auto">
        <Link className="btn btn-info" to={`/blog/${params.blogId}/edit`}>Edit</Link>
        <Link className="btn btn-info" onClick={deleteBlog} to="/">Delete</Link>
        <div className="w-75 mx-auto p-4">
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            readOnly={true}
          />
        </div>
        <div>
          <h4>Comments</h4>
          <h4>Related Content</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container w-75 mx-auto">
        <div className="card w-75 mx-auto p-4">
          <BlogEditor
            editorState={editorState}
            setEditorState={setEditorState}
            saveContent={updateBlog}
          />
        </div>
      </div>
    );
  }
}

Blog.defaultProps = {
  edit: false,
};
