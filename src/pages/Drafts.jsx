import { useQuery } from "react-query";
import { EmptyBlogs, BlogsList, BlogListLoader } from "components";
import reblogApi from "api/reblogApi";

export default function Drafts() {
  const { isLoading, data } = useQuery("drafts", () => reblogApi.get("blogs/drafts"));
  return isLoading ? (
    <BlogListLoader />
  ) : data.data.length ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data.data.data} />
  );
}
