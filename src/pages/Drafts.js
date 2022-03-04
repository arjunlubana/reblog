import { useState, useEffect } from "react";
import { BlogsList } from "../components";
import { getDrafts } from "../lib/blog-crud";

export default function Drafts({ blogs, setBlogs }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogsData = await getDrafts();
      setBlogs(blogsData);
      setIsLoading(false);
    })();
  }, []);

  return(
  <BlogsList blogs={blogs} isLoading={isLoading} />
  )
}