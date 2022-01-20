import BlogEditor from "../components/BlogEditor";

export default function EditBlog({editorState, setEditorState, updateBlog}) {
  return (
    <div className="container w-75 mx-auto">
      <div className="card w-75 mx-auto p-4">
        <BlogEditor
          editorState={editorState}
          setEditorState={setEditorState}
          saveContent={updateBlog}
        />{" "}
      </div>
    </div>
  );
}
