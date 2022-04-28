import { useQuery } from "react-query";
import { EmptyBlogs, Spinner, BlogsList } from "components";
import { getDrafts } from "api";

export default function Drafts() {
  const { isLoading, data } = useQuery("drafts", getDrafts);
  
  return isLoading ? (
    <Spinner />
  ) : data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data} />
  );
}
