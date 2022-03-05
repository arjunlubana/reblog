import { useState, useEffect } from "react";
import { BlogsList, Spinner } from "components";
import { getDrafts } from "utils/blog-crud";

export default function Drafts({ blogs, setBlogs }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogsData = await getDrafts();
      setBlogs(blogsData);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? <Spinner /> : <BlogsList blogs={blogs} />;
}
