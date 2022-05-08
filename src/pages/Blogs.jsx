import { useQuery } from "react-query";
import { BlogsList, EmptyBlogs, BlogListLoader } from "components";
import { reblogApi } from "api";

export default function Blogs() {
  const { isLoading, data } = useQuery("blogs", () => reblogApi.get("/blogs"));

  return isLoading ? (
    <BlogListLoader />
  ) : data.data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data.data} />
  );
}
