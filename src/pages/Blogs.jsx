import { useQuery } from "react-query";
import { BlogsList, EmptyBlogs, BlogListLoader } from "components";
import { getBlogs } from "api";

export default function Blogs() {
  const { isLoading, data } = useQuery("blogs", getBlogs);

  return isLoading ? (
    <BlogListLoader />
  ) : data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data} />
  );
}
