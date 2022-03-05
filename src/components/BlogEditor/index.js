import { CoverImage, BlogTitle, BlogBody } from "..";
import "draft-js/dist/Draft.css";

export default function BlogEditor({ blog, readOnly }) {
  return (
    <div className="w-75 mt-5 mx-auto">
      <CoverImage
        coverImage={blog.coverImage}
        setCoverImage={blog.setCoverImage}
        blogUpdate={blog.blogUpdate}
        setBlogUpdate={blog.setBlogUpdate}
        readOnly={readOnly}
      />
      <BlogTitle
        blogTitle={blog.blogTitle}
        setBlogTitle={blog.setBlogTitle}
        blogUpdate={blog.blogUpdate}
        setBlogUpdate={blog.setBlogUpdate}
        readOnly={readOnly}
      />
      <BlogBody
        blogBody={blog.blogBody}
        setBlogBody={blog.setBlogBody}
        blogUpdate={blog.blogUpdate}
        setBlogUpdate={blog.setBlogUpdate}
        readOnly={readOnly}
      />
    </div>
  );
}
