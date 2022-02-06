import { Editor, RichUtils } from "draft-js";
import { Toolbar, CoverImage, BlogTitle } from "..";
import "draft-js/dist/Draft.css";
import { useRef } from "react";

export default function BlogEditor({ blog, readOnly, updateBlog }) {
  const {
    coverImage,
    setCoverImage,
    blogTitle,
    setBlogTitle,
    blogBody,
    setBlogBody,
  } = blog;

  const handleKeyCommand = (command, blogBody) => {
    const newState = RichUtils.handleKeyCommand(blogBody, command);
    if (newState) {
      setBlogBody(newState);
      return "handled";
    }
    return "not handled";
  };

  const editorRef = useRef(null);

  const focusEditor = () => {
    editorRef.current.focus();
  };

  return (
    <div className="container-fluid w-75 mt-5">
      <CoverImage coverImage={coverImage} setCoverImage={setCoverImage} />
      <BlogTitle
        blogTitle={blogTitle}
        setBlogTitle={setBlogTitle}
        readOnly={readOnly}
      />
      {readOnly ? (
        ""
      ) : (
        <>
          <Toolbar
            blogBody={blogBody}
            setBlogBody={setBlogBody}
            focusEditor={focusEditor}
          />
          <button className="btn btn-info m-1" onClick={updateBlog}>
            Save
          </button>
        </>
      )}

      <div className="p-4">
        <Editor
          editorState={blogBody}
          onChange={setBlogBody}
          handleKeyCommand={handleKeyCommand}
          placeholder="Whats on your mind ..."
          ref={editorRef}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}
