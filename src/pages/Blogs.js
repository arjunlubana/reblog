import { useState, useEffect } from "react";
import { BlogsList, Spinner } from "components";
import { getBlogs } from "utils/BlogsCRUD";

export default function Blogs({ blogs, setBlogs }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? <Spinner /> : <BlogsList blogs={blogs} />;
}
