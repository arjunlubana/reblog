import { useQuery } from "react-query";
import { EmptyBlogs, BlogsList, BlogListLoader } from "components";
import { getDrafts } from "api";

export default function Drafts() {
  const { isLoading, data } = useQuery("drafts", getDrafts);

  return isLoading ? (
    <BlogListLoader />
  ) : data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data} />
  );
}
