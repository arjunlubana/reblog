import { CoverImage, BlogTitle, BlogBody } from "components";
import "draft-js/dist/Draft.css";

export default function BlogEditor({
  blog,
  setBlog,
  readOnly,
}) {
  return (
    <div className="w-75 mt-5 mx-auto">
      <CoverImage
        blog={blog}
        setBlog={setBlog}
        readOnly={readOnly}
      />
      <BlogTitle
        blog={blog}
        setBlog={setBlog}
        readOnly={readOnly}
      />
      <BlogBody
        blog={blog}
        setBlog={setBlog}
        readOnly={readOnly}
      />
    </div>
  );
}
