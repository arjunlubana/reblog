import { useQuery } from "react-query";
import { EmptyBlogs, BlogsList, BlogListLoader } from "components";
import reblogApi from "api/reblogApi";

export default function Drafts() {
  const { isLoading, data } = useQuery("drafts", () => reblogApi.get("/drafts"));

  return isLoading ? (
    <BlogListLoader />
  ) : data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data} />
  );
}
